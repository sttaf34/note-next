import React from "react"
import { NextPage } from "next"

// これは間違い
// 「React.FC」型の変数を宣言ではなくて、
// 「引数なし・返り値型 React.FC の関数」型の変数になってしまっているので
// const ComponentA = (): React.FC => {
//   return <p>A</p>
// }

// 省略しない形
const ComponentA: React.FC = () => {
  return <p>A</p>
}

// 波括弧を省略
const ComponentB: React.FC = () => <p>B</p>

// 複数行の場合は括弧で囲む
const ComponentC: React.FC = () => {
  return (
    <>
      <p>C</p>
      <p>C</p>
    </>
  )
}

// 波括弧を省略
const ComponentD: React.FC = () => (
  <>
    <p>D</p>
    <p>D</p>
  </>
)

// map を使うときは key を忘れずに
// https://ja.reactjs.org/docs/lists-and-keys.html
const ComponentE: React.FC = () => {
  const numbers = ["1", "2", "3"]
  const lis = numbers.map((number) => <li key={number}>{number}</li>)
  return <ul>{lis}</ul>
}

// map の中で複数行になるとき
const ComponentF: React.FC = () => {
  const titles = ["面白い本", "役に立つ本", "笑える本"]
  const lis = titles.map((title, index) => (
    <li key={index.toString()}>{title}</li>
  ))
  return <ul>{lis}</ul>
}

// 波括弧で書く場合
// 閉じの丸括弧が2つ並ぶよりはこちらの方が良いかも
const ComponentG: React.FC = () => {
  const titles = ["面白い本", "役に立つ本", "笑える本"]
  const lis = titles.map((title, index) => {
    return <li key={index.toString()}>{title}</li>
  })
  return <ul>{lis}</ul>
}

// 波括弧で書いて、return するところが複数行の場合
const ComponentH: React.FC = () => {
  const titles = ["面白い本", "役に立つ本", "笑える本"]
  const lis = titles.map((title, index) => {
    return (
      <li key={index.toString()}>
        <span>{index}.</span>
        {title}
      </li>
    )
  })
  return <ul>{lis}</ul>
}

const Page: NextPage = () => {
  return (
    <>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ComponentD />
      <ComponentE />
      <ComponentF />
      <ComponentG />
      <ComponentH />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
