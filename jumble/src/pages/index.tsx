import React from "react"
import { NextPage, GetStaticProps } from "next"
import Link from "next/link"
import { join } from "path"
import { expandTilde, readFullPathsRecursively } from "src/others/path"

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
  const fullPathPages = expandTilde(join(process.cwd(), "src/pages"))
  const paths = readFullPathsRecursively([fullPathPages])

  const invalidTexts = ["_", "[", "index.tsx"]
  let filteredPaths = paths.filter((path) => {
    return !invalidTexts.some((text) => path.includes(text))
  })

  filteredPaths = filteredPaths.map((path) => {
    return path.replace(`${fullPathPages}/`, "").replace(".tsx", "")
  })

  return { props: { paths: filteredPaths } }
}
