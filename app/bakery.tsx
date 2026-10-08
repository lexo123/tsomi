'use client';
import { useEffect, useRef, useState } from 'react';
import { Camera, Check, Clock3, Minus, Plus, ShoppingBag, Wheat, CalendarDays, LoaderCircle, MapPin, Phone, MessageCircle, Copy, X } from 'lucide-react';
import { products, formatPrice, type ProductId } from '../lib/products';
import { contact } from '../lib/contact';
import HeroGallery from './hero-gallery';
import Catalog from './catalog';
import { canPickUp, pickupTimes } from '../lib/pickup';
type Cart = Partial<Record<ProductId, number>>;
const today = () => new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Tbilisi' }).format(new Date());

export default function Bakery() {
  const [cart, setCart] = useState<Cart>({});
  const [pickupDate,setPickupDate]=useState('');
  const [now,setNow]=useState(() => Date.now());
  useEffect(()=>{const timer=window.setInterval(()=>setNow(Date.now()),30000);return ()=>window.clearInterval(timer);},[]);
  const [copied, setCopied] = useState(false);
  const viberDialog = useRef<HTMLDialogElement>(null);
  async function copyViberNumber() {
    try { await navigator.clipboard.writeText(contact.phone); setCopied(true); }
    catch { setCopied(false); }
  }
  const [notice, setNotice] = useState('');
  const submitting = false;
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<{reference: string; date: string; time: string} | null>(null);
  const count = Object.values(cart).reduce<number>((sum, n) => sum + (n || 0), 0);
  const chosen = products.filter(p => cart[p.id]);
  const totalTetri = chosen.reduce((sum, p) => sum + p.priceTetri * (cart[p.id] || 0), 0);
  function adjust(id: ProductId, delta: number) {
    setCart(current => { const value = Math.min(50, Math.max(0, (current[id] || 0) + delta)); const next = {...current}; if (value) next[id] = value; else delete next[id]; return next; });
    setSuccess(null); setError('');
  }
  function reserve(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!count) return;
    const form = new FormData(event.currentTarget);
    const date = String(form.get('date')), time = String(form.get('time'));
    if (!canPickUp(date,time)) {
      setError('აირჩიეთ გატანის დრო მინიმუმ 1 საათით გვიან.');
      return;
    }
    setError('');
    setSuccess({reference:`DEMO-${crypto.randomUUID().slice(0,8).toUpperCase()}`,date,time});
    setCart({});
  }
  return <>
    <div className="demo-ribbon">პორტფოლიოს დემო <span>·</span> გამოგონილი საცხობი · რეალური შეკვეთები არ მიიღება</div>
    <header className="header wrap"><a href="#" className="brand" aria-label="ცომი — მთავარი">ცომი<span>საცხობი</span></a><nav aria-label="მთავარი ნავიგაცია"><a href="#products">პროდუქტები</a><a href="#reservation">როგორ დავჯავშნო</a><a href="#contact">კონტაქტი</a></nav><a className="bag-link" href="#reservation"><ShoppingBag size={19}/><span>დაჯავშნა</span><span className="bag-count" aria-label={`${count} პროდუქტი`}>{count}</span></a></header>
    <main>
      <section className="hero wrap" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span/>ცომიდან — თქვენს სუფრამდე</p><h1 id="hero-title">კარგი დღე<br/>კარგი პურით<br/><em>იწყება.</em></h1><p className="hero-description">პური, ტკბილეული და საყვარელი ქართული გემოები.<br className="desktop-break"/> აირჩიეთ, დაჯავშნეთ და გაიტანეთ თქვენთვის სასურველ დროს.</p><a href="#products" className="button primary">აირჩიეთ თქვენი გემო</a><div className="hero-note"><Wheat size={19}/><span>შეუკვეთეთ მინიმუმ 1 საათით ადრე</span></div></div><HeroGallery /></section>
      <div className="divider wrap"><span>აირჩიე</span><span>დაჯავშნე</span><span>გაიტანე</span></div>
      <Catalog cart={cart} disabled={submitting} onAdd={id=>{adjust(id,1);setNotice(`${products.find(p=>p.id===id)?.name} დაემატა თქვენს არჩევანს`);}} />
      <section id="reservation" className="reservation-section"><div className="wrap reservation-layout"><div className="reservation-intro"><p className="eyebrow">თქვენი არჩევანი გელოდებათ</p><h2>დაგვიტოვეთ<br/>თქვენი<br/><em>სურვილები.</em></h2><p>შეკვეთა გააკეთეთ გატანამდე მინიმუმ 1 საათით ადრე. აირჩიეთ პროდუქტები, რაოდენობა და გატანის დრო.</p><ol className="steps"><li><span>01</span><div><strong>აირჩიეთ გემო</strong><p>დაამატეთ სასურველი პროდუქტები.</p></div></li><li><span>02</span><div><strong>დატოვეთ მოთხოვნა</strong><p>მიუთითეთ საკონტაქტო ინფორმაცია და დრო.</p></div></li><li><span>03</span><div><strong>დაელოდეთ დადასტურებას</strong><p>გატანამდე საჭიროა საცხობის დადასტურება.</p></div></li></ol><div className="reservation-note"><Clock3 size={20}/><p>მოთხოვნა ავტომატურად არ ადასტურებს პროდუქტის ხელმისაწვდომობას.</p></div></div>
          <div className="reservation-card">{success ? <div className="success" role="status"><span className="success-icon"><Check size={30}/></span><p className="eyebrow">დაჯავშნის დემონსტრაცია</p><h3>საჩვენებელი ჯავშანი მზადაა</h3><p>საჩვენებელი ნომერია <strong>{success.reference}</strong>.</p><div className="success-details"><CalendarDays size={20}/><span>{success.date} · {success.time}</span></div><p>ეს მონაცემები მხოლოდ ამ გვერდზე ჩანს და არსად იგზავნება.</p><p className="demo-success">ეს პორტფოლიოს ვერსიაა — რეალური ჯავშანი არ შექმნილა.</p><button className="button primary" onClick={()=>{setSuccess(null);document.getElementById('products')?.scrollIntoView({behavior:'smooth'});}}>პროდუქტებთან დაბრუნება</button></div>
            : <form onSubmit={reserve} onChange={()=>{setError('');}}><div className="card-title"><h3>თქვენი ჯავშანი</h3><ShoppingBag size={22}/></div>{count ? <div className="cart-list">{chosen.map(p=><div className="cart-row" key={p.id}><div className="cart-product"><span>{p.name}</span><small>{formatPrice(p.priceTetri)} / {p.note.includes('ნაჭერი') ? 'ნაჭერი' : 'ცალი'}</small><strong>{formatPrice(p.priceTetri * (cart[p.id] || 0))}</strong></div><div className="quantity"><button type="button" aria-label={`${p.name} — რაოდენობის შემცირება`} onClick={()=>adjust(p.id,-1)} disabled={submitting}><Minus size={14}/></button><output aria-label="რაოდენობა">{cart[p.id]}</output><button type="button" aria-label={`${p.name} — რაოდენობის გაზრდა`} onClick={()=>adjust(p.id,1)} disabled={submitting||cart[p.id]===50}><Plus size={14}/></button></div></div>)}<div className="cart-total"><span>ჯამი</span><strong>{formatPrice(totalTetri)}</strong></div></div> : <div className="empty-cart"><ShoppingBag size={28} strokeWidth={1}/><p>ჯერ არაფერი აგირჩევიათ.</p><a href="#products">გადახედეთ პროდუქტებს</a></div>}
              <fieldset disabled={submitting}><legend className="sr-only">საკონტაქტო ინფორმაცია და გატანის დრო</legend><label>თქვენი სახელი<input name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="სახელი და გვარი"/></label><label>ტელეფონის ნომერი<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={24} pattern="[+0-9 \(\)\-]{9,24}" placeholder="მაგ. 555 12 34 56"/></label><div className="form-grid"><label>გატანის თარიღი<input name="date" type="date" required min={today()} value={pickupDate} onChange={event=>setPickupDate(event.target.value)} /></label><label>სასურველი დრო<select name="time" required defaultValue=""><option value="" disabled>აირჩიეთ დრო</option>{pickupTimes.map(t=><option key={t} value={t} disabled={!pickupDate||!canPickUp(pickupDate,t,now)}>{t}{pickupDate&&!canPickUp(pickupDate,t,now)?' — მიუწვდომელია':''}</option>)}</select></label></div><label>შენიშვნა <span className="optional">(არასავალდებულო)</span><textarea name="notes" maxLength={500} rows={2} placeholder="სურვილები ან შეკითხვა შეკვეთის შესახებ"/></label><label className="honeypot" aria-hidden="true">ვებსაიტი<input name="website" tabIndex={-1} autoComplete="off"/></label><label className="consent"><input name="consent" type="checkbox" required/><span>ვეთანხმები სახელისა და ტელეფონის გამოყენებას ამ მოთხოვნასთან დაკავშირებით დასაკავშირებლად.</span></label></fieldset>
              {error&&<p className="form-error" role="alert">{error}</p>}<button type="submit" className="button primary submit" disabled={!count||submitting}>{submitting ? <><LoaderCircle className="spin" size={18}/>იგზავნება…</>:'დაჯავშნის გამოცდა'}</button><p className="form-footnote">საჩვენებელი ფორმა: პირადი მონაცემები არ შეიყვანოთ. ინფორმაცია ბრაუზერიდან არსად იგზავნება. გადახდა არ ხდება. შეკვეთა გააკეთეთ გატანამდე მინიმუმ 1 საათით ადრე. შეკვეთა და გატანის დრო დასტურდება საცხობის მიერ. დროები მოცემულია თბილისის დროით.</p>
            </form>}</div>
        </div></section>
      <section id="contact" className="contact-section wrap" aria-labelledby="contact-title">
        <div className="section-heading"><div><p className="eyebrow">გელოდებით ცომში</p><h2 id="contact-title">მოგვწერეთ ან გვესტუმრეთ</h2></div></div>
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-detail"><MapPin size={22}/><div><h3>მისამართი</h3><address>{contact.address}</address></div></div>
            <div className="contact-detail"><Phone size={22}/><div><h3>ტელეფონი</h3><a className="contact-phone" href={`tel:${contact.phone}`}>{contact.displayPhone}</a></div></div>
            <div className="contact-actions"><a className="button primary" href={`tel:${contact.phone}`}><Phone size={18}/>დაგვირეკეთ</a><a className="button contact-button" href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>WhatsApp</a><button type="button" className="button contact-button" onClick={() => {setCopied(false); viberDialog.current?.showModal();}}><MessageCircle size={18}/>Viber</button></div>
            <a className="map-link" href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">გახსენით Google Maps-ში</a>
          </div>
          <div className="map-panel"><iframe title={`ცომი — ${contact.address}`} src={contact.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><p className="map-caption">თბილისი, საირმის ქუჩა, მეექვსე კორპუსი.</p></div>
        </div>
      </section>
      <dialog ref={viberDialog} className="viber-dialog" aria-labelledby="viber-title"><button type="button" className="dialog-close" aria-label="დახურვა" onClick={() => viberDialog.current?.close()}><X size={22}/></button><MessageCircle size={30}/><h2 id="viber-title">მოგვწერეთ Viber-ში</h2><p>გახსენით Viber და მოძებნეთ ეს ნომერი ან დაამატეთ კონტაქტებში.</p><p className="viber-number">{contact.phone}</p><button type="button" className="button primary" onClick={copyViberNumber}>{copied ? <Check size={18}/> : <Copy size={18}/>}<span>{copied ? 'ნომერი დაკოპირებულია' : 'ნომრის კოპირება'}</span></button><p className="sr-only" role="status">{copied ? 'ნომერი დაკოპირებულია' : ''}</p></dialog>
    </main><footer className="wrap footer"><a className="brand footer-brand" href="#">ცომი<span>საცხობი</span></a><p>ყველაფერი კარგი ცომით იწყება.</p><a href="#contact">კონტაქტი</a><span>© {new Date().getFullYear()} ცომი</span></footer><div className="sr-only" aria-live="polite" aria-atomic="true">{notice}</div>{!!count&&<a className="mobile-cart" href="#reservation"><ShoppingBag size={19}/><span>თქვენი ჯავშანი</span><strong>{count}</strong></a>}
  </>;
}
