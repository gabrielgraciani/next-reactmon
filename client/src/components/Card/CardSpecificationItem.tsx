import {
  SpecificationsColLeft,
  SpecificationsColRight,
  SpecificationsRow,
  SpecificationsText,
} from './Card.styles';
import { ICardSpecificationItemProps } from './Card.types';

const CardSpecificationItem = ({
  title,
  value,
}: ICardSpecificationItemProps): JSX.Element => {
  return (
    <SpecificationsRow>
      <SpecificationsColLeft>
        <SpecificationsText>{title}</SpecificationsText>
      </SpecificationsColLeft>
      <SpecificationsColRight>
        <SpecificationsText>{value}</SpecificationsText>
      </SpecificationsColRight>
    </SpecificationsRow>
  );
};

export default CardSpecificationItem;
