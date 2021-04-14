import { IToast } from 'interfaces/Toast';
import Toast from './Toast';

import { Container } from './ToastContainer.styles';

interface IToastContainer {
  messages: IToast[];
}

const ToastContainer = ({ messages }: IToastContainer): JSX.Element => {
  return (
    <Container>
      {messages.map(message => (
        <Toast message={message} key={message.id} />
      ))}
    </Container>
  );
};

export default ToastContainer;
