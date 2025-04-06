interface Variation {
    itemCode: string;
    description: string;
    packaging: string;
    soldBy: string;
    image: string;
}

export interface ProductType {
    id: string,
    type: string,
    name: string,
    brand: string,
    variation: Variation[],
    images: Array<string>,
    description: string,
}

// Define and export the categories array
export const AllCategories: string[] = [
    'Cups and Lids',
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
    'Cups & Lids',
    'Plates',
    'Bowl',
    'Tea Leaves',
    'Syrups & Puree',
    'Powder',
    'Toppings',
    'Boba Pearls',
    'Popping Pearls',
    'Syrups',
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
        'MoCafe',
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
   

