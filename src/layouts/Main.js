import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons/faArrowAltCircleUp';
import Navigation from '../components/Template/Navigation';
import Footer from '../components/Template/Footer'
import SideBar from '../components/Template/SideBar';

const scrollUp = () => {
  window.scrollTo(0, 0);
}

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
      <button className='fixed bottom-2 right-4 text-2xl hover:text-rose-600' aria-label='scroll up' onClick={scrollUp}><FontAwesomeIcon icon={faArrowAltCircleUp} /></button>
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