/* eslint-disable react/jsx-props-no-spreading */

import React from "react"
import { AppProps } from "next/app"

import "@fortawesome/fontawesome-svg-core/styles.css"

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
