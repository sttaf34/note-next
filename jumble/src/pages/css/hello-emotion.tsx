import React from "react"
import { NextPage } from "next"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

/*
yarn add \
  emotion emotion-server @emotion/core @emotion/styled \
  babel-plugin-emotion @emotion/babel-preset-css-prop

.babelrc に Emotion の設定追加する必要がある
*/

// この書き方だと通常のCSSとプロパティ名が一緒だが、補完が効かない
const styleSpanString = css`
  color: pink;
  padding-left: 20px;
  border: 1px solid pink;
`

// https://emotion.sh/docs/object-styles
// オブジェクトスタイルだとCSSのプロパティの補完が効く
const styleSpanObject = css({
  color: "red",
  border: "1px solid pink",
  paddingLeft: 5, // これで px 扱い
  paddingRight: "1rem",
})

// https://emotion.sh/docs/styled
const StyledSpanString = styled.span`
  color: lightgreen;
  padding-left: 40px;
  border: 1px solid lightgreen;
`

// オブジェクトスタイルで CSS を付与したコンポーネント
const StyledSpanObject = styled.span({
  color: "lightblue",
  border: "1px solid lightblue",
  paddingRight: "2rem",
})

const Page: NextPage = () => {
  // 条件に応じてのCSSの調整
  const randomStyle = Math.random() > 0.5 ? { color: "gray" } : {}

  return (
    <>
      <span css={styleSpanString}>装飾</span>
      <br />
      <span css={styleSpanObject} style={randomStyle}>
        装飾
      </span>
      <br />
      <StyledSpanString>装飾</StyledSpanString>
      <br />
      <StyledSpanObject style={randomStyle}>装飾</StyledSpanObject>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
