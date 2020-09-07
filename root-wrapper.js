import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/code';

const components = {
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily: `cascadia_coderegular, Montserrat, sans-serif`,
        backgroundColor: 'pink',
        padding: '1rem',
        fontSize: '20px',
        marginTop: 0,
        marginBottom: '20px'
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontFamily: `cascadia_coderegular, Montserrat, sans-serif`,
        marginTop: 0,
        marginBottom: '20px'
      }}
    >
      {children}
    </h3>
  ),
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray' }} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  }
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
