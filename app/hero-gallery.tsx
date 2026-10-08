'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { bakeryGallery, temporaryGalleryPhoto } from '../lib/gallery';

const suppliedPhotos = bakeryGallery.filter(photo => photo.src);
const photos = suppliedPhotos.length ? suppliedPhotos : [temporaryGalleryPhoto];

export default function HeroGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hidden, setHidden] = useState(false);
  const multiple = photos.length > 1;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion(); updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!multiple || paused || hovered || focused || reducedMotion || hidden) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % photos.length), 5000);
    return () => window.clearInterval(timer);
  }, [multiple, paused, hovered, focused, reducedMotion, hidden, index]);

  function move(offset: number) { setIndex(current => (current + offset + photos.length) % photos.length); }

  return <figure className="hero-picture hero-gallery" aria-label="საცხობის გარე და შიდა ხედები" aria-roledescription="ფოტოგალერეა"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}
    onKeyDown={event => { if (multiple && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); } }}>
    {photos.map((photo, photoIndex) => <img key={photo.id} src={photo.src} alt={photo.alt}
      className={`gallery-photo ${photoIndex === index ? 'is-visible' : ''}`}
      aria-hidden={photoIndex !== index} fetchPriority={photoIndex === 0 ? 'high' : 'auto'}
      loading={photoIndex === 0 ? 'eager' : 'lazy'} />)}
    <figcaption>ცომი <span>{suppliedPhotos.length ? photos[index].caption : 'პატარა ბედნიერება, დიდი გემო.'}</span></figcaption>
    {!suppliedPhotos.length && <span className="sample-photo">საილუსტრაციო ვიზუალი</span>}
    {multiple && <>
      <button type="button" className="gallery-arrow gallery-previous" aria-label="წინა ფოტო" onClick={() => move(-1)}><ChevronLeft size={22}/></button>
      <button type="button" className="gallery-arrow gallery-next" aria-label="შემდეგი ფოტო" onClick={() => move(1)}><ChevronRight size={22}/></button>
      <div className="gallery-controls"><div className="gallery-dots" role="group" aria-label="ფოტოს არჩევა">{photos.map((photo, photoIndex) => <button type="button" key={photo.id} onClick={() => setIndex(photoIndex)} aria-label={`ფოტო ${photoIndex + 1}: ${photo.caption}`} aria-pressed={photoIndex === index}><span className={photoIndex === index ? 'active' : ''}/></button>)}</div>
        <button type="button" className="gallery-pause" aria-label={paused ? 'ავტომატური მონაცვლეობის გაგრძელება' : 'ავტომატური მონაცვლეობის შეჩერება'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <Play size={16}/> : <Pause size={16}/>}</button>
      </div>
      <span className="sr-only" aria-live={paused || focused ? 'polite' : 'off'}>{`ფოტო ${index + 1} / ${photos.length}: ${photos[index].caption}`}</span>
    </>}
  </figure>;
}
