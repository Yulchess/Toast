import { TOAST_TYPE } from "./constants/toastType";

const main = "red";
const darkOrchid = "#9a40d3";
const minionYellow = "#f4e048";
const flamePea = "#e25837";
const shamrock = "#37e29a";
const white = "#ffffff";
const black = "#000000";

export const theme = {
  colors: {
    [TOAST_TYPE.Info]: darkOrchid,
    [TOAST_TYPE.Warning]: minionYellow,
    [TOAST_TYPE.Error]: flamePea,
    [TOAST_TYPE.Success]: shamrock,
    white,
    black,
    main,
  },
  fontSize: [15, 17],
  borderRadius: [10, 15],
  spacing: [-20, 0, 4, 10, 15, 18, 20, 25],
};
