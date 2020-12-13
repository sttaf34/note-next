import React from "react"
import { NextPage } from "next"

//
// #region SampleA
//

const ComponentA: React.FC = () => {
  // メモ化しているので、ここは初回のみ出力される
  console.log("ComponentA")
  return <p>ComponentA</p>
}

const MemoComponentA = React.memo(ComponentA)

const SampleA: React.FC = () => {
  const [value, setValue] = React.useState(0)

  const onClick = () => {
    setValue((previousValue) => previousValue + 1)
  }

  return (
    <>
      <p>{value}</p>
      <button type="button" onClick={onClick}>
        増
      </button>
      <MemoComponentA />
    </>
  )
}

// #endregion SampleA

//
// #region SampleB
//

type Props = {
  message: string
}

const ComponentB: React.FC<Props> = ({ message }: Props) => {
  // 引数があるときの書き方
  // メモ化しているので、ここは初回のみ出力される
  console.log(message)
  return <p>ComponentB</p>
}

const MemoComponent = React.memo(ComponentB)

const SampleB: React.FC = () => {
  const [value, setValue] = React.useState(0)

  const onClick = () => {
    setValue((previousValue) => previousValue + 1)
  }

  return (
    <>
      <p>{value}</p>
      <button type="button" onClick={onClick}>
        増
      </button>
      <MemoComponent message="Hello!" />
    </>
  )
}

// #endregion SampleB

const Page: NextPage = () => {
  return (
    <>
      <SampleA />
      <hr />
      <SampleB />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
