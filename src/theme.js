import { TOAST_TYPE } from './constants/toastType';

const main = 'red';
const darkOrchid = '#9a40d3';
const minionYellow = '#f4e048';
const flamePea = '#e25837';
const shamrock = '#37e29a';
const white = '#ffffff';
const black = '#000000';

export const theme = {
  colors: {
    [TOAST_TYPE.Info]: darkOrchid,
    [TOAST_TYPE.Warning]: minionYellow,
    [TOAST_TYPE.Error]: flamePea,
    [TOAST_TYPE.Success]: shamrock,
    white: '#ffffff',
    black: '#000000',
    main: 'red',
  },
  fontSize: [15, 17],
  borderRadius: [10, 15],
  spacing: [-20, 0, 4, 10, 15, 18, 20, 25],
  CONTENT_WIDTH: 100,
  MAIN_CONTAINER_WIDTH: 100,
  MAIN_CONTAINER_HEIGTH: 500,
  BUTTON_WIDTH: 100,
  BUTTON_HEIGTH: 25,
  TOAST_CONTENT_WIDTH: 260,
  TOAST_CONTENT_HEIGTH: 60,
  TOAST_CONTENT_BLOCK_WIDTH: 100,
  TOAST_CONTENT_BLOCK_HEIGTH: 100,
  TOAST_CLOSE_BUTTON_WIDTH: 24,
  TOAST_CLOSE_BUTTON_HEIGTH: 4,
  TOAS_ICON_WIDTH: 35,
  TOAS_ICON_HEIGTH: 35,
};
