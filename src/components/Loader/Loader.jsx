import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <div>
        <ThreeCircles
          height="100"
          width="100"
          color="#3541fb"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </LoaderContainer>
  );
};

export default Loader;
