import React, {useState, createContext, ReactNode, useEffect} from 'react';
import ToastNotification from '../common/ToastNotification';
import {View} from 'react-native';
import {TToastContext} from '../../types';
import {COLORS} from '../../constants';

export const ToastContext = createContext(null);

const ToastContextProvider = ({children}: {children: ReactNode}) => {
  const [showToast, setShowToast] = useState(false);
  const [temp, setTemp] = useState(true);
  const [error, setError] = useState(false);
  const [icon, setIcon] = useState('');
  const [text, setText] = useState('');

  const changeVisiblity = ({text, icon, error}: TToastContext) => {
    setText(text);
    setIcon(icon);
    setError(error);
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
          {text && (
            <ToastNotification
              icon={icon}
              text={text}
              error={error}
              COLORS={COLORS}
            />
          )}
        </View>
      )}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
