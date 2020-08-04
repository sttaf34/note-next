import React from "react"
import { NextPage } from "next"

const sleep = async (milliseconds: number): Promise<void> => {
  return new Promise((resolve: () => void): void => {
    setTimeout((): void => {
      resolve()
    }, milliseconds)
  })
}

const ComponentA: React.FC = () => {
  const getRandomNumber = async (): Promise<number> => {
    await sleep(1000)
    console.log("getRandomNumber")
    return Math.random()
  }

  // "onClickA" => 待機 => "getRandomNumber" => 乱数
  const onClick = (): void => {
    getRandomNumber().then((randomNumber) => {
      console.log(randomNumber)
    })
    console.log("onClickA")
  }

  return (
    <button type="button" onClick={onClick}>
      ボタン
    </button>
  )
}

const ComponentB: React.FC = () => {
  const getRandomNumber = async (): Promise<number> => {
    console.log("getRandomNumber")
    await sleep(1000)
    return Math.random()
  }

  // "getRandomNumber" => "onClickA" => 待機 => 乱数
  const onClick = (): void => {
    getRandomNumber().then((randomNumber) => {
      console.log(randomNumber)
    })
    console.log("onClickA")
  }

  return (
    <button type="button" onClick={onClick}>
      ボタン
    </button>
  )
}

const Page: NextPage = () => {
  return (
    <>
      <ComponentA />
      <hr />
      <ComponentB />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
