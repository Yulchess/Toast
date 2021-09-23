import { css } from "styled-components";
export const spacing = [100];

const main = "red";
const darkOrchid = "#9a40d3";
const minionYellow = "#f4e048";
const flamePea = "#e25837";
const shamrock = "#37e29a";
const white = "#ffffff";
const black = "#000000";

export const theme = {
  colors: {
    darkOrchid,
    minionYellow,
    flamePea,
    shamrock,
    white,
    black,
    main,
  },
};

export const infoNotification = {
  ...theme,
  backgroundColor: {
    main: darkOrchid,
  },
  textColor: {
    main: white,
  },
};

export const warningNotification = {
  ...theme,
  backgroundColor: {
    main: minionYellow,
  },
  textColor: {
    main: black,
  },
};
export const errorNotification = {
  ...theme,
  backgroundColor: {
    main: flamePea,
  },
  textColor: {
    main: white,
  },
};

export const successNotification = {
  ...theme,
  backgroundColor: {
    main: shamrock,
  },
  textColor: {
    main: white,
  },
};
