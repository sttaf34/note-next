import React from "react"
import { NextPage, GetStaticProps } from "next"

interface Props {
  title: string
}

const Page: NextPage<Props> = (props: Props) => {
  const { title } = props
  return (
    <>
      <p>{title}</p>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page

// この関数を書いておくとビルド時に実行され、↑のPageに渡される
export const getStaticProps: GetStaticProps = async () => {
  // 例えば、CSVファイルから読み込んだり、DBから取ったりする
  const title = "トップページ！！！"
  return { props: { title } }
}
