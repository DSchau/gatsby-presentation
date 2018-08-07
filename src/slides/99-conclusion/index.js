import React from 'react';
import { Heading, Link, List, ListItem } from 'spectacle';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';
import WebsiteIcon from 'react-icons/lib/fa/globe';

const images = {
  thankYou: 'https://media.giphy.com/media/KJ1f5iTl4Oo7u/giphy.gif'
};

export const PerfMatters = () => (
  <div>
    <Heading size={1} caps fit textColor="white">Perf.</Heading>
    <Heading size={1} caps fit textColor="white">Matters</Heading>
    <Heading size={2} fit textColor="white">(aka give a shit)</Heading>
  </div>
);

PerfMatters.Props = {
  id: 'performance-matters',
  bgColor: 'black'
};

export const Links = () => (
  <div>
    <Heading size={2} caps textColor="white">
      Links
    </Heading>
    <List>
      {[
      ].map(([title, href]) => {
        const Icon = href.includes('github.com') ? GithubIcon : WebsiteIcon;
        return (
          <ListItem
            key={href}
            textAlign="left"
            style={{
              display: 'flex',
              alignItems: 'center',
              listStyleType: 'none',
              margin: '1rem 0'
            }}
          >
            <Icon color="white" style={{ marginRight: '1rem' }} />
            <Link href={href} target="_blank" textColor="white">
              {title}
            </Link>
          </ListItem>
        );
      })}
    </List>
  </div>
);

Links.Props = {
  bgImage: require('./images/links-optimized.jpg'),
  id: 'links',
  bgDarken: 0.5,
  notes: `
Check out some of these links to view the repos and/or live demonstration sites of the Gatsby functionality!

  `
};

export const FinTheEndThatsAllFolks = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '85vh',
      width: '80vw',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}
  >
    {[
      {
        href: 'https://twitter.com/schaudustin',
        Icon: TwitterIcon,
        text: '@schaudustin'
      },
      {
        href: 'https://github.com/dschau',
        Icon: GithubIcon,
        text: 'dschau'
      },
      {
        href: 'https://dustinschau.com',
        Icon: WebsiteIcon,
        text: 'website'
      }
    ].map(({ href, Icon, text }) => (
      <Link
        href={href}
        textColor="white"
        style={{ display: 'block' }}
        target="_blank"
        rel="noopener"
        key={text}
      >
        <Icon color="white" style={{ marginRight: 6 }} />
        {text}
      </Link>
    ))}
  </div>
);

FinTheEndThatsAllFolks.Props = {
  bgImage: images.thankYou,
  notes: `
Thanks for reading, and I hope this leaves you feeling much more confident about the value of GraphQL and informed enough to make a decision as to whether it may make sense to adopt for your applications in the future!
  `
};
