import { Container } from './Loading.styles';
import { ILoadingProps } from './Loading.types';

const Loading = ({ size }: ILoadingProps): JSX.Element => {
  return <Container size={size} />;
};

Loading.defaultProps = {
  size: 'normal',
};

export default Loading;
