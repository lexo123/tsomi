import { assetUrl } from './asset-url';
import { productImageSet } from './product-images';

export type ProductVariant = { id: string; groupId: string; name: string; category: string; priceTetri: number; description: string; note: string; image: string; label: string; weightGrams: number; size: string; ingredients: string[]; isFasting: boolean };
export type CatalogProduct = { id: string; name: string; category: string; description: string; image: string; imageLarge?: string; imageSrcSet?: string; isFasting: boolean; variants: ProductVariant[] };

const catalogData: CatalogProduct[] = [
  {
    "id": "shoti",
    "name": "შოთის პური",
    "category": "პური",
    "description": "შოთის პური თქვენი ყოველდღიური სუფრისთვის.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "shoti-small",
        "name": "შოთის პური — პატარა",
        "category": "პური",
        "priceTetri": 70,
        "description": "შოთის პური პატარა ზომით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "shoti",
        "label": "პატარა",
        "weightGrams": 180,
        "size": "სიგრძე 25 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "წყალი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      },
      {
        "id": "shoti",
        "name": "შოთის პური",
        "category": "პური",
        "priceTetri": 120,
        "description": "შოთის პური თქვენი ყოველდღიური სუფრისთვის.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "shoti",
        "label": "დიდი",
        "weightGrams": 350,
        "size": "სიგრძე 40 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "წყალი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "grey-bread",
    "name": "რუხი პური",
    "category": "პური",
    "description": "რუხი პური თქვენი ყოველდღიური სუფრისთვის.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "grey-bread",
        "name": "რუხი პური",
        "category": "პური",
        "priceTetri": 120,
        "description": "რუხი პური თქვენი ყოველდღიური სუფრისთვის.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "grey-bread",
        "label": "სტანდარტული",
        "weightGrams": 400,
        "size": "სიგრძე 28 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "ჭვავის ფქვილი",
          "წყალი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "bun",
    "name": "ფუნთუშა",
    "category": "ტკბილეული",
    "description": "ფუნთუშა დილის ჩაისა თუ ყავასთან.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "bun",
        "name": "ფუნთუშა",
        "category": "ტკბილეული",
        "priceTetri": 50,
        "description": "ფუნთუშა დილის ჩაისა თუ ყავასთან.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "bun",
        "label": "სტანდარტული",
        "weightGrams": 90,
        "size": "დიამეტრი 9 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "წყალი",
          "შაქარი",
          "მცენარეული ზეთი",
          "საფუარი",
          "ვანილი"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "raisin-bun",
    "name": "ქიშმიშიანი ფუნთუშა",
    "category": "ტკბილეული",
    "description": "ფუნთუშა ქიშმიშით.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "raisin-bun",
        "name": "ქიშმიშიანი ფუნთუშა",
        "category": "ტკბილეული",
        "priceTetri": 70,
        "description": "ფუნთუშა ქიშმიშით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "raisin-bun",
        "label": "სტანდარტული",
        "weightGrams": 90,
        "size": "დიამეტრი 9 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "ქიშმიში",
          "წყალი",
          "შაქარი",
          "მცენარეული ზეთი",
          "საფუარი"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "chocolate-bun",
    "name": "შოკოლადიანი ფუნთუშა",
    "category": "ტკბილეული",
    "description": "ფუნთუშა შოკოლადით.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "chocolate-bun",
        "name": "შოკოლადიანი ფუნთუშა",
        "category": "ტკბილეული",
        "priceTetri": 80,
        "description": "ფუნთუშა შოკოლადით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "chocolate-bun",
        "label": "სტანდარტული",
        "weightGrams": 90,
        "size": "დიამეტრი 9 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "შავი შოკოლადი რძის გარეშე",
          "წყალი",
          "შაქარი",
          "მცენარეული ზეთი",
          "საფუარი"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "cherry-bun",
    "name": "ალუბლის ჯემიანი ფუნთუშა",
    "category": "ტკბილეული",
    "description": "ფუნთუშა ალუბლის ჯემით.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "cherry-bun",
        "name": "ალუბლის ჯემიანი ფუნთუშა",
        "category": "ტკბილეული",
        "priceTetri": 80,
        "description": "ფუნთუშა ალუბლის ჯემით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "cherry-bun",
        "label": "სტანდარტული",
        "weightGrams": 90,
        "size": "დიამეტრი 9 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "ალუბლის ჯემი",
          "წყალი",
          "შაქარი",
          "მცენარეული ზეთი",
          "საფუარი"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "plum-bun",
    "name": "ქლიავის ჯემიანი ფუნთუშა",
    "category": "ტკბილეული",
    "description": "ფუნთუშა ქლიავის ჯემით.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "plum-bun",
        "name": "ქლიავის ჯემიანი ფუნთუშა",
        "category": "ტკბილეული",
        "priceTetri": 80,
        "description": "ფუნთუშა ქლიავის ჯემით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "plum-bun",
        "label": "სტანდარტული",
        "weightGrams": 90,
        "size": "დიამეტრი 9 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "ქლიავის ჯემი",
          "წყალი",
          "შაქარი",
          "მცენარეული ზეთი",
          "საფუარი"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "choux",
    "name": "შუ",
    "category": "ტკბილეული",
    "description": "შუ ჩაისა თუ ყავასთან მისაყოლებლად.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "choux",
        "name": "შუ",
        "category": "ტკბილეული",
        "priceTetri": 100,
        "description": "შუ ჩაისა თუ ყავასთან მისაყოლებლად.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "choux",
        "label": "სტანდარტული",
        "weightGrams": 70,
        "size": "დიამეტრი 7 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "წყალი",
          "მცენარეული მარგარინი",
          "შვრიის სასმელი",
          "სიმინდის სახამებელი",
          "შაქარი",
          "ვანილი"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "eclair",
    "name": "ეკლერი",
    "category": "ტკბილეული",
    "description": "ეკლერი ჩაისა თუ ყავასთან მისაყოლებლად.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "eclair",
        "name": "ეკლერი",
        "category": "ტკბილეული",
        "priceTetri": 100,
        "description": "ეკლერი ჩაისა თუ ყავასთან მისაყოლებლად.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "eclair",
        "label": "სტანდარტული",
        "weightGrams": 70,
        "size": "სიგრძე 12 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კვერცხი",
          "კარაქი",
          "რძე",
          "შაქარი",
          "კაკაო",
          "ვანილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "white-eclair",
    "name": "ეკლერი თეთრი შოკოლადით",
    "category": "ტკბილეული",
    "description": "ეკლერი თეთრი შოკოლადით.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "white-eclair",
        "name": "ეკლერი თეთრი შოკოლადით",
        "category": "ტკბილეული",
        "priceTetri": 100,
        "description": "ეკლერი თეთრი შოკოლადით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "white-eclair",
        "label": "სტანდარტული",
        "weightGrams": 70,
        "size": "სიგრძე 12 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კვერცხი",
          "კარაქი",
          "რძე",
          "თეთრი შოკოლადი",
          "შაქარი",
          "ვანილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "medok",
    "name": "მედოკი",
    "category": "ტკბილეული",
    "description": "მედოკი გასაზიარებლად.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "medok",
        "name": "მედოკი",
        "category": "ტკბილეული",
        "priceTetri": 800,
        "description": "მედოკი გასაზიარებლად.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "medok",
        "label": "მთლიანი",
        "weightGrams": 900,
        "size": "დიამეტრი 22 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "თაფლი",
          "მცენარეული ზეთი",
          "შვრიის სასმელი",
          "შაქარი",
          "სიმინდის სახამებელი",
          "სოდა"
        ],
        "isFasting": true
      },
      {
        "id": "medok-slice",
        "name": "მედოკი — ნაჭერი",
        "category": "ტკბილეული",
        "priceTetri": 150,
        "description": "მედოკის ერთი ნაჭერი.",
        "note": "1 ნაჭერი",
        "image": "",
        "groupId": "medok",
        "label": "ნაჭერი",
        "weightGrams": 120,
        "size": "დაახლოებით 8 × 5 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "თაფლი",
          "მცენარეული ზეთი",
          "შვრიის სასმელი",
          "შაქარი",
          "სიმინდის სახამებელი",
          "სოდა"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "ideal",
    "name": "იდეალი",
    "category": "ტკბილეული",
    "description": "იდეალი გასაზიარებლად.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "ideal",
        "name": "იდეალი",
        "category": "ტკბილეული",
        "priceTetri": 1200,
        "description": "იდეალი გასაზიარებლად.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "ideal",
        "label": "მთლიანი",
        "weightGrams": 900,
        "size": "დიამეტრი 22 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კვერცხი",
          "კარაქი",
          "შედედებული რძე",
          "ნიგოზი",
          "შაქარი",
          "კაკაო"
        ],
        "isFasting": false
      },
      {
        "id": "ideal-slice",
        "name": "იდეალი — ნაჭერი",
        "category": "ტკბილეული",
        "priceTetri": 190,
        "description": "იდეალის ერთი ნაჭერი.",
        "note": "1 ნაჭერი",
        "image": "",
        "groupId": "ideal",
        "label": "ნაჭერი",
        "weightGrams": 120,
        "size": "დაახლოებით 8 × 5 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კვერცხი",
          "კარაქი",
          "შედედებული რძე",
          "ნიგოზი",
          "შაქარი",
          "კაკაო"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "imeruli-lobiani",
    "name": "იმერული ლობიანი",
    "category": "კერძები",
    "description": "იმერული ლობიანი.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "imeruli-lobiani-small",
        "name": "იმერული ლობიანი — პატარა",
        "category": "კერძები",
        "priceTetri": 500,
        "description": "პატარა ზომის იმერული ლობიანი.",
        "note": "პატარა · 1 ცალი",
        "image": "",
        "groupId": "imeruli-lobiani",
        "label": "პატარა",
        "weightGrams": 250,
        "size": "დიამეტრი 20 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "ლობიო",
          "ხახვი",
          "მცენარეული ზეთი",
          "წყალი",
          "საფუარი",
          "მარილი",
          "შავი პილპილი"
        ],
        "isFasting": true
      },
      {
        "id": "imeruli-lobiani-medium",
        "name": "იმერული ლობიანი — საშუალო",
        "category": "კერძები",
        "priceTetri": 700,
        "description": "საშუალო ზომის იმერული ლობიანი.",
        "note": "საშუალო · 1 ცალი",
        "image": "",
        "groupId": "imeruli-lobiani",
        "label": "საშუალო",
        "weightGrams": 450,
        "size": "დიამეტრი 26 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "ლობიო",
          "ხახვი",
          "მცენარეული ზეთი",
          "წყალი",
          "საფუარი",
          "მარილი",
          "შავი პილპილი"
        ],
        "isFasting": true
      },
      {
        "id": "imeruli-lobiani-large",
        "name": "იმერული ლობიანი — დიდი",
        "category": "კერძები",
        "priceTetri": 1000,
        "description": "დიდი ზომის იმერული ლობიანი.",
        "note": "დიდი · 1 ცალი",
        "image": "",
        "groupId": "imeruli-lobiani",
        "label": "დიდი",
        "weightGrams": 700,
        "size": "დიამეტრი 32 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "ლობიო",
          "ხახვი",
          "მცენარეული ზეთი",
          "წყალი",
          "საფუარი",
          "მარილი",
          "შავი პილპილი"
        ],
        "isFasting": true
      }
    ]
  },
  {
    "id": "imeruli-khachapuri",
    "name": "იმერული ხაჭაპური",
    "category": "კერძები",
    "description": "იმერული ხაჭაპური.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "imeruli-khachapuri-small",
        "name": "იმერული ხაჭაპური — პატარა",
        "category": "კერძები",
        "priceTetri": 700,
        "description": "პატარა ზომის იმერული ხაჭაპური.",
        "note": "პატარა · 1 ცალი",
        "image": "",
        "groupId": "imeruli-khachapuri",
        "label": "პატარა",
        "weightGrams": 250,
        "size": "დიამეტრი 20 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "იმერული ყველი",
          "რძე",
          "კვერცხი",
          "კარაქი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      },
      {
        "id": "imeruli-khachapuri-medium",
        "name": "იმერული ხაჭაპური — საშუალო",
        "category": "კერძები",
        "priceTetri": 900,
        "description": "საშუალო ზომის იმერული ხაჭაპური.",
        "note": "საშუალო · 1 ცალი",
        "image": "",
        "groupId": "imeruli-khachapuri",
        "label": "საშუალო",
        "weightGrams": 450,
        "size": "დიამეტრი 26 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "იმერული ყველი",
          "რძე",
          "კვერცხი",
          "კარაქი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      },
      {
        "id": "imeruli-khachapuri-large",
        "name": "იმერული ხაჭაპური — დიდი",
        "category": "კერძები",
        "priceTetri": 1200,
        "description": "დიდი ზომის იმერული ხაჭაპური.",
        "note": "დიდი · 1 ცალი",
        "image": "",
        "groupId": "imeruli-khachapuri",
        "label": "დიდი",
        "weightGrams": 700,
        "size": "დიამეტრი 32 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "იმერული ყველი",
          "რძე",
          "კვერცხი",
          "კარაქი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "kubdari",
    "name": "კუბდარი",
    "category": "კერძები",
    "description": "კუბდარი.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "kubdari-small",
        "name": "კუბდარი — პატარა",
        "category": "კერძები",
        "priceTetri": 500,
        "description": "პატარა ზომის კუბდარი.",
        "note": "პატარა · 1 ცალი",
        "image": "",
        "groupId": "kubdari",
        "label": "პატარა",
        "weightGrams": 250,
        "size": "დიამეტრი 20 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "საქონლის ხორცი",
          "ღორის ხორცი",
          "ხახვი",
          "ნიორი",
          "სვანური მარილი",
          "ძირა",
          "წყალი"
        ],
        "isFasting": false
      },
      {
        "id": "kubdari-medium",
        "name": "კუბდარი — საშუალო",
        "category": "კერძები",
        "priceTetri": 1000,
        "description": "საშუალო ზომის კუბდარი.",
        "note": "საშუალო · 1 ცალი",
        "image": "",
        "groupId": "kubdari",
        "label": "საშუალო",
        "weightGrams": 450,
        "size": "დიამეტრი 26 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "საქონლის ხორცი",
          "ღორის ხორცი",
          "ხახვი",
          "ნიორი",
          "სვანური მარილი",
          "ძირა",
          "წყალი"
        ],
        "isFasting": false
      },
      {
        "id": "kubdari-large",
        "name": "კუბდარი — დიდი",
        "category": "კერძები",
        "priceTetri": 1500,
        "description": "დიდი ზომის კუბდარი.",
        "note": "დიდი · 1 ცალი",
        "image": "",
        "groupId": "kubdari",
        "label": "დიდი",
        "weightGrams": 700,
        "size": "დიამეტრი 32 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "საქონლის ხორცი",
          "ღორის ხორცი",
          "ხახვი",
          "ნიორი",
          "სვანური მარილი",
          "ძირა",
          "წყალი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "chebureki",
    "name": "ჩებურეკი",
    "category": "კერძები",
    "description": "ჩებურეკი თქვენი სუფრისთვის.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "chebureki",
        "name": "ჩებურეკი",
        "category": "კერძები",
        "priceTetri": 700,
        "description": "ჩებურეკი თქვენი სუფრისთვის.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "chebureki",
        "label": "სტანდარტული",
        "weightGrams": 180,
        "size": "სიგრძე 22 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "საქონლის ხორცი",
          "ხახვი",
          "წყალი",
          "მცენარეული ზეთი",
          "მარილი",
          "შავი პილპილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "megruli-khachapuri",
    "name": "მეგრული ხაჭაპური",
    "category": "კერძები",
    "description": "მეგრული ხაჭაპური.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "megruli-khachapuri-small",
        "name": "მეგრული ხაჭაპური — პატარა",
        "category": "კერძები",
        "priceTetri": 700,
        "description": "პატარა ზომის მეგრული ხაჭაპური.",
        "note": "პატარა · 1 ცალი",
        "image": "",
        "groupId": "megruli-khachapuri",
        "label": "პატარა",
        "weightGrams": 250,
        "size": "დიამეტრი 20 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "იმერული ყველი",
          "სულგუნი",
          "რძე",
          "კვერცხი",
          "კარაქი",
          "საფუარი"
        ],
        "isFasting": false
      },
      {
        "id": "megruli-khachapuri-medium",
        "name": "მეგრული ხაჭაპური — საშუალო",
        "category": "კერძები",
        "priceTetri": 1100,
        "description": "საშუალო ზომის მეგრული ხაჭაპური.",
        "note": "საშუალო · 1 ცალი",
        "image": "",
        "groupId": "megruli-khachapuri",
        "label": "საშუალო",
        "weightGrams": 450,
        "size": "დიამეტრი 26 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "იმერული ყველი",
          "სულგუნი",
          "რძე",
          "კვერცხი",
          "კარაქი",
          "საფუარი"
        ],
        "isFasting": false
      },
      {
        "id": "megruli-khachapuri-large",
        "name": "მეგრული ხაჭაპური — დიდი",
        "category": "კერძები",
        "priceTetri": 1400,
        "description": "დიდი ზომის მეგრული ხაჭაპური.",
        "note": "დიდი · 1 ცალი",
        "image": "",
        "groupId": "megruli-khachapuri",
        "label": "დიდი",
        "weightGrams": 700,
        "size": "დიამეტრი 32 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "იმერული ყველი",
          "სულგუნი",
          "რძე",
          "კვერცხი",
          "კარაქი",
          "საფუარი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "potato-pie",
    "name": "კარტოფილის ღვეზელი",
    "category": "კერძები",
    "description": "ღვეზელი კარტოფილის შიგთავსით.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "potato-pie",
        "name": "კარტოფილის ღვეზელი",
        "category": "კერძები",
        "priceTetri": 200,
        "description": "ღვეზელი კარტოფილის შიგთავსით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "potato-pie",
        "label": "სტანდარტული",
        "weightGrams": 140,
        "size": "სიგრძე 16 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კარტოფილი",
          "ხახვი",
          "რძე",
          "კარაქი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "fried-potato-pie",
    "name": "კარტოფილის ღვეზელი ზეთში",
    "category": "კერძები",
    "description": "ზეთში მომზადებული ღვეზელი კარტოფილის შიგთავსით.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "fried-potato-pie",
        "name": "კარტოფილის ღვეზელი ზეთში",
        "category": "კერძები",
        "priceTetri": 200,
        "description": "ზეთში მომზადებული ღვეზელი კარტოფილის შიგთავსით.",
        "note": "1 ცალი",
        "image": "",
        "groupId": "fried-potato-pie",
        "label": "სტანდარტული",
        "weightGrams": 140,
        "size": "სიგრძე 16 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კარტოფილი",
          "ხახვი",
          "რძე",
          "მცენარეული ზეთი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "puff-khachapuri",
    "name": "ფენოვანი ხაჭაპური",
    "category": "კერძები",
    "description": "ფენოვანი ხაჭაპური.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "puff-khachapuri-small",
        "name": "ფენოვანი ხაჭაპური — პატარა",
        "category": "კერძები",
        "priceTetri": 450,
        "description": "პატარა ზომის ფენოვანი ხაჭაპური.",
        "note": "პატარა · 1 ცალი",
        "image": "",
        "groupId": "puff-khachapuri",
        "label": "პატარა",
        "weightGrams": 250,
        "size": "16 × 16 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კარაქი",
          "იმერული ყველი",
          "კვერცხი",
          "წყალი",
          "მარილი"
        ],
        "isFasting": false
      },
      {
        "id": "puff-khachapuri-large",
        "name": "ფენოვანი ხაჭაპური — დიდი",
        "category": "კერძები",
        "priceTetri": 800,
        "description": "დიდი ზომის ფენოვანი ხაჭაპური.",
        "note": "დიდი · 1 ცალი",
        "image": "",
        "groupId": "puff-khachapuri",
        "label": "დიდი",
        "weightGrams": 700,
        "size": "24 × 24 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კარაქი",
          "იმერული ყველი",
          "კვერცხი",
          "წყალი",
          "მარილი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "semi-puff-khachapuri",
    "name": "ნახევრად ფენოვანი ხაჭაპური",
    "category": "კერძები",
    "description": "ნახევრად ფენოვანი ხაჭაპური.",
    "image": "",
    "isFasting": false,
    "variants": [
      {
        "id": "semi-puff-khachapuri-small",
        "name": "ნახევრად ფენოვანი ხაჭაპური — პატარა",
        "category": "კერძები",
        "priceTetri": 450,
        "description": "პატარა ზომის ნახევრად ფენოვანი ხაჭაპური.",
        "note": "პატარა · 1 ცალი",
        "image": "",
        "groupId": "semi-puff-khachapuri",
        "label": "პატარა",
        "weightGrams": 250,
        "size": "16 × 16 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კარაქი",
          "იმერული ყველი",
          "რძე",
          "საფუარი",
          "კვერცხი"
        ],
        "isFasting": false
      },
      {
        "id": "semi-puff-khachapuri-large",
        "name": "ნახევრად ფენოვანი ხაჭაპური — დიდი",
        "category": "კერძები",
        "priceTetri": 800,
        "description": "დიდი ზომის ნახევრად ფენოვანი ხაჭაპური.",
        "note": "დიდი · 1 ცალი",
        "image": "",
        "groupId": "semi-puff-khachapuri",
        "label": "დიდი",
        "weightGrams": 700,
        "size": "24 × 24 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "კარაქი",
          "იმერული ყველი",
          "რძე",
          "საფუარი",
          "კვერცხი"
        ],
        "isFasting": false
      }
    ]
  },
  {
    "id": "semi-puff-lobiani",
    "name": "ნახევრად ფენოვანი ლობიანი",
    "category": "კერძები",
    "description": "ნახევრად ფენოვანი ლობიანი.",
    "image": "",
    "isFasting": true,
    "variants": [
      {
        "id": "semi-puff-lobiani-small",
        "name": "ნახევრად ფენოვანი ლობიანი — პატარა",
        "category": "კერძები",
        "priceTetri": 500,
        "description": "პატარა ზომის ნახევრად ფენოვანი ლობიანი.",
        "note": "პატარა · 1 ცალი",
        "image": "",
        "groupId": "semi-puff-lobiani",
        "label": "პატარა",
        "weightGrams": 250,
        "size": "16 × 16 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "მცენარეული მარგარინი",
          "ლობიო",
          "ხახვი",
          "წყალი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": true
      },
      {
        "id": "semi-puff-lobiani-large",
        "name": "ნახევრად ფენოვანი ლობიანი — დიდი",
        "category": "კერძები",
        "priceTetri": 800,
        "description": "დიდი ზომის ნახევრად ფენოვანი ლობიანი.",
        "note": "დიდი · 1 ცალი",
        "image": "",
        "groupId": "semi-puff-lobiani",
        "label": "დიდი",
        "weightGrams": 700,
        "size": "24 × 24 სმ",
        "ingredients": [
          "ხორბლის ფქვილი",
          "მცენარეული მარგარინი",
          "ლობიო",
          "ხახვი",
          "წყალი",
          "საფუარი",
          "მარილი"
        ],
        "isFasting": true
      }
    ]
  }
];

export const catalogProducts: CatalogProduct[] = catalogData.map(product => product.image ? { ...product, image: assetUrl(product.image) } : ({ ...product, ...productImageSet(product.id) }));

export const products = catalogProducts.flatMap(product => product.variants);
export type ProductId = string;
export function formatPrice(tetri: number): string { return new Intl.NumberFormat('ka-GE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(tetri / 100) + ' ₾'; }
