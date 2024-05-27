export const Interpolation = () => {
  const dinosaur = "T-Rex";
  const imageUrl = "http://someimage.jpg";
  const dinoClass = "big";

  return (
    <>
      Interpolation:
      <div className={dinoClass}>{dinosaur}</div>
      <div>
        <img src={imageUrl} alt={dinosaur} />
      </div>
    </>
  );
};
