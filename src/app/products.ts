export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: string;
  url: string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple MacBook Air 13',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    price: 480550,
    description: 'A small chip. A grand breakthrough is the first chip designed specifically for Mac.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    category: "laptop",

    likes:0,
  },
  {
    id: 2,
    name: 'ASUS VivoBook 15',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h0c/62069150973982/asus-vivobook-15-k513ea-l12013w-90nb0sg2-m38550-serebristyj-106243075-1.jpg',
    price: 349990,
    description: 'The matrix in this laptop does not flicker in the entire range of brightness level changes.',
    rating: '5 stars',
    url:"https://kaspi.kz/shop/p/asus-vivobook-15-k513ea-l12013w-90nb0sg2-m38550-serebristyi-106243075/?c=750000000#!/item",
    category: "laptop",

    likes:0,
  },
  {
    id: 3,
    name: 'Huawei MateBook D14',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/ha1/52681694543902/huawei-matebook-d14-nobeld-wdi9a-seryj-105935084-1.jpg',
    price: 319990,
    description: 'Equipped with a bright IPC screen with a resolution of 1920*1080 pixels',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/huawei-matebook-d14-nobeld-wdi9a-serebristyi-105935084/?c=750000000#!/item",
    category: "laptop",
    
    likes:0,
  },
  {
    id: 4,
    name: 'Samsung Galaxy Watch4',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h14/44807403274270/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670-1.jpg',
    price: 90680,
    description: 'For healthy sleep, the Galaxy Watch4 has a special tracker that determines the quality of your sleep.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670/?c=750000000#!/item",
    category: "watch",
    
    likes:0,
  },
  {
    id: 5,
    name: 'Huawei Watch Fit 2 Active',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/hc4/62048109756446/huawei-watch-fit-2-cernyj-105632660-1.jpg',
    price: 61211,
    description: 'Huawei Watch Fit 2 can play pre-downloaded music through a mobile app.',
    rating: '4.98 stars',
    url: "https://kaspi.kz/shop/p/huawei-watch-fit-2-active-chernyi-105632660/?c=750000000#!/item",
    category: "watch",
    
    likes:0,
  },
  {
    id: 6,
    name: 'Instax MINI 11',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h84/65597366108190/instax-mini-11-belyi-plenka-20-sht-103579524-1.jpg',
    price: 60700,
    description: 'Do you consider yourself a true connoisseur of classics and dream of an instant printing camera? Then Instax MINI 11 is designed for YOU.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/instax-mini-11-belyi-plenka-20-sht-103579524/?c=750000000#!/item",
    category: "photo camera",
    
    likes:0,
  },
  {
    id: 7,
    name: 'Canon EOS 4000D ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/he4/31852480069662/canon-eos-4000d-18-55-iii-cernyj-2240150-1.jpg',
    price: 176980,
    description: 'Creating interesting stories with high-quality photos and videos in Full HD format is easier than you think, because now there is an 18-megapixel EOS 4000D camera.',
    rating: '4.5 stars',
    url: "https://kaspi.kz/shop/p/canon-eos-4000d-18-55-iii-chernyi-2240150/?c=750000000#!/item",
    category: "photo camera",
    
    likes:0,
  },
  {
    id: 8,
    name: 'Apple iPhone 13',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    price: 373598,
    description: 'New ultra-wide-angle camera sees more detail in dark vaults',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item",
    category: "phone",
    
    likes:0,
  },
  {
    id: 9,
    name: 'Samsung Galaxy s22 Ultra',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h31/48703240863774/samsung-galaxy-s22-ultra-12-512gb-cernyj-podarok-103675087-1.jpg',
    price: 495950,
    description: 'Its thin aluminum body impresses with its perfect shape. And the exquisite outlines of the main chambers seem to be buried in its smooth surface.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-8-gb-128-gb-chernyi-103675087/?c=750000000#!/item",
    category: "phone",
    
    likes:0,
  },
  {
    id: 10,
    name: 'Poco F4 GT',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h87/50644574470174/xiaomi-poco-f4-gt-12-gb-256-gb-cernyj-104798981-1.jpg',
    price: 279275,
    description: 'Metal construction with elegant and delicate details AG glass provides a more pleasant feeling in the hand.',
    rating: '4.99 stars',
    url: "https://kaspi.kz/shop/p/poco-f4-gt-12-gb-256-gb-chernyi-104798981/?c=750000000#!/item",
    category: "phone",
    
    likes:0,
  },
  {
   id: 11,
   name: 'Apple Watch SE',
   image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h48/hfc/46636067291166/apple-watch-se-40-mm-seryi-100568123-1.jpg',
   price: 142480,
   description: 'Large Retina display that fits everything you need.',
   rating: '5 stars',
   url: "https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjYfwkQl9Wy8aUY6YuZoeHOGal9J2_KxfcGTZiGs1d4e3_8Hi-XdYhoCbAgQAvD_BwE#!/item",
   category: "watch",
  
   likes:0,
  },
  {
    id: 12,
    name: '70mai Maimo Rose',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h4f/62169757319198/xiaomi-70mai-maimo-zolotistyi-belyi-102642964-3.jpg',
    price: 21688,
    description: 'Smooth edges and light weight.',
    rating: '4.8 stars',
    url: "https://kaspi.kz/shop/p/70mai-maimo-rose-gold-rozovoe-zoloto-belyi-102642964/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjYfwkQl9Wy8aUY6YuZoeHOGal9J2_KxfcGTZiGs1d4e3_8Hi-XdYhoCbAgQAvD_BwE#!/item",
    category: "watch",
    
    likes:0,
  },
  {
    id: 13,
    name: 'Realme Watch 3 Pro',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/h9d/66888419377182/realme-watch-3-pro-108039617-1.jpg',
    price: 39888,
    description: 'Pretty functional for the price, all sensors work great, useful features, nice and stylish.',
    rating: '4.9 stars',
    url: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/h9d/66888419377182/realme-watch-3-pro-108039617-1.jpg",
    category: "watch",
    
    likes:0,
  },
  {
    id: 14,
    name: 'Acer Extensa 15',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h56/52615655948318/acer-extensa-15-ex215-52-nx-eg8er-00b-serebristyj-105725654-1.jpg',
    price: 259990,
    description: 'Designed for business people who need enough computing power and functionality for every day.',
    rating: '4.9 stars',
    url: "https://kaspi.kz/shop/p/acer-extensa-15-ex215-52-nx-eg8er-00b-chernyi-105725654/?c=750000000#!/item",
    category: "laptop",
    
    likes:0,
  },
  {
    id: 15,
    name: 'Lenovo IdeaPad 3',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/hc9/49952148127774/lenovo-ideapad-3-15ada05-81w1016nrk-cernyj-104422750-1.jpg',
    price: 219990,
    description: 'Service is great.',
    rating: '4.9 stars',
    url: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15ada05-81w1016nrk-chernyi-104422750/?c=750000000#!/item",
    category: "laptop",
    
    likes:0,
  },
  {
    id: 16,
    name: 'Xiaomi Redmi Note 11 Pro',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h17/49217235550238/xiaomi-redmi-note-11-pro-8-128gb-seryj-104020427-1.jpg',
    price: 138970,
    description: 'Super high refresh rate.',
    rating: '4.9 stars',
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-belyi-104020427/?c=750000000#!/item",
    category: "phone",
    
    likes:0,
  },
  {
    id: 17,
    name: 'OPPO Reno 7',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h46/50455778197534/orro-reno7-8-128gb-oranzevyj-104705825-1.jpg',
    price: 153260,
    description: 'Service is great.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000#!/item",
    category: "phone",
    
    likes:0,
  },
  {
    id: 18,
    name: 'Fujifilm Instax Mini 40',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/hc2/47492507697182/fujifilm-instax-mini-40-cernyj-102714918-2.jpg',
    price: 62899,
    description: 'Fujifilm Instax mini 40 will help you capture the brightest moments of your life and then share them with family and friends.',
    rating: '4.5 stars',
    url: "https://kaspi.kz/shop/p/fujifilm-instax-mini-40-chernyi-102714918/?c=750000000#!/item",
    category: "photo camera",
    
    likes:0,
  },
  {
    id: 19,
    name: 'Fujifilm INSTAX SQUARE SQ1',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h15/33455764373534/fujifilm-instax-square-sq1-oranzevyj-101109364-1-Container.jpg',
    price: 80000,
    description: 'Prints fast, comfortable films, easy to use.',
    rating: '4.9 stars',
    url: "https://kaspi.kz/shop/p/fujifilm-instax-square-sq1-oranzhevyi-101109364/?c=750000000#!/item",
    category: "photo camera",
    
    likes:0,
  },
  {
    id: 20,
    name: 'Sony ZV-E10 KIT',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h92/62659416391710/sony-zv-e10-kit-16-50mm-belyj-106553571-1.jpg',
    price: 499930,
    description: 'Delivers high quality video and audio, vlogger-optimized features, and versatile connectivity options.',
    rating: '5 stars',
    url: "https://kaspi.kz/shop/p/sony-zv-e10-kit-16-50mm-belyi-106553571/?c=750000000#!/item",
    category: "photo camera",
    
    likes:0,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/