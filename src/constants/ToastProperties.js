import errorImage from "../assets/Error.png";
import infoImage from "../assets/Info.png";
import successImage from "../assets/Success.png";
import warningImage from "../assets/Warning.png";
import { theme } from "../theme";

export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const WARNING = "WARNING";
export const INFO = "INFO";

const id = Date.now();
export const SUCCESS_TOAST = {
  id,
  description: "Success toast example",
  backgroundColor: `${theme.colors.shamrock}`,
  color: `${theme.colors.white}`,
  icon: successImage,
};

export const ERROR_TOAST = {
  id,
  description: "Error toast example",
  backgroundColor: `${theme.colors.flamePea}`,
  color: `${theme.colors.white}`,
  icon: errorImage,
};
export const INFO_TOAST = {
  id,
  description: "Info toast example",
  backgroundColor: `${theme.colors.darkOrchid}`,
  color: `${theme.colors.white}`,
  icon: infoImage,
};

export const WARNING_TOAST = {
  id,
  description: "Warning toast example",
  backgroundColor: `${theme.colors.minionYellow}`,
  color: `${theme.colors.black}`,
  icon: warningImage,
};
