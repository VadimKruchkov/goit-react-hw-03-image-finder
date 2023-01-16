import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as API from 'services/api';

import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';

export default function ImgFinder() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('popular');
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    async function getImages(query, page) {
      const { hits, totalHits } = await API.searchImage(query, page);
      setImages(page === 1 ? hits : images => [...images, ...hits]);
      setTotalPages(Math.floor(totalHits / API.PER_PAGE));
      setIsLoading(false);

      return;
    }
    getImages(query, page);
    setTotalPages(Math.floor(2 / API.PER_PAGE));
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const isShowLoadMore = totalPages > 0 && totalPages > page;
  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {isShowLoadMore && <Button onLoadMore={loadMore} />}
    </>
  );
}

ImgFinder.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
