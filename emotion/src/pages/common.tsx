import React from "react"
import { NextPage } from "next"
import { css } from "@emotion/css"
import styled from "@emotion/styled"

//
// css の場合の共通化
//

const styleBorderObject = {
  border: "1px solid lightblue",
}

const styleSpanA = css({
  ...styleBorderObject,
  color: "red",
  padding: "5px 5px 3px 5px",
})

const styleSpanB = css({
  ...styleBorderObject,
  color: "lightblue",
  padding: "5px 5px 3px 5px",
  marginLeft: "15px",
})

const ComponentObject: React.FC = () => (
  <>
    <span className={styleSpanA}>装飾</span>
    <br />
    <br />
    <span className={styleSpanB}>装飾</span>
  </>
)

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

const ComponentStyled: React.FC = () => (
  <>
    <StyledSpanA>装飾</StyledSpanA>
    <br />
    <StyledSpanB>装飾</StyledSpanB>
  </>
)

const Page: NextPage = () => (
  <>
    <ComponentObject />
    <hr />
    <ComponentStyled />
  </>
)

// eslint-disable-next-line import/no-default-export
export default Page
