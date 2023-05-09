import { Formik } from 'formik';
import * as yup from 'yup';
import {
  HeaderStyled,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  search: yup.string().required(),
});

const initialValues = {
  search: '',
};
export const Searchbar = ({ onSubmit }) => {
  return (
    <HeaderStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchIcon />
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            name="search"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </HeaderStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
