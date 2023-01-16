import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ alt, src, toggleModal }) {
  useEffect(() => {
    const handlerEscape = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.removeEventListener('keydown', handlerEscape);
    return () => {
      window.removeEventListener('keydown', handlerEscape);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
