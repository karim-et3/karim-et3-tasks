import {ComponentType, ReactNode} from 'react';
import {observer} from 'mobx-react';
// import compose from '../Recompose';
import {COLORS} from '../../constants';
import compose from 'lodash/fp/compose';

export type WithLiteObserver = <T extends {}>(
  component: ComponentType<T>,
  defaultProps?: T,
) => ComponentType<T>;

// export const withLiteObserver = (component => {
//   return compose(observer)(component);
// }) as WithLiteObserver;

export const withLiteObserver = compose(observer) as WithLiteObserver;

// export const withLiteObserver = (props: ({product}: TProduct) => JSX.Element) =>
//   observer(props) as unknown as WithLiteObserver;

// export const withLiteObserver = (ComponentTest) => {

//   return <ComponentTest  COLORS=COLORS/>
// };

// export const withLiteObserver = props => observer(props) as WithLiteObserver;

type WithThemeAndLiteObserver = <T extends {}>(
  component: ComponentType<T & {theme: TEt3Theme}>,
  defaultProps?: T,
) => ComponentType<T & {theme?: TEt3Theme}>;

// export const withLiteObserverAndTheme = (component => {
//   return compose(withLiteObserver, COLORS)(component);
// }) as WithThemeAndLiteObserver;

export const withLiteObserverAndTheme = (component => {
  return compose(observer, COLORS)(component);
}) as WithThemeAndLiteObserver;
