import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

interface Theme {
  color: string;
}

interface DataState {
  theme: Theme;
  cart: [];
  list: [];
  dispatch: Dispatch<any>;
}

const initialState: DataState = {
  theme: { color: 'dark' },
  cart: [],
  list: [],
  dispatch: (): void => {
    throw Error('not defined');
  }
};

const reducer = (state: DataState, action: any) => {
  switch (action.type) {
    case 'SwitchTheme':
      return {
        ...state,
        theme: { color: action.value }
      };
    default:
      return state;
  }
};

export const DataContext = createContext(initialState);

export default function DataProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme, cart, list } = state;

  return <DataContext.Provider value={{ theme, cart, list, dispatch }}>{children}</DataContext.Provider>;
}
