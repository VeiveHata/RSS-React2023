import Input from 'components/Input';
import Page from 'components/Page';
import React from 'react';
import './styles.css';

type CardsProps = {
  list: [unknown];
};

class Cards extends React.Component<CardsProps> {
  onSearch = (value: string) => {
    console.log(value);
  };

  render() {
    return (
      <Page className="cards" name="Cards">
        <Input onSearch={this.onSearch} name="cardsSearch" withSave />
      </Page>
    );
  }
}

export default Cards;
