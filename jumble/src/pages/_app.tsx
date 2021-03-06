/* eslint-disable react/jsx-props-no-spreading */

import React from "react"
import { AppProps } from "next/app"

import "styles/global.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

// eslint-disable-next-line import/no-default-export
export default App
