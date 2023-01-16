import PropTypes from 'prop-types';
import { useState } from 'react';
import { useToggle } from '../hooks/useToggle';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ images }) {
  const [bigUrl, setBigUrl] = useState('');
  const [tag, setTag] = useState('');
  const { isOpen, toggleModal } = useToggle();

  const getImage = e => {
    setBigUrl(e.target.dataset.largeimg);
    setTag(e.target.alt);
    toggleModal();
  };

  return (
    <>
      {images.map(image => (
        <li className="ImageGalleryItem" key={image.id}>
          <img
            src={image.webformatURL}
            data-largeimg={image.largeImageURL}
            alt={image.tags}
            className="ImageGalleryItemImage"
            onClick={getImage}
            loading="lazy"
          />
        </li>
      ))}
      {isOpen && <Modal src={bigUrl} alt={tag} toggleModal={toggleModal} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
