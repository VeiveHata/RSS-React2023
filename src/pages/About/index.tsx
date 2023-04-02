import { PageContent } from 'components/PageContent';
import { TitleH2 } from 'components/Title';
import { pagesData } from 'consts/router';
import React from 'react';
import './styles.css';

const About: React.FC = () => {
  return (
    <PageContent testId={pagesData.about.testId}>
      <TitleH2>About Page</TitleH2>
    </PageContent>
  );
};

export default About;
