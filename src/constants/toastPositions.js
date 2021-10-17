import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  TOP_LEFT,
  TOP_RIGHT,
} from "./toastProperties";

export const TOAST_POSITIONS = {
  [TOP_RIGHT]: {
    top: 0,
    rigth: 0,
    bottom: "initiial",
    left: "initiial",
  },
  [TOP_LEFT]: {
    top: 0,
    rigth: "initiial",
    bottom: "initiial",
    left: 0,
  },
  [BOTTOM_LEFT]: {
    top: "initiial",
    rigth: 0,
    bottom: 0,
    left: "initiial",
  },
  [BOTTOM_RIGHT]: {
    top: "initiial",
    rigth: "initiial",
    bottom: 0,
    left: 0,
  },
};
