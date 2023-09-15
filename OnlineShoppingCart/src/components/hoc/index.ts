import {ComponentType, ReactNode} from 'react';
import {TEt3Theme} from '../et3-theme/';
import {observer} from 'mobx-react';
// import compose from '../Recompose';

export type WithLiteObserver = <T extends {}>(
  component: ComponentType<T>,
  defaultProps?: T,
) => ComponentType<T>;

// export const withLiteObserver = compose(LiteObserver) as WithLiteObserver;

// export const withLiteObserver = (props: ({product}: TProduct) => JSX.Element) =>
//   observer(props) as unknown as WithLiteObserver;

export const withLiteObserver = props => observer(props) as WithLiteObserver;

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TEt3Theme}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TEt3Theme}>;

export const withLiteObserverAndTheme = (component => {
  return compose(observer)(component);
}) as WithThemeAndLiteObserver;
