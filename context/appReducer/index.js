import React, {createContext, useReducer} from 'react';
import {appReducer as reducer, initialState as state} from './appReducer';

export const appContext = createContext();

export const withAppContext = Component => props =>
  (
    <appContext.Consumer>
      {values => <Component {...values} {...props} />}
    </appContext.Consumer>
  );

export function AppProvider(props) {
  const [store, dispatch] = useReducer(reducer, state);
  return (
    <appContext.Provider
      value={{
        store,
        dispatch,
      }}>
      {props.children}
    </appContext.Provider>
  );
}
