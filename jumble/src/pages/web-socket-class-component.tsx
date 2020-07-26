import React from "react"
import { NextPage } from "next"

// wscat -l 4000
// これで Web Socket のサーバをを立てといて...

class Component extends React.Component {
  public componentDidMount(): void {
    const webSocket = new WebSocket("ws://localhost:4000/")

    // 接続された最初のタイミング
    webSocket.onopen = (): void => {
      console.log("connected")
    }

    // サーバからメッセージを受信したときのタイミング
    webSocket.onmessage = (event: MessageEvent): void => {
      console.log(event)
    }

    // 接続が途切れたタイミング、サーバ停止すればここが動く
    webSocket.onclose = (): void => {
      console.log("disconnected")
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <p>Web Socket サンプル</p>
      </>
    )
  }
}

const Page: NextPage = () => {
  return <Component />
}

// eslint-disable-next-line import/no-default-export
export default Page
