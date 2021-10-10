import Head from 'next/head';
import { GlobalProvider } from '../context/GlobalCtx';
import '../styles/global.css';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Storytell</title>
        <meta charSet='UTF-8' />
        <meta
          name='keywords'
          content='storytell, story, event, social media, life goal, advice'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Storytell is a network of communities where people can share their progress in their hobbies, passions and goals. There's a section for whatever topic you find."
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/favicon.jpg' />
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </div>
  );
};

export default AppComponent;
