import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { useTranslation, withSSR } from 'react-i18next';
// import your default seo configuration
import SEO from '../../next-seo.config';
import '../assets/styles/globals.scss';
import { PWATags } from '../parts/PWATags';

// interface ReactGAProps {
//   debug: string
// }

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  // const reactGAOptions: ReactGAProps = {
  //   debug: process.env.NODE_ENV === "production" ? "false" : "true",
  // };

  const { i18n } = useTranslation();
  // const lang = i18n.language
  const router = useRouter();
  const langQuery =
    router.query?.lang && typeof router.query?.lang == 'string'
      ? router.query?.lang
      : undefined;

  useEffect(() => {
    if (langQuery) {
      if (langQuery.startsWith('en')) {
        i18n.changeLanguage('en');
      } else if (langQuery.startsWith('pt')) {
        i18n.changeLanguage('pt');
      }
    }
  }, [langQuery, i18n]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
        />
        <meta name="description" content="TrainRail Hackathon Brasil" />
        <meta name="keywords" content="train, hackathon" />
        <title>TrainRail Hackathon Brasil</title>

        <PWATags />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <script
        src="/path/to/bower_components/react-ga/dist/react-ga.min.js"
        async
      />

      <script async>
        {/* ReactGA.initialize('', reactGAOptions ); */}
        {/* ReactGA.pageview(window.location.pathname + window.location.search); */}
      </script>
    </>
  );
};

const ExtendedApp = withSSR()(MyApp);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
ExtendedApp.getInitialProps = async (): Promise<any> => {
  const pt = {
    ...require('../components/NavBar/lang/translation.pt.json'),
    ...require('../components/LanguageButton/lang/translation.pt.json'),
    ...require('../components/Hero/lang/translation.pt.json'),
    ...require('../parts/About/lang/translation.pt.json'),
    ...require('../parts/Participate/lang/translation.pt.json'),
  };
  const en = {
    ...require('../components/NavBar/lang/translation.en.json'),
    ...require('../components/LanguageButton/lang/translation.en.json'),
    ...require('../components/Hero/lang/translation.en.json'),
    ...require('../parts/About/lang/translation.en.json'),
    ...require('../parts/Participate/lang/translation.en.json'),
  };
  return {
    initialLanguage: 'pt',
    initialI18nStore: { pt: { translation: pt }, en: { translation: en } },
  };
};

export default ExtendedApp;
