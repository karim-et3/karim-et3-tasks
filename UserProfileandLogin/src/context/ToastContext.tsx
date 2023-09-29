import React, {createContext, ReactNode, useEffect} from 'react';
import ToastNotification from '../components/common/ToastNotification';
import {View} from 'react-native';
import {TToast} from '../types';
import toastStore from '../mobx/Toast';
import {withObserverAndTheme} from '../hoc';

export const ToastContext = createContext(null);

const ToastContextProvider = ({children}: {children: ReactNode}) => {
  const changeVisiblity = ({message, icon, error}: TToast) => {
    toastStore.setMessage(message);
    toastStore.setIcon(icon);
    toastStore.setError(error);
    toastStore.setTemp(true);
    toastStore.setShowToast(true);
  };

  useEffect(() => {
    if (toastStore.getShowToast && toastStore.getTemp) {
      toastStore.setTemp(false);
      const timer = setTimeout(() => {
        toastStore.setShowToast(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [toastStore.getShowToast]);

  return (
    <ToastContext.Provider value={{changeVisiblity}}>
      {children}
      {toastStore.getShowToast && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ToastNotification
            icon={toastStore.getIcon}
            message={toastStore.getMessage}
            error={toastStore.getError}
          />
        </View>
      )}
    </ToastContext.Provider>
  );
};

export default withObserverAndTheme(ToastContextProvider);
