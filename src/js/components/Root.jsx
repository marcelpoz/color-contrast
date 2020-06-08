import { styled } from 'linaria/react';

export default styled.div`
  :global() {
    :root {
      --base-unit: 1.6rem;
      --bgColour: #8127db;
      --textColour: #000000;
      --border-radius: 2px;
      --breakpoint-tablet: 768px;
      --font-size-S: 1.4rem;
      --font-size-M: 1.6rem;
      --font-size-L: 2.4rem;
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      border: none;
      outline: 0;
      outline-style: none;
      text-decoration: none;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 10px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      line-height: 1.5;
      overflow-x: hidden;
    }

    body {
      height: 100%;
      overflow-x: hidden;
      font-size: var(--font-size-M);
    }

    img {
      max-width: 100%;
    }
  }
`;
