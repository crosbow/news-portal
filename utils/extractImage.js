const extractImage = async (imgUrl) => {
  if (!imgUrl) {
    return;
  }

  const imgResponse = await fetch(imgUrl);

  //   const imgData = await imgResponse.json();

  return imgResponse.url;
};
export default extractImage;
