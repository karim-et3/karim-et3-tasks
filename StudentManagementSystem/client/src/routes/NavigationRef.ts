import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: {id?: number}) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
