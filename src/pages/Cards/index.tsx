import Input from 'components/Input';
import Page from 'components/Page';
import React from 'react';
import './styles.css';

type CardsProps = {
  list: [unknown];
};

type CardsState = {
  defaultInputValue: string;
};

class Cards extends React.Component<CardsProps, CardsState> {
  state = {
    defaultInputValue: '123',
  };

  onSearch = (value: string) => {
    console.log(value);
  };

  render() {
    const { defaultInputValue } = this.state;
    return (
      <Page className="cards" name="Cards">
        <Input defaultValue={defaultInputValue} onSearch={this.onSearch} />
      </Page>
    );
  }
}

export default Cards;
