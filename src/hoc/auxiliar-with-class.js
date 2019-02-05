import React from 'react';

const axuiliarWithClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent { ...props }/>
    </div>
  );
};

export default axuiliarWithClass;
