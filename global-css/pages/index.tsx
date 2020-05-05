import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import Layout from "../components/layout"

const Page: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>トップページ</title>
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
