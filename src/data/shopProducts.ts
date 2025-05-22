export interface ShopProduct {
  id: string;
  name: string;
  category: string;
  weight: string; // e.g., "1 Gram", "2.5 Gram"
  price: string; // e.g., "37.513 KD"
  image: string; // URL or path to image
  isNew?: boolean;
}

export const shopProducts: ShopProduct[] = [
  {
    id: "1",
    name: "1 GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "1 Gram",
    price: "37.513 KD",
    image: "/shop-stock.jpg", // Replace with actual image path
  },
  {
    id: "2",
    name: "2.5 GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "2.5 Gram",
    price: "87.283 KD",
    image: "/shop-stock.jpg",
  },
  {
    id: "3",
    name: "5 GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "5 Gram",
    price: "170.065 KD",
    image: "/shop-stock.jpg",
  },
  {
    id: "4",
    name: "10 GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "10 Gram",
    price: "333.630 KD",
    image: "/shop-stock.jpg",
  },
  {
    id: "5",
    name: "20 GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "20 Gram",
    price: "660.260 KD",
    image: "/shop-stock.jpg",
  },
  {
    id: "6",
    name: "OZ (31.1)GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "31.1 Gram (Oz)",
    price: "1023.154 KD",
    image: "/shop-stock.jpg",
  },
  {
    id: "7",
    name: "50 GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "50 Gram",
    price: "1642.650 KD",
    image: "/shop-stock.jpg",
  },
  {
    id: "8",
    name: "100 GM VALCAMBI SWISS GOLD BAR",
    category: "SWISS GOLD BAR",
    weight: "100 Gram",
    price: "3271.300 KD",
    image: "/shop-stock.jpg",
  },
  // Add more products as needed from the image
];
