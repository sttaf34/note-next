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

export const getStaticProps: GetStaticProps = async () => {
  const title = "トップページ！！！"
  return { props: { title } }
}
