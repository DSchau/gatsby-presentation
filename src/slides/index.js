import React from 'react';
import { Notes, SlideSet, Slide } from 'spectacle';
import CodeSlide from '@dschau/spectacle-code-slide';
import marked from 'marked';
import dasherize from 'lodash.kebabcase';

import * as Intro from './01-intro';
import * as Accessibility from './z-index-is-weird-rite-accessibility';
import * as BlazingFast from './02-blazing-fast';
import * as WhatIsAStaticSite from './03-what-is-a-static-site';
import * as WhatIsReact from './04-what-is-react';
import * as WhyGatsby from './05-why-gatsby';
import * as Demo from './98-demo';
import * as Conclusion from './99-conclusion';

export default function makeSlides() {
  return [
    Intro,
    Accessibility,
    BlazingFast,
    WhatIsAStaticSite,
    WhatIsReact,
    WhyGatsby,
    Demo,
    Conclusion
  ].map((Slides, rootIndex) => {
    return (
      <SlideSet key={rootIndex}>
        {Object.keys(Slides).map((key, index) => {
          const id = dasherize(key);
          const Content = Slides[key];
          const Props = Content && Content.Props ? Content.Props : {};
          const iteratorKey = `${rootIndex}-${index}`;
          if (Props.code) {
            const { ranges = [], ...props } = Content.Props;
            return (
              <CodeSlide id={id} key={iteratorKey} ranges={ranges} {...props} />
            );
          }
          return (
            <Slide key={iteratorKey} {...Content.Props || Content.props}>
              <Notes>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked((Props.notes || '').trim())
                  }}
                />
              </Notes>
              {typeof Content === 'function' ? <Content /> : Content}
            </Slide>
          );
        })}
      </SlideSet>
    );
  });
}
