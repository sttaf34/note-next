import React from "react"
import { NextPage } from "next"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

//
// オブジェクトスタイルの場合の共通化
//

const styleBorderObject = css({
  border: "1px solid black",
})

const styleSpanA = css({
  color: "red",
  padding: "5px 5px 3px 5px",
})

const styleSpanB = css({
  color: "lightblue",
  padding: "5px 5px 3px 5px",
  marginLeft: "15px",
})

const ComponentObject: React.FC = () => {
  return (
    <>
      <span css={[styleBorderObject, styleSpanA]}>装飾</span>
      <br />
      <br />
      <span css={[styleBorderObject, styleSpanB]}>装飾</span>
    </>
  )
}

//
// styled の場合の共通化
//

const styleBorderStyled = {
  border: "1px solid lightblue",
}

const StyledSpanA = styled.span({
  ...styleBorderStyled,
  color: "lightblue",
  paddingRight: "2rem",
})

const StyledSpanB = styled.span({
  ...styleBorderStyled,
  color: "pink",
  paddingRight: "2rem",
})

const ComponentStyled: React.FC = () => {
  return (
    <>
      <StyledSpanA>装飾</StyledSpanA>
      <br />
      <StyledSpanB>装飾</StyledSpanB>
    </>
  )
}

const Page: NextPage = () => {
  return (
    <>
      <ComponentObject />
      <hr />
      <ComponentStyled />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
