import type { CatalogProduct } from './products';

export function matchesProductName(product: CatalogProduct, query: string): boolean {
  const words = query.normalize('NFKC').toLocaleLowerCase('ka-GE').trim().split(/\s+/).filter(Boolean);
  const name = product.name.normalize('NFKC').toLocaleLowerCase('ka-GE');
  return words.every(word => name.includes(word));
}
