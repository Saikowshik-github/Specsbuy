import "./App.css";
import { Input, Button } from "@mui/material";
import MegaMenu from "./Components/MegaMenu";  
import LandingBanner from "./Components/LandingBanner";
function App() {
  return (
    <div>
      {/* Offer Banner */}
      <div className="offers bg-[#FF0000] text-black text-center p-2">
        <h4>USE CODE “BOGO” to get Buy One Get One FREE!</h4>
      </div>

      {/* Header */}
        <header className="w-full bg-white border-b border-gray-300">
          <div className="max-w-[1440px] mx-auto px-8 py-1 flex items-center justify-between gap-8">
            {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-[234px] h-[72px] object-cover"
              alt="Cropped LOGO text"
              src="/logo.png"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-1/2 mx-8">
            <div className="flex items-center bg-[#c1dcdc] rounded-[8px_8px_8px_8px] px-4 py-2 gap-4">
              <img className="flex-shrink-0" alt="Search" src="/search.svg" />
              <Input
                disableUnderline
                className="bg-transparent [font-family:'Work_Sans',Helvetica] font-normal text-[#49729b] text-base placeholder:text-[#49729b] w-full"
                placeholder="Search"
              />
            </div>
          </div>


          <div className="flex items-center">
          {/* Wishlist Icon */}
          <div className="flex-shrink-0">
            <a
              variant="outlined"
              className="w-4 h-10 min-w-0 rounded-full border-[#757575]"
            >
              <img className="w-8 h-8" alt="Wishlist" src="/wishlist.svg" />
            </a>
          </div>

          {/* Cart Icon */}
          <div className="flex-shrink-0 ml-4">
            <a
              
              className="w-4 h-10 p-2 min-w-0 rounded-full border-[#757575]"
            >
              <img className="w-8 h-8" alt="Cart" src="/cart.svg" />
            </a>
          </div>
          {/* Profile Icon */}
          <div className="flex-shrink-0 ml-4">
            <a
              variant="outlined"
              className="w-10 h-10 min-w-0 rounded-full"
            >
              <img className="w-10 h-10" alt="Profile" src="/profile.svg" />
            </a>
          </div>
          </div>
        </div>

        <hr className="border-gray-300" />

          <MegaMenu />
          <LandingBanner />

      </header>
    </div>
  );
}

export default App;
