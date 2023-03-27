import { Page } from 'components/Page';
import React from 'react';
import './styles.css';

const NotFound: React.FC = () => {
  return <Page className="not-found" name="unknown" testId="notFoundPage" />;
};

export default NotFound;
