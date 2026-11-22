import HeroText from "./HeroText";
import SubHeading from "./SubHeading";

const CenterText = () => {
  return (
    <div>
      <h1 className="absolute text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <HeroText />
        <SubHeading />
      </h1>
    </div>
  );
};

export default CenterText;
