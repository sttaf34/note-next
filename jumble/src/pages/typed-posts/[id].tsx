import React from "react"
import { ParsedUrlQuery } from "querystring"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"

//
// src/pages/posts/[id].tsx と内容はほとんど同じで
// getStaticPaths と getStaticProps に型を明示している
//

interface PageProps {
  title: string
  body: string
  datetime: string
}

const Page: NextPage<PageProps> = (props: PageProps) => {
  const { title, datetime, body } = props
  return (
    <>
      <h3>{title}</h3>
      <span>{datetime}</span>
      <p>{body}</p>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page

interface PostData extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<PostData> = async () => {
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

// getStaticPaths で返した配列のそれぞれの要素が context で渡ってくる仕組み
// GetStaticPaths に型を指定することで context から得られる値の型が定まる
export const getStaticProps: GetStaticProps<PageProps, PostData> = async (
  context
) => {
  const { params } = context
  if (params === undefined) {
    throw new Error(`params is undefined.`)
  }

  const pageProps: PageProps = {
    title: `タイトル ${params.id}`,
    body: `本文 ${params.id}`,
    datetime: "2020-07-07 12:34:56",
  }

  return { props: pageProps }
}
