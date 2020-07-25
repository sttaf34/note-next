import React from "react"
import { NextPage, GetStaticProps } from "next"
import Link from "next/link"
import fs from "fs"
import { join } from "path"

type Props = {
  paths: string[]
}

const Page: NextPage<Props> = (props: Props) => {
  const { paths } = props
  const lis = paths.map((path) => (
    <li key={path}>
      <Link href={path}>
        <a>{path}</a>
      </Link>
    </li>
  ))

  return (
    <>
      <h1>ページの一覧</h1>
      <ul>{lis}</ul>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page

export const getStaticProps: GetStaticProps = async () => {
  // TODO: pages の下が階層構造になっているときの対応が必要
  const pagesDirectory = join(process.cwd(), "src/pages")
  const paths = fs.readdirSync(pagesDirectory)
  let filteredPaths = paths.filter((path) => {
    if (path.length > 0 && path[0] === "_") {
      return false
    }
    if (path === "index.tsx") {
      return false
    }
    return true
  })
  filteredPaths = filteredPaths.map((path) => {
    return path.replace(".tsx", "")
  })

  return { props: { paths: filteredPaths } }
}
