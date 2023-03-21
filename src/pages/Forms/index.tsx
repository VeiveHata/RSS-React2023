import { Form } from 'components/Form';
import { Page } from 'components/Page';
import { TitleH2 } from 'components/Title';
import React from 'react';
import './styles.css';

// const

class Forms extends React.Component {
  render() {
    return (
      <Page name="forms">
        <TitleH2>Please add new manga to our library</TitleH2>
        <Form />
      </Page>
    );
  }
}

export default Forms;
