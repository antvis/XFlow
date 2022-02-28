import InputFiled from './input'
import type { IProps } from './color'
import ColorPicker from './color'
import InputNumberFiled from './input-number'
import Size from './size'
import Position from './position'
import SelectField from './select'
import Rotate from './rotate'
import InputFontSpacing from './font-spacing'
import InputOpacity from './input-opacity'
import InputFontPosition from './font-position'
export const EditorPanels: Record<string, React.FC | React.NamedExoticComponent<IProps>> = {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
  Size,
  Position,
  SelectField,
  Rotate,
  InputFontSpacing,
  InputOpacity,
  InputFontPosition,
}

export {
  InputFiled,
  ColorPicker,
  InputNumberFiled,
  Size,
  Position,
  SelectField,
  Rotate,
  InputFontSpacing,
  InputOpacity,
  InputFontPosition,
}
