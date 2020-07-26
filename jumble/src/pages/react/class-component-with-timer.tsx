import React from "react"
import { NextPage } from "next"

interface State {
  date: Date
}

class ClassComponent extends React.Component<unknown, State> {
  timerID = 0

  public constructor(props: React.Props<unknown>) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  // https://ja.reactjs.org/docs/react-component.html#componentdidmount
  public componentDidMount = (): void => {
    this.timerID = window.setInterval(() => this.tick(), 1000)
  }

  public componentWillUnmount = (): void => {
    clearInterval(this.timerID)
  }

  private tick = (): void => {
    this.setState({
      date: new Date(),
    })
  }

  public render(): JSX.Element {
    const { date } = this.state
    return <span>{date.toLocaleTimeString()}</span>
  }
}

const Page: NextPage = () => {
  return <ClassComponent />
}

// eslint-disable-next-line import/no-default-export
export default Page
