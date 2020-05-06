/* eslint-disable react/jsx-props-no-spreading */

import React from "react"
import { AppProps } from "next/app"

import "../styles/global.css"

// _app.tsx でエクスポートしたコンポーネントは
// すべてのページに共通するトップレベルのコンポーネントになるとのこと
// グローバルな CSS のファイルは _app.tsx からのみインポートできる

// TODO: ここの仕組みがよくわかってない
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
