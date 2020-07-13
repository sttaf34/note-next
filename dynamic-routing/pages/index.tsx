import React from "react"
import { NextPage, GetStaticProps } from "next"
import Link from "next/link"
import pageIds from "../others/constants"

interface Props {
  title: string
}

const Page: NextPage<Props> = (props: Props) => {
  const { title } = props

  // ダイナミックで作ってるページへの <Link> の例
  // https://nextjs.org/docs/api-reference/next/link
  const links = pageIds.map((pageId) => {
    return (
      <li key={pageId}>
        <Link href="/posts/[id]" as={`/posts/${pageId}`}>
          <a>[id].tsx へのリンク</a>
        </Link>
      </li>
    )
  })

  return (
    <>
      <h1>見出し</h1>
      <h3>{title}</h3>
      <p>
        <Link href="/about">
          <a>about</a>
        </Link>
      </p>
      <ul>{links}</ul>
    </>
  )
}

export default Page

export const getStaticProps: GetStaticProps = async () => {
  const title = "トップページ！！！"
  return { props: { title } }
}
