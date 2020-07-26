import React from "react"
import { NextPage } from "next"

interface Props {
  title: string
}

interface State {
  value: string
}

// 制御されたコンポーネント
// https://ja.reactjs.org/docs/forms.html
class HelloClassComponent extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = { value: "" }

    // メソッドをアロー関数にしない場合、
    // メソッド内で this にアクセスするためには bind(this) する必要がある
    // this.handleChange = this.handleChange.bind(this)
  }

  // メソッドをアロー関数で書いている
  private handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value })
  }

  // メソッドをアロー関数にしない場合
  // handleChange(event: React.FormEvent<HTMLInputElement>): void {
  //   this.setState({ value: event.currentTarget.value })
  // }

  public render(): JSX.Element {
    const { title } = this.props
    const { value } = this.state

    return (
      <div>
        <span>{title}</span>
        <br />
        <input type="text" value={value} onChange={this.handleChange} />
        <br />
        <span>{value}</span>
      </div>
    )
  }
}

const Page: NextPage = () => {
  return <HelloClassComponent title="タイトル" />
}

// eslint-disable-next-line import/no-default-export
export default Page
