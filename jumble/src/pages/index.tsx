import React from "react"
import { NextPage, GetStaticProps } from "next"
import Link from "next/link"
import { join } from "path"
import styled from "@emotion/styled"
import { expandTilde, readFullPathsRecursively } from "src/others/path"

const StyledUl = styled.ul({
  listStyleType: "none",
  paddingLeft: 12,
  fontFamily: "Menlo",
  li: {
    padding: "0.2rem",
  },
})

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
      <StyledUl>{lis}</StyledUl>
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
