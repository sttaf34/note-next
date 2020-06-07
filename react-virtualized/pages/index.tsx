import React from "react"
import { NextPage } from "next"
import Link from "next/link"

const Page: NextPage = () => {
  return (
    <>
      <p>
        <Link href="/window-scroller">
          <a>WindowScroller</a>
        </Link>
        <br />
        <Link href="/auto-sizer">
          <a>AutoSizer</a>
        </Link>
      </p>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
