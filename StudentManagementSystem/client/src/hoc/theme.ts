import compose from './recompose';
import CustomTheme from './CustomTheme';
import {observer as LiteObserver} from 'mobx-react-lite';
import {ComponentType} from 'react';
import {TTheme} from '../types';

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TTheme}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TTheme}>;

export const WithThemeAndLiteObserver = (component => {
  return compose(CustomTheme, LiteObserver)(component);
}) as WithThemeAndLiteObserver;
