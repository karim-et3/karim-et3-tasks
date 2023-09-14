import React, {useState, createContext, ReactNode, useEffect} from 'react';
import ToastNotification from './ToastNotification';
import {View} from 'react-native';

export const ToastContext = createContext(null);

const ToastContextProvider = ({children}: {children: ReactNode}) => {
  const [showToast, setShowToast] = useState(false);
  const [temp, setTemp] = useState(true);

  const changeVisiblity = () => {
    setTemp(true);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast && temp) {
      setTemp(false);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <ToastContext.Provider value={{changeVisiblity}}>
      {children}
      {showToast && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ToastNotification />
        </View>
      )}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
