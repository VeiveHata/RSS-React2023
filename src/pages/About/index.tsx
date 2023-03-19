import { Page } from 'components/Page';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class About extends React.Component {
  render() {
    return (
      <Page className="about" name="About us">
        <Link className="link" to="/">
          Link for testing input value: Back to Cards page
        </Link>
      </Page>
    );
  }
}

export default About;
