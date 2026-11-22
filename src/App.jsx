import Home from "./components/Landing/Home";
import LoadParent from "./components/Loading/LoadParent";
import MenuPage from "./components/menu/MenuPage";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-800">

      <MenuPage
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <LoadParent />
      <Home onMenuClick={() => setIsMenuOpen((isOpen) => !isOpen)} />
    </div>
  );
};

export default App;
