const extractImage = async (imgUrl) => {
  if (!imgUrl) {
    return;
  }

  const imgResponse = await fetch(imgUrl);

  return !imgResponse.url ? null : imgResponse.url;
};
export default extractImage;
