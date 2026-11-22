import Home from "./components/Landing/Home";
import LoadParent from "./components/Loading/LoadParent";
import MenuPage from "./components/menu/MenuPage";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroImageReady, setIsHeroImageReady] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-800">

      <MenuPage
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <LoadParent isHeroImageReady={isHeroImageReady} />
      <Home
        isHeroImageReady={isHeroImageReady}
        onHeroImageReady={() => setIsHeroImageReady(true)}
        onMenuClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      />
    </div>
  );
};

export default App;
