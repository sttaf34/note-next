/* eslint-disable react/jsx-props-no-spreading */

import React from "react"
import { AppProps } from "next/app"

import "../styles/global.css"
import "../node_modules/ress/ress.css"

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
