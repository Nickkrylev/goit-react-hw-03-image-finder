import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMoreButtonClick }) => {
  return (
    <ButtonStyled type="button" onClick={onLoadMoreButtonClick}>
      Load more
    </ButtonStyled>
  );
};
Button.propType = {
  onLoadMoreButtonClick: PropTypes.func.isRequired,
};
