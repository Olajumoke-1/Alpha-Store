import React from 'react';

const LoadingBar = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-basegreen text-white text-center py-2 z-50 justify-center">
      {message}
    </div>
  );
};

export default LoadingBar;

