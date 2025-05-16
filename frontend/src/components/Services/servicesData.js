<<<<<<< HEAD
// src/components/Services/servicesData.js
export const servicesData = [
  {
    category: "Waxing",
    image: "combo-image.jpeg", // Add image to public/images
    subcategories: [
      { name: "Underarm Wax", prices: [49, 199, 299] },
      { name: "Full Arm Wax", prices: [99, 249] },
    ]
  },
  {
    category: "Facials",
    image: "combo-image.jpeg",
    subcategories: [
      { name: "Gold Facial", prices: [499] },
    ]
  }
];
=======
export const servicesData = [
  {
    category: "Hair",
    image: "/images/hair.jpg",
    subcategories: [
      { 
        name: "Hair Cut", 
        prices: {
          Normal: 299,
          Premium: 499,
          Luxury: 799
        }
      },
      { 
        name: "Hair Color", 
        prices: {
          Normal: 999,
          Premium: 1499,
          Luxury: 2499
        }
      }
    ]
  },
  {
    category: "Skin",
    image: "/images/skin.jpg",
    subcategories: [
      { 
        name: "Facial", 
        prices: {
          Normal: 799,
          Premium: 1499,
          Luxury: 2499
        }
      },
      { 
        name: "Clean Up", 
        prices: {
          Normal: 599,
          Premium: 999
        }
      }
    ]
  }
]; 
>>>>>>> e693f90487278cef39e5d052507d7defab754fcf
