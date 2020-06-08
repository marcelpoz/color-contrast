import React from 'react';
import { styled } from 'linaria/react';
import GithubSVG from '../../assets/github.svg';

const Footerr = styled.footer`
  position: absolute;
  bottom: var(--base-unit);
  left: var(--base-unit);

  a {
    color: #fff;
    opacity: 0.5;
    transition: opacity 0.3s;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const Footer = () => {
  return (
    <Footerr>
      <a href="https://github.com/marcelpoz/color-contrast" target="_blank" rel="noreferrer">
        <GithubSVG />
      </a>
    </Footerr>
  );
};

export default Footer;
