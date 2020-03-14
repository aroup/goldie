import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontFamily: `cascadia_coderegular, Montserrat, sans-serif`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            fontFamily: `cascadia_coderegular, Montserrat, sans-serif`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
          fontFamily: `cascadia_coderegular, Montserrat, sans-serif`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
            fontFamily: `cascadia_coderegular, Montserrat, sans-serif`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        fontFamily: `cascadia_coderegular, Montserrat, sans-serif`
      }}
    >
      <header
        style={{ fontFamily: `cascadia_coderegular, Montserrat, sans-serif` }}
      >
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
