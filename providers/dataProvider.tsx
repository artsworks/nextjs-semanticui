import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';

interface Theme {
  color: string;
}

interface RegistrationForm {
  firstname: string;
  lastname: string;
  title: string;
  color: string;
}
interface DataState {
  theme: Theme;
  form: RegistrationForm;
  dispatch: Dispatch<any>;
}

const initialState: DataState = {
  theme: { color: 'dark' },
  form: { firstname: '', lastname: '', title: '', color: '' },
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
    case 'UpdateForm':
      return {
        ...state,
        form: action.value
      };
    default:
      return state;
  }
};

export const DataContext = createContext(initialState);

export default function DataProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme, form } = state;

  return <DataContext.Provider value={{ theme, form, dispatch }}>{children}</DataContext.Provider>;
}
