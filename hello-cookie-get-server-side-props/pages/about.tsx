import React from "react"
import { NextPage, GetServerSideProps, GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies"

type Props = {
  randomNumber: number | undefined
}

const Page: NextPage<Props> = ({ randomNumber }: Props) => {
  return (
    <>
      <p>{randomNumber}</p>
    </>
  )
}

export default Page

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log("about.tsx > getServerSideProps")

  const object = parseCookies(context)
  const randomNumber = object.randomNumber || 777

  // context から cookie を取るとなると文字列で返されるので結構めんどい
  // const cookie = context.req.headers.cookie
  // console.log(cookie) => key=value; randomNumber=17

  return { props: { randomNumber } }
}
