import { MutatingDots } from 'react-loader-spinner';
import React from 'react';

const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#5667ff"
      secondaryColor="#5667ff"
      radius="12"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
      visible={true}
    />
  );
};

export default Loader;
