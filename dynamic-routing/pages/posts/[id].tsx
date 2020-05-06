import React from "react"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import Link from "next/link"

import Layout from "../../components/layout"

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

export const getStaticPaths: GetStaticPaths = async () => {
  // この配列の分のページが生成されることになる
  // キーの id は [id].tsx の [] 内の名前を指定する形
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ]
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
  }

  const title = "トップページ！！！"
  return { props: { title } }
}
