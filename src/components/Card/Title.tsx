import { ConditionalRender } from 'components/ConditionalRender';
import React from 'react';
import { TitleLanguage, Titles } from 'types/manga';
import { getTitle } from 'utils/card';

type TitleProps = {
  titles: Titles;
  canonicalTitle: string;
};

export class Title extends React.Component<TitleProps> {
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
