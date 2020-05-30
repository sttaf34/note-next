import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import Layout from "src/components/layout"

const Page: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <p>
        <Link href="/index">
          <a>index</a>
        </Link>
      </p>
    </Layout>
  )
}

export default Page
