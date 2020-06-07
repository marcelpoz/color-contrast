import luminance from './luminance';

export default (frontRgb, backRgb) => {
  if (
    !frontRgb ||
    !backRgb ||
    !frontRgb.r ||
    !frontRgb.g ||
    !frontRgb.b ||
    !backRgb.r ||
    !backRgb.g ||
    !backRgb.b
  ) {
    return false;
  }

  const lFront = luminance(frontRgb.r, frontRgb.g, frontRgb.b);
  const lBack = luminance(backRgb.r, backRgb.g, backRgb.b);
  return lBack > lFront ? lFront / lBack : lBack / lFront;
};
