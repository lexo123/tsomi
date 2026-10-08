import { assetUrl } from './asset-url';
export function productImageSet(id: string) {
  const root = assetUrl(`/images/products/${id}`);
  return {
    image: `${root}-640.webp`,
    imageLarge: `${root}-1024.webp`,
    imageSrcSet: `${root}-320.webp 320w, ${root}-640.webp 640w, ${root}-1024.webp 1024w`,
  };
}
