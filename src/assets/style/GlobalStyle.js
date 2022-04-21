import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  /* font */
  --font-family-project: Inter;
  --font-style-normal: normal;

    /* font size */
  --font-size-xxs: 0.75rem; /* 12px */
  --font-size-xs: 0.875rem; /* 14px */
  --font-size-s: 1rem; /* 16px */
  --font-size-m: 1.125rem; /* 18px */
  --font-size-l: 1.375rem; /* 22px */
  --font-size-xl: 1.75rem; /* 28px */
  --font-size-xxl: 2.5rem; /* 40px */

    /* line height */
  --line-height-default: 100%;
  --line-height-m: 114%;
  --line-height-l: 150%;
  --line-height-xl: 175%;

    /* font weight */
  --font-weight-500: 500;
  --font-weight-600: 600; 
  --font-weight-bold: bold;
  --font-weight-normal: normal;

    /* brand-colors */
  --neutral-color-gray-0: #000000;
  --neutral-color-gray-24: #3D3D3D;
  --neutral-color-gray-88: #DFDFDF;
  --neutral-color-white-100: #FFFFFF;
  --neutral-color-white-200: #F2F2F2;
  --neutral-color-background: #FAF9F7;
  --color-green-100: #00C88C;
  --brand-color-secundary: #5E20A4;
  --brand-color-primary: #00A870;

  --color-overlay: 314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%;

   /* spacing */
  --spacing-0: 0;
  --spacing-quarck: 0.25rem; /* 4px */
  --spacing-nano: 0.5rem; /* 8px */
  --spacing-xxxs: 1rem; /* 16px */
  --spacing-xxs: 1.5rem; /* 24px */
  --spacing-xs: 2rem; /* 32px */
  --spacing-sm: 2.5rem; /* 40px */
  --spacing-md: 3rem; /* 48px */
  --spacing-lg: 3.5rem; /* 56px */
  --spacing-xl: 4rem; /* 64px */
  --spacing-xxl: 5rem; /* 80px */
  --spacing-xxxl: 7.5rem; /* 120px */


  /* icon sizes */
  --size-icon-xxxs: 0.75rem; /* 12px */
  --size-icon-xxs: 0.875rem; /* 14px */
  --size-icon-xs: 1rem; /* 16px */
  --size-icon-s: 1.25rem; /* 20px */
  --size-icon-m: 1.5rem; /* 24px */
  --size-icon-l: 2rem; /* 32px */
  --size-icon-xl: 2.5rem; /* 40px */
  --size-icon-xxl: 3rem; /* 48px */
  --size-icon-xxxl: 4rem; /* 64px */

  /* border radius */
  --border-radius-nano: 0.25rem; /* 4px */
  --border-radius-s: 0.5rem; /* 8px */
  --border-radius-m: 1rem; /* 16px */
  --border-radius-l: 1.5rem; /* 24px */
  --border-radius-circle: 50%;

  /* border width */
  --border-width-none: 0;
  --border-width-hairline: 0.063rem; /* 1px */
  --border-width-thin: 0.125rem; /* 2px */
  --border-width-thick: 0.25rem; /* 4px */
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter
}

`;

export default GlobalStyle;
