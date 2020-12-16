import React from "react"
import { NextPage } from "next"
import { css } from "@emotion/css"
import styled from "@emotion/styled"

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
  paddingLeft: 30, // これで px 扱い
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
  paddingLeft: 50,
  paddingRight: "2rem",
})

// https://emotion.sh/docs/typescript
// デフォルトだと HTML タグには className で渡す形になる

const Page: NextPage = () => (
  <>
    <span className={styleSpanString}>CSS String</span>
    <hr />
    <span className={styleSpanObject}>CSS Object</span>
    <hr />
    <StyledSpanString>Styled String</StyledSpanString>
    <hr />
    <StyledSpanObject>Styled Object</StyledSpanObject>
  </>
)

// eslint-disable-next-line import/no-default-export
export default Page
