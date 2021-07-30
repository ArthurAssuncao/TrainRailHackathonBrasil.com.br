/* eslint-disable @typescript-eslint/no-explicit-any */
import Document, { Html, Main } from 'next/document';
import React from 'react';
import { HeadWithoutPreload } from '../components/CustomHead';
import { DeferredNextScript } from '../components/CustomNextScript';

export default class MyDocument extends Document {
  linkRef: React.RefObject<HTMLLinkElement>;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(props: any) {
    super(props);
    this.linkRef = React.createRef<HTMLLinkElement>();
  }

  componentDidMount(): void {
    if (this.linkRef.current) {
      this.linkRef.current.removeAttribute('media');
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <HeadWithoutPreload>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://images.weserv.nl" />

          <link
            rel="stylesheet"
            media="print"
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            ref={this.linkRef}
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </HeadWithoutPreload>
        <body>
          <Main />
          <DeferredNextScript />
        </body>
      </Html>
    );
  }
}
