import React from 'react';
import Loader from '../Loader';

interface Props {
  isLoading: boolean;
}

const ContentLoader: React.FC<Props> = ({ isLoading, children }) => {
  return <>{isLoading ? <Loader /> : children}</>;
};

export default ContentLoader;
