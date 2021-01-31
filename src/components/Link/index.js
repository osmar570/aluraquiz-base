/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, { Children } from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
