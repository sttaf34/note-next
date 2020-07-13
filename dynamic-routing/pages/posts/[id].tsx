import React from "react"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import pageIds from "../../others/constants"

interface Props {
  title: string
}

const Page: NextPage<Props> = (props: Props) => {
  const { title } = props
  return (
    <>
      <h1>見出し</h1>
      <h3>{title}</h3>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  // この配列の分のページが生成されることになる
  // キーの id は [id].tsx の [] 内の名前を指定する形
  const paths = pageIds.map((pageId) => {
    return { params: { id: String(pageId) } }
  })

  // const paths = [
  //   { params: { id: "1" } },
  //   { params: { id: "2" } },
  //   { params: { id: "3" } },
  // ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  // getStaticPaths で返した配列のそれぞれの要素が context で渡ってくる
  const { params } = context
  if (params) {
    console.log(params.id)
    return { props: { title: params.id } }
  }

  const title = "タイトル"
  return { props: { title } }
}
