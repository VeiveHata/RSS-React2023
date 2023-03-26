import { Page } from 'components/Page';
import React from 'react';
import './styles.css';

class NotFound extends React.Component {
  render() {
    return <Page className="not-found" name="unknown" testId="notFoundPage" />;
  }
}

export default NotFound;
