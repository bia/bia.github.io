// gatsby-ssr.js

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="Bariol-Regular"
      rel="preload"
      href="/fonts/bariol_regular-webfont.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Bariol-Italic"
      rel="preload"
      href="/fonts/bariol_regular_italic-webfont.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="Bariol-Bold"
      rel="preload"
      href="/fonts/bariol_bold-webfont.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />
  ]);
};