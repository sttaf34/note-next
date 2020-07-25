import React from "react"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"

interface Props {
  title: string
}

const Page: NextPage<Props> = (props: Props) => {
  const { title } = props
  return (
    <>
      <h3>{title}</h3>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  // この関数で返す配列の分のページが生成される
  // キーの id は [id].tsx の [] 内の名前を指定する
  const pageIds = ["1", "2", "3"]
  const paths = pageIds.map((pageId) => {
    return { params: { id: pageId } }
  })

  // このような形
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
  // getStaticPaths で返した配列のそれぞれの要素が context で渡ってくる仕組み
  const { params } = context
  if (params) {
    return { props: { title: `タイトル ${params.id}` } }
  }

  const title = `タイトル`
  return { props: { title } }
}
