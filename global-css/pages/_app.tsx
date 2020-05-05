/* eslint-disable react/jsx-props-no-spreading */

import "../styles/global.css"

import React from "react"
import { AppProps } from "next/app"

// _app.tsx でエクスポートしたコンポーネントは
// すべてのページに共通するトップレベルのコンポーネントになるとのこと
// グローバルな CSS のファイルは _app.tsx からのみインポートできる

// TODO: ここの仕組みがよくわからない、返り値の型もあってないような
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
