import {observer as LiteObserver} from 'mobx-react-lite';
import compose from './Recompose';
import CustomTheme from '../../theme';

export const withObserverAndTheme = (component: React.ComponentType) =>
  compose(LiteObserver, CustomTheme)(component);
