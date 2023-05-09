import {
  ImageGalleryItemImage,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onImageClick,
}) => {
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImage
        src={webformatURL}
        alt=""
        onClick={() => {
          onImageClick(largeImageURL);
        }}
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
