import 'styled-components';
import { ThemeDark } from './style/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDark{
  }
}
