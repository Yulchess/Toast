import errorImage from '@/assets/Error.svg';
import infoImage from '@/assets/Info.svg';
import successImage from '@/assets/Success.svg';
import warningImage from '@/assets/Warning.svg';
import { theme } from '@/theme';

import { TOAST_TYPE } from './toastType';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const WARNING = 'WARNING';
export const INFO = 'INFO';

export const TOP_RIGHT = 'TOP_RIGHT';
export const TOP_LEFT = 'TOP_LEFT';
export const BOTTOM_RIGHT = 'BOTTOM_RIGHT';
export const BOTTOM_LEFT = 'BOTTOM_LEFT';

const id = Date.now().toString();
export const SUCCESS_TOAST = {
  id,
  description: 'Success toast example',
  backgroundColor: `${theme.colors[TOAST_TYPE.Success]}`,
  color: `${theme.colors.white}`,
  icon: successImage,
};

export const ERROR_TOAST = {
  id,
  description: 'Error toast example',
  backgroundColor: `${theme.colors[TOAST_TYPE.Error]}`,
  color: `${theme.colors.white}`,
  icon: errorImage,
};
export const INFO_TOAST = {
  id,
  description: 'Info toast example',
  backgroundColor: `${theme.colors[TOAST_TYPE.Info]}`,
  color: `${theme.colors.white}`,
  icon: infoImage,
};

export const WARNING_TOAST = {
  id,
  description: 'Warning toast example',
  backgroundColor: `${theme.colors[TOAST_TYPE.Warning]}`,
  color: `${theme.colors.black}`,
  icon: warningImage,
};
