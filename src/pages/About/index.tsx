import { Page } from 'components/Page';
import React from 'react';
import './styles.css';

class About extends React.Component {
  render() {
    return <Page className="about" name="about" testId="aboutPage"></Page>;
  }
}

export default About;
