import { Card } from 'components/Card';
import { DialogMessage } from 'components/DialogMessage';
import { Form } from 'components/Form';
import { PageContent } from 'components/PageContent';
import { TitleH2 } from 'components/Title';
import { pagesData } from 'consts/router';
import React, { useState } from 'react';
import { FormSubmitValues } from 'types/form';
import { DialogMessageType } from 'types/messages';
import { getFirstExistTitle } from 'utils/card';
import './styles.css';

const Forms: React.FC = () => {
  const [cards, setCards] = useState<FormSubmitValues[]>([]);
  const [messageInfo, setMessageInfo] = useState<{
    text: string;
    type: DialogMessageType;
    visible: boolean;
  }>({
    text: '',
    type: 'info',
    visible: false,
  });

  const onFormSubmit = (cardFormValue: FormSubmitValues, callback?: () => void) => {
    setCards([...cards, cardFormValue]);
    setMessageInfo({
      text: `New manga "${getFirstExistTitle(cardFormValue.titles)}" is added to the list`,
      type: 'info',
      visible: true,
    });

    callback && callback();
  };

  return (
    <PageContent testId={pagesData.forms.testId}>
      <TitleH2>Please add new manga to our library</TitleH2>
      <Form onSubmit={onFormSubmit} />
      <div className="cards-wrapper" data-testid="formsCardsList">
        {cards.map((card, index) => (
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
        message={messageInfo.text}
        messageType={messageInfo.type}
        isVisisble={messageInfo.visible}
        onClose={() =>
          setMessageInfo({
            text: '',
            type: 'info',
            visible: false,
          })
        }
      />
    </PageContent>
  );
};

export default Forms;
