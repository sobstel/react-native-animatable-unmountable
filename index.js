import {
  View as CoreView,
  Text as CoreText,
  Image as CoreImage,
} from 'react-native';

import animatableUnmountable from './animatableUnmountable';

export { animatableUnmountable };
export const View = animatableUnmountable(CoreView);
export const Text = animatableUnmountable(CoreText);
export const Image = animatableUnmountable(CoreImage);
