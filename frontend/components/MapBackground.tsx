
const MapBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src="https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop"
        className="h-full w-full object-cover grayscale-[20%]"
        alt="Map background"
      />
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default MapBackground;
