import { Container } from './Loading.styles';
import { LoadingProps } from './Loading.types';

const Loading = ({ size }: LoadingProps): JSX.Element => {
  return <Container size={size} />;
};

Loading.defaultProps = {
  size: 'normal',
};

export default Loading;
