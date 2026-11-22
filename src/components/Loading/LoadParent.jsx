import LoadChild from "./LoadChild";

const LoadParent = ({ isHeroImageReady }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1">
      <LoadChild isHeroImageReady={isHeroImageReady} />
    </div>
  );
};

export default LoadParent;
