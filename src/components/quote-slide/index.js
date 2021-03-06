import React, { Component } from 'react';
import {
  BlockQuote,
  Cite,
  Fill,
  Layout,
  Image,
  Link,
  Quote as QuoteComponent
} from 'spectacle';

const Author = ({ author, to: href }) => {
  return (
    <Cite>
      <Link href={href} textColor="white" target="_blank" rel="noopener">
        {author}
      </Link>
    </Cite>
  );
};

const Quote = ({ quote, ...rest }) => (
  <BlockQuote borderLeft="1px solid white">
    <QuoteComponent
      textColor="white"
      style={{
        borderLeft: '4px solid white',
        lineHeight: 1.25
      }}
      {...rest}
    >
      {quote}
    </QuoteComponent>
    <Author {...rest} />
  </BlockQuote>
);

export class QuoteSlide extends Component {
  render() {
    const { image, ...rest } = this.props;
    if (!image) {
      return <Quote textSize={40} {...rest} />;
    }
    return (
      <Layout>
        <Fill style={{ maxWidth: '40%' }}>
          <Image src={image} style={{ borderRadius: 300 }} />
        </Fill>
        <Fill style={{ display: 'flex', alignItems: 'center' }}>
          <Quote textSize={32} {...rest} />
        </Fill>
      </Layout>
    );
  }
}
