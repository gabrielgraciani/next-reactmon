import {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react';
import { v4 as uuid } from 'uuid';
import { IToast } from 'interfaces/Toast';
import { ToastContainer } from '../components/ToastContainer';

interface IToastContextData {
  addToast(message: Omit<IToast, 'id'>): void;
  removeToast(id: string): void;
}

interface IToastProvider {
  children: ReactNode;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

const ToastProvider = ({ children }: IToastProvider): JSX.Element => {
  const [messages, setMessages] = useState<IToast[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToast, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== id),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { useToast, ToastProvider };
