import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import Footer from '../components/Template/Footer'
import SideBar from '../components/Template/SideBar';

const Main = (props) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | IBG" defaultTitle="Imperial Blockchain Group" defer={false}>
      {props.title ?
        <>
          <title>{props.title}</title>
          <meta name='og:title' content='props.title' />
          <meta name='twitter:title' content='props.title' />
        </>
        : ''
      }
      {props.description ?
        <>
          <meta name='description' content={props.description} />
          <meta name='og:description' content={props.description} />
          <meta name='twitter:description' content={props.description} />
        </>
        : ''
      }
      {props.keywords ?
        <>
          <meta name='keywords' content={props.keywords} />
        </>
        : ''
      }

    </Helmet>
    <div>
      <Navigation />
      <div>
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
      <Footer />
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Imperial Blockchain Society website",
};

export default Main;