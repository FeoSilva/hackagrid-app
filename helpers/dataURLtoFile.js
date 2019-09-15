export default (dataurl, filename) => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n) {
    u8arr[n] = bstr.charCodeAt(n);
    n -= 1; // to make eslint happy
  }
  return new File([u8arr], filename, { type: mime });
};