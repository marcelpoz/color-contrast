import luminance from './luminance';

export default (frontRgb, backRgb) => {
  const lFront = luminance(frontRgb[0], frontRgb[1], frontRgb[2]);
  const lBack = luminance(backRgb[0], backRgb[1], backRgb[2]);

  return lBack > lFront ? lFront / lBack : lBack / lFront;
};
