import Home from "./components/Landing/Home";
import LoadParent from "./components/Loading/LoadParent";

const App = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-800">
      <LoadParent />
      <Home />
    </div>
  );
};

export default App;
