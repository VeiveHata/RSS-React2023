import { Card } from 'components/Card';
import { Form } from 'components/Form';
import { Page } from 'components/Page';
import { TitleH2 } from 'components/Title';
import React from 'react';
import { FormSubmitValues } from 'types/form';
import './styles.css';

type FormsState = {
  cards: FormSubmitValues[];
};

class Forms extends React.Component {
  state: FormsState = {
    cards: [],
  };

  onFormSubmit = (cardFormValue: FormSubmitValues) => {
    const newCards = [...this.state.cards, cardFormValue];
    this.setState({ cards: newCards });
  };

  render() {
    return (
      <Page name="forms">
        <TitleH2>Please add new manga to our library</TitleH2>
        <Form onSubmit={this.onFormSubmit} />
        <div className="cards-wrapper">
          {this.state.cards.map((card, index) => (
            <Card
              titles={card.titles}
              canonicalTitle={card.canonicalTitle}
              posterImage={card.posterImage}
              description={card.description}
              status={card.status}
              key={index}
            />
          ))}
        </div>
      </Page>
    );
  }
}

export default Forms;
