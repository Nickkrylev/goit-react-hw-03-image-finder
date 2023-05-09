import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'services/images-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { AppStyled } from './App.styled';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    currentPage: 1,
    images: [],
    imagesQuantity: 0,
    showModal: false,
    currentImage: '',
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, currentPage } = this.state;
    try {
      if (prevState.query !== query) {
        this.setState({
          currentPage: 1,
          imagesQuantity: 0,
          isLoading: true,
        });

        const { hits, totalHits } = await fetchImages(query, currentPage);

        this.setState({
          images: hits,
          imagesQuantity: totalHits,
          isLoading: false,
        });

        if (hits.length === 0) {
          return alert('We don`t have images with this name');
        }
      }

      if (prevState.currentPage !== currentPage && currentPage !== 1) {
        const { hits } = await fetchImages(query, currentPage);

        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  onOpenModal = () => {
    this.setState({ showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  onImageClick = currentImage => {
    this.setState({ currentImage, showModal: true });
  };

  onSubmit = ({ search }, { resetForm }) => {
    this.setState({ query: search, currentPage: 1 });
    resetForm();
  };

  onLoadMoreButtonClick = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { images, currentImage, showModal, imagesQuantity, isLoading } =
      this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        <ImageGallery
          images={images}
          onImageClick={this.onImageClick}
          onLoadMoreButtonClick={this.onLoadMoreButtonClick}
          imagesQuantity={imagesQuantity}
        ></ImageGallery>
        {showModal && (
          <Modal onCloseModal={this.onCloseModal} currentImage={currentImage} />
        )}
        {isLoading && <Loader />}
      </AppStyled>
    );
  }
}
