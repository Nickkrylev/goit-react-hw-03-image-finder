import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { ImageGalleryStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({
  images,
  onImageClick,
  onLoadMoreButtonClick,
  imagesQuantity,
}) => {
  return (
    <>
      <ImageGalleryStyled>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onImageClick={onImageClick}
          />
        ))}
      </ImageGalleryStyled>
      {imagesQuantity > 12 && images.length < imagesQuantity && (
        <Button onLoadMoreButtonClick={onLoadMoreButtonClick} />
      )}
    </>
  );
};

ImageGallery.propType = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
  onLoadMoreButtonClick: PropTypes.func.isRequired,
  imagesQuantity: PropTypes.number.isRequired,
};
