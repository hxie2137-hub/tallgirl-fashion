export type ProductCategory =
  | "Tall Jeans"
  | "Long Sleeve Tops"
  | "Wide Leg Pants"
  | "Maxi Dresses"
  | "Basics";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  tag: "New Arrival" | "Best Seller" | "Editorial";
  heightFit: string;
  fitNotes: [string, string, string];
  description: string;
  images: [string, string];
};

export const categories: ProductCategory[] = [
  "Tall Jeans",
  "Long Sleeve Tops",
  "Wide Leg Pants",
  "Maxi Dresses",
  "Basics"
];

export const products: Product[] = [
  {
    id: 1,
    slug: "column-long-jean",
    name: "Column Long Jean",
    price: 89,
    category: "Tall Jeans",
    tag: "New Arrival",
    heightFit: "Best for 170cm-185cm",
    fitNotes: ["34 inch inseam", "High rise proportion", "Full length break"],
    description:
      "A clean straight-leg jean with an extended inseam, higher rise, and restrained wash for everyday polish.",
    images: [
      "/images/jeans-shirt.png",
      "/images/jeans.png"
    ]
  },
  {
    id: 2,
    slug: "black-rib-long-sleeve",
    name: "Black Rib Long Sleeve",
    price: 46,
    category: "Long Sleeve Tops",
    tag: "New Arrival",
    heightFit: "Best for 172cm-188cm",
    fitNotes: ["Extended sleeve", "Longer body", "Close shoulder line"],
    description:
      "A clean black long sleeve with extra body length and sleeves that sit exactly where they should.",
    images: [
      "/images/tops.png",
      "/images/tops-alt.png"
    ]
  },
  {
    id: 3,
    slug: "soft-wide-leg-trouser",
    name: "Soft Wide Leg Trouser",
    price: 98,
    category: "Wide Leg Pants",
    tag: "Best Seller",
    heightFit: "Best for 170cm-186cm",
    fitNotes: ["Floor skimming length", "High waist", "Fluid leg volume"],
    description:
      "Fluid wide-leg tailoring cut with a longer drape, designed to skim the floor with flats or heels.",
    images: [
      "/images/lookbook.png",
      "/images/lookbook-alt.png"
    ]
  },
  {
    id: 4,
    slug: "matte-column-dress",
    name: "Matte Column Dress",
    price: 128,
    category: "Maxi Dresses",
    tag: "Editorial",
    heightFit: "Best for 174cm-190cm",
    fitNotes: ["True maxi length", "Long torso cut", "Clean column line"],
    description:
      "A long column dress with minimal seams, a quiet neckline, and proportioned length for taller frames.",
    images: [
      "/images/dress.png",
      "/images/dress-alt.png"
    ]
  },
  {
    id: 5,
    slug: "longline-white-shirt",
    name: "White Poplin Tall Shirt",
    price: 72,
    category: "Basics",
    tag: "Best Seller",
    heightFit: "Best for 170cm-185cm",
    fitNotes: ["Extended cuff", "Longline hem", "Relaxed tall fit"],
    description:
      "A crisp white shirt with a longer sleeve, longer body, and relaxed structure for daily layering.",
    images: [
      "/images/jeans-shirt-alt.png",
      "/images/jeans-shirt.png"
    ]
  },
  {
    id: 6,
    slug: "slim-black-jean",
    name: "Slim Black Jean",
    price: 92,
    category: "Tall Jeans",
    tag: "Best Seller",
    heightFit: "Best for 173cm-188cm",
    fitNotes: ["34 inch inseam", "Slim full length", "Clean ankle break"],
    description:
      "A full-length black jean with a slim line, elongated inseam, and clean ankle break.",
    images: [
      "/images/jeans-alt.png",
      "/images/jeans-shirt-alt.png"
    ]
  },
  {
    id: 7,
    slug: "fine-knit-long-sleeve",
    name: "Fine Knit Long Sleeve",
    price: 68,
    category: "Long Sleeve Tops",
    tag: "Editorial",
    heightFit: "Best for 170cm-184cm",
    fitNotes: ["Long sleeve length", "Fine gauge stretch", "Narrow neckline"],
    description:
      "Fine gauge knitwear with a lean sleeve and balanced shoulder line for taller proportions.",
    images: [
      "/images/tops-alt.png",
      "/images/lookbook.png"
    ]
  },
  {
    id: 8,
    slug: "black-halter-maxi-dress",
    name: "Black Halter Maxi Dress",
    price: 118,
    category: "Maxi Dresses",
    tag: "New Arrival",
    heightFit: "Best for 175cm-190cm",
    fitNotes: ["True maxi fall", "Halter neckline", "Tall frame drape"],
    description:
      "A restrained halter silhouette with a true maxi length and light movement through the hem.",
    images: [
      "/images/dress-alt.png",
      "/images/dress.png"
    ]
  },
  {
    id: 9,
    slug: "tailored-wide-leg-pant",
    name: "Tailored Wide Leg Pant",
    price: 104,
    category: "Wide Leg Pants",
    tag: "New Arrival",
    heightFit: "Best for 172cm-187cm",
    fitNotes: ["Long trouser rise", "Sharp front crease", "Heel ready hem"],
    description:
      "Sharp high-rise trousers with generous length and a clean front, made for a longer line.",
    images: [
      "/images/lookbook-alt.png",
      "/images/jeans-alt.png"
    ]
  },
  {
    id: 10,
    slug: "essential-long-sleeve-tee",
    name: "Essential Long Sleeve Tee",
    price: 34,
    category: "Basics",
    tag: "Best Seller",
    heightFit: "Best for 170cm-186cm",
    fitNotes: ["Longer torso", "Soft narrow neck", "Extended sleeve"],
    description:
      "A foundational long sleeve tee with a longer torso and narrow neckline, built to tuck or wear loose.",
    images: [
      "/images/tops-alt.png",
      "/images/tops.png"
    ]
  },
  {
    id: 11,
    slug: "floor-length-halter-dress",
    name: "Floor Length Halter Dress",
    price: 136,
    category: "Maxi Dresses",
    tag: "Best Seller",
    heightFit: "Best for 174cm-188cm",
    fitNotes: ["Floor length fall", "Column proportion", "Clean halter line"],
    description:
      "A clean halter dress with column proportions and a floor-skimming length for tall frames.",
    images: [
      "/images/dress.png",
      "/images/dress-alt.png"
    ]
  },
  {
    id: 12,
    slug: "relaxed-long-jean",
    name: "Relaxed Long Jean",
    price: 96,
    category: "Tall Jeans",
    tag: "Editorial",
    heightFit: "Best for 170cm-189cm",
    fitNotes: ["Relaxed long inseam", "Measured rise", "Easy full length"],
    description:
      "Relaxed denim with extra inseam, soft fading, and a measured rise for an easy full-length fit.",
    images: [
      "/images/jeans.png",
      "/images/jeans-alt.png"
    ]
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
