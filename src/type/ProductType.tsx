interface Variation {
    itemCode: string;
    itemName: string;
    packaging: string;
    soldBy: string;
    image: string;
}

export interface ProductType {
    id: string,
    category: string,
    name: string,
    brand: string,
    variation: Variation[],
    images: string,
    description: string,
}

// Define and export the categories array
export const AllCategories: string[] = [
    'Cups & Lids',
    'Straws',
    'Sleeves & Carriers',
    'Fold-To-Go & Trays',
    'Gloves',
    'Food Container',
    'Restaurant Supplies',
    'Portion Cup',
    'Deli / Soup Container',
    'Salad Container',
    'Bowls',
    'Microwaveable Container',
    'Utensils',
    'Appliance & Tools',
    'Plates',
    'Tea Leaves',
    'Syrups & Puree',
    'Powder',
    'Toppings',
    'Boba Pearls',
    'Blends & Mixes',
  ];

export const AllBrands: string[] = [
    'Karat Packaging',
    'Karat Earth',
    'Tea Zone',
    'Routin 1883',
    "Caffe D'Amore",
    "Caffe D'Vitta",
    'Ghiradelli',
    'Monin',
    'Torani',
    'Hollander',
    'Big Train',
    'Da Vinci ',
    'Oregon Chai',
    'ProGel',
    'Cappuccine',
    'Teazone',
    'Frostline',
    'Dole',
    'Cafvina',
    'Califia',
    'Pacific Foods',
    'C&H',
    'Total Clean',
    'Vitamix',
    'Blendtec'
];

export const OtherBrands: string[] = [
    'Routin 1883',
    "Caffe D'Amore",
    "Caffe D'Vitta",
    'Ghiradelli',
    'Monin',
    'Torani',
    'Hollander',
    'Big Train',
    'Da Vinci ',
    'Oregon Chai',
    'ProGel',
    'Cappuccine',
    'Teazone',
    'Frostline',
    'Dole',
    'Cafvina',
    'Califia',
    'Pacific Foods',
    'C&H',
    'Total Clean',
    'Vitamix',
    'Blendtec'
];

export const CategoryImagePaths: { [key: string]: string } = {
    'Deli / Soup Container' : '/images/category/soup container.png',
    'Fold-To-Go & Trays' : '/images/category/togo.png'
};

export const CategoryRedirect: { [key: string]: string } = {
    'Cups' : 'Cups & Lids',
   'Sleeves' : 'Sleeves & Carriers',
    'Fold-To-Go' : 'Fold-To-Go & Trays',
    'Appliance' : 'Appliance & Tools',
    'Syrups' : 'Syrups & Puree',
    'Blends' : 'Blends & Mixes'
};
     

