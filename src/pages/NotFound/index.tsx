import { PageContent } from 'components/PageContent';
import { TitleH2 } from 'components/Title';
import { pagesData } from 'consts/router';
import React from 'react';
import './styles.css';

const NotFound: React.FC = () => {
  return (
    <PageContent testId={pagesData.unknown.testId}>
      <TitleH2>404: Not found</TitleH2>
    </PageContent>
  );
};

export default NotFound;
