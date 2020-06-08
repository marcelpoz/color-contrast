export default (r, g, b) => {
  const a = [r, g, b].map(v => {
    const l = v / 255;
    const m = (l + 0.055) / 1.055;
    return l <= 0.03928 ? l / 12.92 : m ** 2.4;
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722 + 0.05;
};
