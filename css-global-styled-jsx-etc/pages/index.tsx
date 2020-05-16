import React from "react"
import { NextPage } from "next"
import css from "styled-jsx/css"

import Layout from "../components/layout"

// CSS の記述のところが文字列になってしまって補完が効かないので、
// *.module.css の書き方の方が良いかもしれない
const styles = css`
  h1 {
    color: silver;
  }
  p {
    color: gray;
  }
`

const Page: NextPage = () => {
  return (
    <Layout>
      <style jsx>{styles}</style>
      <h1>見出し</h1>
      <p>
        親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。
      </p>
    </Layout>
  )
}

export default Page
