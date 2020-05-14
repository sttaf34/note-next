import React from "react"
import { NextPage, GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"

import Layout from "../components/layout"

interface Props {
  title: string
}

const Page: NextPage<Props> = (props: Props) => {
  const { title } = props
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <p>
        <Link href="/about">
          <a>about</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Page

// この関数を書いておくとビルド時に実行され、↑のPageに渡される
export const getStaticProps: GetStaticProps = async () => {
  // 例えば、CSVファイルから読み込んだり、DBから取ったりする
  const title = "トップページ！！！"
  return { props: { title } }
}
