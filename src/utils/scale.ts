const POINT_SCALE = 0.51;
const X_ADJUST = 10;
const Y_ADJUST = 190;

export const scaleX = (x: number) => x * POINT_SCALE + X_ADJUST;
export const scaleY = (y: number) => y * POINT_SCALE + Y_ADJUST;
