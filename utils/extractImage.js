const extractImage = async (imgUrl) => {
  if (!imgUrl) {
    return;
  }

  try {
    const imgResponse = await fetch(imgUrl);

    return !imgResponse.url ? null : imgResponse.url;
  } catch (error) {
    return null;
  }
};
export default extractImage;
