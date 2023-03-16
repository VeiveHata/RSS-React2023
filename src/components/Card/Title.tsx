import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { TitleLanguage, Titles } from 'types/manga';

const languages: TitleLanguage[] = [TitleLanguage.en, TitleLanguage.en_us];
const getTitle = (titles: Titles, lang?: TitleLanguage) => {
  const titleLanguage = lang || languages.find((lang) => titles[lang]) || TitleLanguage.en;
  return titles[titleLanguage];
};

type TitleProps = {
  titles: Titles;
  canonicalTitle: string;
};

class Title extends React.Component<TitleProps> {
  render() {
    const { titles, canonicalTitle } = this.props;
    const mainTitle = [
      getTitle(titles, TitleLanguage.ja_jp),
      getTitle(titles, TitleLanguage.en_jp) || canonicalTitle,
    ].filter(Boolean);

    const [originalTitle, canonical] = mainTitle;
    const translatedTitle = getTitle(titles);
    return (
      <>
        <ConditionalRender condition={Boolean(translatedTitle)}>
          <h4 className="title">{translatedTitle}</h4>
        </ConditionalRender>
        <ConditionalRender condition={Boolean(originalTitle && canonical)}>
          <h4 className="title">
            {originalTitle} <span className="canonical-title">({canonical})</span>
          </h4>
        </ConditionalRender>
        <ConditionalRender condition={!!originalTitle && !canonical}>
          <h4 className="title">{originalTitle}</h4>
        </ConditionalRender>
      </>
    );
  }
}

export default Title;
