import Tilt from "react-parallax-tilt";

const MenuLeft = () => {
  return (
    <div className="relative h-full w-2/3 bg-[#1a1a1a] px-15 py-12 max-xl:hidden">
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={2000}
        scale={1}
        className="w-full h-full bg-[#1a1a1a] relative"
      >
        <img
          className=" h-full w-full object-cover object-center scale-[0.95] opacity-20 absolute"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
        <img
          className=" h-full w-full object-cover object-center scale-[0.91] opacity-50 absolute"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
        <img
          className=" h-full w-full object-cover object-center scale-[0.87] opacity-70 absolute"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
        <img
          className=" h-full w-full object-cover object-center opacity-50 absolute"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
      </Tilt>
    </div>
  );
};

export default MenuLeft;
