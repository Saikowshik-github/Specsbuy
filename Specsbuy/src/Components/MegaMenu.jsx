import { useState, useRef } from "react";

export default function MegaMenu() {
    const [activeMenu, setActiveMenu] = useState(null);
    const closeTimer = useRef(null);

     const menuItems = {
    Eyeglasses: {
      columns: [
        {
          title: "Glasses",
          links: [
            "Women",
            "Men",
            "Kids",
            "All Eyeglasses",
            "Premium",
            "Under $30",
            "Accessories",
          ],
        },
        {
          title: "Shop By",
          links: [
            "Progressives",
            "Protective & Safety",
            "EcoBloomz™ ECO Friendly",
            "OptiFlex Headset Compatible",
            "Rimless",
            "Face Shape",
            "Virtual Try On",
          ],
        },
        {
          title: "Featured",
          links: [
            "On Sale",
            "Best Sellers",
            "Top Rated",
            "New Arrivals",
            "Lunar New Year",
            "Designer Inspired",
          ],
        },
      ],
      images: [
        {
          src: "https://via.placeholder.com/150",
          text: "Women's Fall Collection",
        },
        {
          src: "https://via.placeholder.com/150",
          text: "Men's Fall Collection",
        },
      ],
    },
    Sunglasses: {
      columns: [
        {
          title: "Categories",
          links: ["Women", "Men", "Kids", "Polarized", "Clip-Ons", "Luxury"],
        },
        {
          title: "Shop By",
          links: [
            "UV Protection",
            "Eco-Friendly",
            "Prescription Sunglasses",
            "Sport Sunglasses",
            "Travel & Outdoor",
          ],
        },
        {
          title: "Featured",
          links: ["Summer Collection", "Top Rated", "Designer Picks", "On Sale"],
        },
      ],
      images: [
        { src: "https://via.placeholder.com/150", text: "Summer Styles" },
        { src: "https://via.placeholder.com/150", text: "Sport Collection" },
      ],
    },
    Lenses: {
      columns: [
        {
          title: "Lens Types",
          links: [
            "Single Vision",
            "Bifocals",
            "Progressives",
            "Blue Light Blocking",
            "Transitions",
          ],
        },
        {
          title: "Shop By",
          links: ["Thin Lenses", "Scratch Resistant", "Anti-Glare", "Premium Coatings"],
        },
        { title: "Featured", links: ["Top Rated", "Budget-Friendly", "Latest Tech"] },
      ],
      images: [
        { src: "https://via.placeholder.com/150", text: "Blue Light Collection" },
      ],
    },
    Sports: {
      columns: [
        {
          title: "Sports Glasses",
          links: ["Cycling", "Running", "Skiing", "Water Sports", "Outdoor Adventure"],
        },
        {
          title: "Protection",
          links: ["Impact Resistant", "UV Protection", "Polarized"],
        },
      ],
      images: [
        { src: "https://via.placeholder.com/150", text: "Cycling Gear" },
        { src: "https://via.placeholder.com/150", text: "Running Gear" },
      ],
    },
    "Collabs & Partners": {
      columns: [
        {
          title: "Brands",
          links: ["Ray-Ban", "Oakley", "Gucci", "Nike", "Adidas"],
        },
        {
          title: "Partner Collections",
          links: ["Limited Edition", "Exclusive Drops", "Designer Collabs"],
        },
      ],
      images: [{ src: "https://via.placeholder.com/150", text: "Ray-Ban x Nike" }],
    },
    Discover: {
      columns: [
        {
          title: "Explore",
          links: ["Style Guide", "Face Shape Finder", "Virtual Try On", "Lens Guide"],
        },
        {
          title: "Inspiration",
          links: ["Trending Now", "Celebrity Styles", "Customer Favorites"],
        },
      ],
      images: [{ src: "https://via.placeholder.com/150", text: "Try Virtual Try On" }],
    },
  };

    // Helper to open menu and clear any close timer
    const handleOpen = (menu) => {
        clearTimeout(closeTimer.current);
        setActiveMenu(menu);
    };

    // Helper to close menu with delay
    const handleClose = () => {
        closeTimer.current = setTimeout(() => {
            setActiveMenu(null);
        }, 100); // 100ms delay to prevent flicker
    };

    return (
    <nav className="bg-white shadow-md relative">
      <div className="flex justify-center space-x-6 px-6 py-3 font-medium text-gray-700">
        {Object.keys(menuItems).map((menu) => (
          <div
            key={menu}
            className="relative"
            onMouseEnter={() => handleOpen(menu)}
            onMouseLeave={handleClose}
          >
            <button className="hover:text-black underline-hover">{menu}</button>

                        {/* Full-width dropdown */}
                        {activeMenu === menu && (
                            <div
                                className="fixed left-0 mt-3 w-full bg-white shadow-xl border-t z-50"
                                onMouseEnter={() => handleOpen(menu)}
                                onMouseLeave={handleClose}
                            >
                                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 p-6">
                                    {menuItems[menu].columns.map((col, i) => (
                                        <div key={i}>
                                            <h3 className="font-semibold text-gray-800 mb-3">
                                                {col.title}
                                            </h3>
                                            <ul className="space-y-2">
                                                {col.links.map((link, j) => (
                                                    <li key={j}>
                                                        <a
                                                            href="#"
                                                            className="text-sm text-gray-600 hover:text-black"
                                                        >
                                                            {link}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {/* Right-side images */}
                                    <div className="col-span-1 flex flex-col space-y-4">
                                        {menuItems[menu].images.map((img, i) => (
                                            <div key={i} className="rounded-lg overflow-hidden">
                                                <img src={img.src} alt="" className="rounded-lg" />
                                                <p className="text-center text-sm mt-2">{img.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}
