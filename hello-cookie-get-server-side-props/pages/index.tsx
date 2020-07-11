import React from "react"
import Link from "next/link"
import { NextPage, GetServerSideProps } from "next"
import { useCookies } from "react-cookie"

type Props = {
  title: string
  randomNumber: number | undefined
}

const Page: NextPage<Props> = ({ title }: Props) => {
  const [, setCookie, removeCookie] = useCookies(["cookie"])

  const onClickA = (): void => {
    const randomNumber = Math.floor(Math.random() * 100)
    setCookie("randomNumber", randomNumber)
    console.log(randomNumber)
  }

  const onClickB = (): void => {
    removeCookie("randomNumber")
  }

  return (
    <>
      <h3>{title}</h3>
      <input type="button" value="クッキーに乱数を保存" onClick={onClickA} />
      <br />
      <input type="button" value="削除" onClick={onClickB} />
      <hr />
      <Link href="/about">
        <a>about</a>
      </Link>
    </>
  )
}

export default Page

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("index.tsx > getServerSideProps")
  const title = "トップページ"
  return { props: { title } }
}
