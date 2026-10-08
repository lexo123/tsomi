import { assetUrl } from './asset-url';
export type GalleryPhoto = { id: string; src: string; alt: string; caption: string };

// Photographs supplied by the user, in their requested upload order.
export const bakeryGallery: GalleryPhoto[] = [
  { id: 'exterior', src: assetUrl('/images/gallery-1.jpeg'), alt: 'ცომის გარე ხედი — ხის აბრა და შესასვლელი', caption: 'გარე ხედი' },
  { id: 'interior', src: assetUrl('/images/gallery-2.jpeg'), alt: 'საცხობის ინტერიერი — მაგიდები და პურის დახლი', caption: 'საცხობის ინტერიერი' },
  { id: 'baking', src: assetUrl('/images/gallery-3.jpeg'), alt: 'პურის გამოცხობა თონეში', caption: 'პური თონეში' },
  { id: 'workspace', src: assetUrl('/images/gallery-4.jpeg'), alt: 'საცხობის სამუშაო სივრცე და საცხობი მოწყობილობები', caption: 'საცხობის სამუშაო სივრცე' },
  { id: 'table', src: assetUrl('/images/gallery-5.jpeg'), alt: 'სუფრა პურითა და ქართული ცომეულით', caption: 'ცომიდან თქვენს სუფრამდე' },
];

export const temporaryGalleryPhoto: GalleryPhoto = {
  id: 'temporary', src: assetUrl('/images/bakery-hero.png'),
  alt: 'პურისა და კრუასანის დროებითი საილუსტრაციო ვიზუალი', caption: 'საილუსტრაციო ვიზუალი',
};
