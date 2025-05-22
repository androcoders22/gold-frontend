export interface GoldPrice {
  id: number;
  "10k": number;
  "12k": number;
  "16k": number;
  "18k": number;
  "21k": number;
  "22k": number;
  "23k": number;
  "24k": number;
  "6k": number;
  "8k": number;
  "9k": number;
  created_at: string;
  updated_at: string;
}

export interface GoldOunce {
  "24k": number;
}

export interface GoldData {
  last_tow: GoldPrice[];
  last_tow_ounce: GoldOunce[];
  last_our_val_24k: number[];
  last_our_val_22k: number[];
  last_our_val_21k: number[];
  last_our_val_18k: number[];
  last_our_created: string[];
  min_val_hourly: number;
  max_val_hourly: number;
}

export const goldData: GoldData = {
  last_tow: [
    {
      id: 5376265,
      "10k": 13.609,
      "12k": 16.331,
      "16k": 21.774,
      "18k": 24.666,
      "21k": 28.749,
      "22k": 30.11,
      "23k": 31.301,
      "24k": 32.752,
      "6k": 8.165,
      "8k": 10.887,
      "9k": 12.248,
      created_at: "2025-05-21T12:08:20.000000Z",
      updated_at: "2025-05-21T12:08:20.000000Z",
    },
    {
      id: 5376264,
      "10k": 13.609,
      "12k": 16.331,
      "16k": 21.774,
      "18k": 24.666,
      "21k": 28.749,
      "22k": 30.11,
      "23k": 31.301,
      "24k": 32.752,
      "6k": 8.165,
      "8k": 10.887,
      "9k": 12.248,
      created_at: "2025-05-21T12:08:10.000000Z",
      updated_at: "2025-05-21T12:08:10.000000Z",
    },
  ],
  last_tow_ounce: [{ "24k": 3310.412 }, { "24k": 3310.412 }],
  last_our_val_24k: [
    32.752, 32.81, 32.65, 32.95, 32.7, 32.6, 32.85, 32.78, 32.9, 32.68, 32.8,
    32.75, 32.95, 32.6, 32.88,
  ],
  last_our_val_22k: [
    30.11, 30.18, 30.05, 30.22, 30.1, 30, 30.19, 30.13, 30.2, 30.09, 30.15,
    30.12, 30.21, 30, 30.17,
  ],
  last_our_val_21k: [
    28.749, 28.8, 28.6, 28.95, 28.7, 28.55, 28.85, 28.78, 28.9, 28.68, 28.8,
    28.75, 28.95, 28.6, 28.88,
  ],
  last_our_val_18k: [
    24.666, 24.72, 24.55, 24.85, 24.6, 24.5, 24.75, 24.68, 24.8, 24.58, 24.7,
    24.65, 24.85, 24.5, 24.78,
  ],
  last_our_created: [
    "14:08 PM",
    "14:07 PM",
    "14:06 PM",
    "14:05 PM",
    "14:04 PM",
    "14:03 PM",
    "14:02 PM",
    "14:01 PM",
    "14:00 PM",
    "13:59 PM",
    "13:58 PM",
    "13:57 PM",
    "13:56 PM",
    "13:55 PM",
    "13:54 PM",
  ],
  min_val_hourly: 24.5,
  max_val_hourly: 32.95,
};

export interface ProductData {
  id: string;
  name: string;
  weight: string;
  price: string;
  image: string;
  isNew: boolean;
  category: "swiss" | "uae" | "lebah" | "silver";
}

export const products: ProductData[] = [
  {
    id: "1",
    name: "1 Gm Valcambi Swiss Gold Bar",
    weight: "1 Gram",
    price: "37.847 KD",
    image: "https://placehold.co/650x400/black/white?text=1g+Gold",
    isNew: true,
    category: "swiss",
  },
  {
    id: "2",
    name: "2.5 Gm Valcambi Swiss Gold Bar",
    weight: "2.5 Gram",
    price: "88.118 KD",
    image: "https://placehold.co/650x400/black/white?text=2.5g+Gold",
    isNew: true,
    category: "swiss",
  },
  {
    id: "3",
    name: "5 Gm Valcambi Swiss Gold Bar",
    weight: "5 Gram",
    price: "171.735 KD",
    image: "https://placehold.co/650x400/black/white?text=5g+Gold",
    isNew: true,
    category: "swiss",
  },
  {
    id: "4",
    name: "10 Gm Valcambi Swiss Gold Bar",
    weight: "10 Gram",
    price: "336.970 KD",
    image: "https://placehold.co/650x400/black/white?text=10g+Gold",
    isNew: true,
    category: "swiss",
  },
  {
    id: "6",
    name: "250 Gm Uae Gold Bar",
    weight: "250 Gram",
    price: "8,208.75 KD",
    image: "https://placehold.co/600x400/gold/white?text=250g+UAE+Gold",
    isNew: false,
    category: "uae",
  },
  {
    id: "7",
    name: "3.0 Gm Lebah",
    weight: "3.0 Gram",
    price: "104.25 KD",
    image: "https://placehold.co/600x400/gold/white?text=3g+Lebah+Coin",
    isNew: false,
    category: "lebah",
  },
];

export const serviceItems = [
  {
    title: "Secure Shipping",
    subtitle: "Secure Shipping Ways",
    icon: "LocalShipping",
  },
  {
    title: "Best Service",
    subtitle: "Best Service Ever",
    icon: "ThumbUp",
  },
  {
    title: "Member Discount",
    subtitle: "Big Discounts",
    icon: "CardMembership",
  },
  {
    title: "Online Support",
    subtitle: "Support online 24 hours a day",
    icon: "HeadsetMic",
  },
];

export const footerLinks = {
  information: [
    { title: "About Us", link: "#" },
    { title: "Delivery Information", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Terms & Conditions", link: "#" },
    { title: "Gift Certificates", link: "#" },
    { title: "Contact Us", link: "#" },
    { title: "Prices Screen", link: "#" },
  ],
  extras: [
    { title: "Specials", link: "#" },
    { title: "My Account", link: "#" },
  ],
  footerNavigation: [
    { title: "Home", link: "#" },
    { title: "Shop", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Terms Of Use", link: "#" },
    { title: "Sitemap", link: "#" },
    { title: "Support", link: "#" },
    { title: "Contacts", link: "#" },
    { title: "Prices Screen", link: "#" },
  ],
};

export const companyInfo = {
  name: "Fine Gold Jewelry & Precious Metal Co.",
  address: "Kuwait - Mubarakiya",
  location: "Central Gold Market",
  building: "Building No. 2B",
  phone1: "00965/22429247",
  phone2: "00965/66773112",
  fax: "00965/22471097",
  email: "finegoldkw@hotmail.com",
};
