'use client';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Camera, Plus, X, Leaf } from 'lucide-react';
import { catalogProducts, formatPrice, type CatalogProduct, type ProductVariant } from '../lib/products';

export default function Catalog({cart, onAdd, disabled}: {cart:Partial<Record<string,number>>;onAdd:(id:string)=>void;disabled:boolean}) {
  const [category,setCategory]=useState('ყველა');
  const [fastingOnly,setFastingOnly]=useState(false);
  const [selected,setSelected]=useState<Record<string,string>>({});
  const [detail,setDetail]=useState<CatalogProduct|null>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  const visible=catalogProducts.filter(p=>(category==='ყველა'||p.category===category)&&(!fastingOnly||p.isFasting));
  function variant(product:CatalogProduct):ProductVariant { return product.variants.find(v=>v.id===selected[product.id])||product.variants[0]; }
  function choose(product:CatalogProduct,id:string){setSelected(current=>({...current,[product.id]:id}));}
  function open(product:CatalogProduct){flushSync(()=>setDetail(product));dialog.current?.showModal();if(dialog.current)dialog.current.scrollTop=0;}
  function options(product:CatalogProduct,location:string){return product.variants.length>1?<div className="variant-options" role="group" aria-label={`${product.name} — ზომა ან პორცია (${location})`}>{product.variants.map(v=><button type="button" key={v.id} aria-pressed={variant(product).id===v.id} className={variant(product).id===v.id?'active':''} onClick={()=>choose(product,v.id)}>{v.label}</button>)}</div>:<p className="single-variant">{variant(product).label}</p>;}
  function addButton(product:CatalogProduct){const v=variant(product);return <button type="button" className="add-button" disabled={disabled||cart[v.id]===50} onClick={()=>onAdd(v.id)} aria-label={`${product.name} — ${v.label} — დაჯავშნა`}><span>{cart[v.id]?`არჩეულია · ${cart[v.id]}`:'დაჯავშნა'}</span><Plus size={17}/></button>;}
  const active=detail?variant(detail):null;
  return <section id="products" className="catalog wrap" aria-labelledby="catalog-title">
    <div className="section-heading"><div><p className="eyebrow">ჩვენი ასორტიმენტი</p><h2 id="catalog-title">რას მიირთმევთ დღეს?</h2></div><p>შეკვეთა გააკეთეთ<br/>მინიმუმ 1 საათით ადრე.</p></div>
    <div className="category-filters" role="group" aria-label="პროდუქტის კატეგორია">{['ყველა','პური','კერძები','ტკბილეული'].map(value=><button key={value} type="button" aria-pressed={category===value} className={category===value?'active':''} onClick={()=>setCategory(value)}>{value}</button>)}<span className="filter-count" role="status">{visible.length} პროდუქტი</span></div>
    <label className="fasting-filter"><input type="checkbox" checked={fastingOnly} onChange={e=>setFastingOnly(e.target.checked)}/><Leaf size={18}/><span>მხოლოდ სამარხვო</span></label>
    <div className="product-grid">{visible.map(product=>{const v=variant(product);return <article className="product" key={product.id}>
      <button type="button" className={`product-image product-image-button tone-${catalogProducts.indexOf(product)%3}`} onClick={()=>open(product)} aria-label={`${product.name} — ფოტოს გადიდება და დეტალები`}>{product.image?<img src={product.image} srcSet={product.imageSrcSet} sizes="(max-width: 450px) calc(100vw - 36px), (max-width: 760px) calc((100vw - 52px) / 2), (max-width: 1000px) calc((100vw - 88px) / 3), (max-width: 1296px) calc((100vw - 148px) / 3), 383px" alt={product.name} loading="lazy" decoding="async" width={640} height={640}/>:<><span className="product-number" aria-hidden="true">{String(catalogProducts.indexOf(product)+1).padStart(2,'0')}</span><span className="photo-placeholder"><Camera size={26} strokeWidth={1}/><span>ფოტო მალე</span><span>ზომა და ინგრედიენტები</span></span></>}<span className="category-label">{product.category}</span>{product.isFasting&&<span className="fasting-badge"><Leaf size={13}/>სამარხვო</span>}</button>
      <div className="product-content"><h3>{product.name}</h3><p className="product-description">{product.description}</p>{options(product,'ბარათი')}<p className="product-meta">{v.size} · დაახლოებით {v.weightGrams} გ</p><div className="product-bottom"><span className="product-price">{formatPrice(v.priceTetri)}</span>{addButton(product)}</div></div>
    </article>;})}</div>
    {!visible.length&&<p className="catalog-empty" role="status">ამ კატეგორიაში სამარხვო პროდუქტი არ არის. აირჩიეთ სხვა კატეგორია ან მოხსენით მონიშვნა.</p>}
    <p className="catalog-note">ფოტოზე დაჭერით იხილეთ ზომა და ინგრედიენტები. ფასები მოცემულია ლარში.</p>
    <dialog ref={dialog} className="product-dialog" aria-labelledby="product-detail-title" onClick={event=>{if(event.target===event.currentTarget){const box=event.currentTarget.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.current?.close();}}}>
      <div className="dialog-toolbar"><button type="button" className="dialog-close" aria-label="დახურვა" onClick={()=>dialog.current?.close()}><X size={24}/></button></div>
      {detail&&active&&<div className="product-detail-layout"><div className="product-detail-image">{detail.image?<img src={detail.imageLarge || detail.image} alt={detail.name} decoding="async" width={1024} height={1024}/>:<div className="detail-placeholder"><Camera size={50} strokeWidth={1}/><p>პროდუქტის ფოტო მალე დაემატება</p></div>}</div><div className="product-detail-info"><p className="eyebrow">{detail.category}{detail.isFasting?' · სამარხვო':''}</p><h2 id="product-detail-title">{detail.name}</h2><p>{detail.description}</p>{options(detail,'დეტალები')}<dl className="product-specs"><div><dt>ზომა</dt><dd>{active.label} · {active.size}</dd></div><div><dt>წონა</dt><dd>დაახლოებით {active.weightGrams} გ</dd></div></dl><h3>ინგრედიენტები</h3><p className="ingredient-list">{active.ingredients.join(', ')}.</p><div className="product-bottom"><span className="product-price">{formatPrice(active.priceTetri)}</span>{addButton(detail)}</div><p className="detail-order-note">შეუკვეთეთ გატანამდე მინიმუმ 1 საათით ადრე.</p><button type="button" className="detail-go-cart" onClick={()=>{dialog.current?.close();document.getElementById('reservation')?.scrollIntoView({behavior:'smooth'});}}>თქვენი ჯავშნის ნახვა</button></div></div>}
    </dialog>
  </section>;
}
