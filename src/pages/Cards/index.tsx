import Card from 'components/Card';
import Input from 'components/Input';
import Page from 'components/Page';
import React from 'react';
import { mangaList } from './cardsMock';
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
        <div className="cards-wrapper">
          {mangaList.map((manga) => (
            <Card manga={manga} key={manga.id} />
          ))}
        </div>
      </Page>
    );
  }
}

export default Cards;
