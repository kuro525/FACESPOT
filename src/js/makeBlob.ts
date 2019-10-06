export const makeBlob = (canvas) => {
  return new Promise(resolve => {
    canvas.toBlob(result => resolve(result));
  });
}

export default makeBlob