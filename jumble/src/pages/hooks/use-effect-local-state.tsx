/* eslint-disable max-classes-per-file */
/* eslint-disable react-hooks/exhaustive-deps */

import React from "react"
import { NextPage } from "next"

const FunctionComponent: React.FC = () => {
  const [value, setValue] = React.useState(0.777)

  // コンポーネントがページから消えるときに
  // ローカルステイトの値で何かしたいとなったとする

  // ⬇だと、一番最初の value をキャプチャして
  // コンポーネントがページから消えるときに一回だけ動く
  React.useEffect(() => {
    return () => console.log(`Bye Function ${value}`)
  }, [])

  // ⬇だと、value 変更都度で処理が動き、
  // コンポーネントがページから消えるときにも動く
  // React.useEffect(() => {
  //   return () => console.log(`Bye Function ${value}`)
  // }, [value])

  return (
    <>
      <p>{value}</p>
      <button type="button" onClick={() => setValue(Math.random())}>
        ボタン
      </button>
    </>
  )
}

type State = {
  value: number
}

class ClassComponent extends React.Component<unknown, State> {
  public constructor(props: React.Props<unknown>) {
    super(props)
    this.state = { value: 0.777 }
  }

  private onClick = (): void => {
    this.setState({ value: Math.random() })
  }

  // ⬇だと、コンポーネントがページから消えるときに一回だけ動き、
  // 一番最後の value が使われる
  public componentWillUnmount = (): void => {
    const { value } = this.state
    console.log(`Bye Class ${value}`)
  }

  public render(): JSX.Element {
    const { value } = this.state

    return (
      <>
        <p>{value}</p>
        <button type="button" onClick={this.onClick}>
          ボタン
        </button>
      </>
    )
  }
}

type Props = {
  value: number
}

class ClassComponentStateless extends React.Component<Props> {
  // ⬇だと、コンポーネントがページから消えるときに一回だけ動き、
  // props で渡されている value が使われる
  public componentWillUnmount = (): void => {
    const { value } = this.props
    console.log(`Bye Stateless ${value}`)
  }

  public render(): JSX.Element {
    const { value } = this.props
    return <p>{value}</p>
  }
}

const Page: NextPage = () => {
  const [value, setValue] = React.useState(0.11111)

  return (
    <>
      <FunctionComponent />
      <hr />
      <ClassComponent />
      <hr />
      <ClassComponentStateless value={value} />
      <button type="button" onClick={() => setValue(Math.random())}>
        ボタン
      </button>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
