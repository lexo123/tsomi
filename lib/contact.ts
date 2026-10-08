const address = 'თბილისი, საირმის ქუჩა, მეექვსე კორპუსი';
const coordinates = '41.72292772721597,44.76017894417988';
const mapQuery = encodeURIComponent(coordinates);

export const contact = {
  address,
  coordinates,
  phone: '+995597988866',
  displayPhone: '597 98 88 66',
  whatsappUrl: 'https://wa.me/995597988866',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${mapQuery}&z=18&output=embed&hl=ka`,
};
