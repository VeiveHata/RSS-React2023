import { Card } from 'components/Card';
import { DialogMessage } from 'components/DialogMessage';
import { Form } from 'components/Form';
import { Page } from 'components/Page';
import { TitleH2 } from 'components/Title';
import React from 'react';
import { FormSubmitValues } from 'types/form';
import { DialogMessageType } from 'types/messages';
import { getTitle } from 'utils/card';
import './styles.css';

type FormsState = {
  cards: FormSubmitValues[];
  messageInfo: {
    text: string;
    type: DialogMessageType;
    visible: boolean;
  };
};

class Forms extends React.Component<unknown, FormsState> {
  state: FormsState = {
    cards: [],
    messageInfo: {
      text: '',
      type: 'info',
      visible: false,
    },
  };

  onFormSubmit = (cardFormValue: FormSubmitValues) => {
    const newCards = [...this.state.cards, cardFormValue];
    this.setState({
      cards: newCards,
      messageInfo: {
        text: `New manga ${getTitle(cardFormValue.titles)} is added to the list`,
        type: 'info',
        visible: true,
      },
    });
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
        <DialogMessage
          message={this.state.messageInfo.text}
          messageType={this.state.messageInfo.type}
          isVisisble={this.state.messageInfo.visible}
          onClose={() =>
            this.setState({
              messageInfo: {
                text: '',
                type: 'info',
                visible: false,
              },
            })
          }
        />
      </Page>
    );
  }
}

export default Forms;
