import React from "react"
import { NextPage } from "next"

// 2階層の親子関係
// 親が子の状態を持っているような形
// https://ja.reactjs.org/docs/lifting-state-up.html#lifting-state-up

interface BoxProps {
  value: string
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const Box: React.FC<BoxProps> = (props: BoxProps) => {
  const { onChange, value } = props
  return <input type="text" value={value} onChange={onChange} />
}

interface BoxesState {
  values: string[]
}

class Boxes extends React.Component<unknown, BoxesState> {
  public constructor(props: React.Props<unknown>) {
    super(props)
    this.state = {
      values: Array<string>(5).fill(""),
    }
  }

  private handleChange = (
    index: number,
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    event.preventDefault()
    const { values } = this.state
    const newValues = [...values]
    newValues[index] = event.currentTarget.value
    this.setState({ values: newValues })
  }

  public render(): React.ReactNode {
    const { values } = this.state
    const boxes = values.map((value, index) => (
      <Box
        key={String(index)}
        onChange={(event: React.FormEvent<HTMLInputElement>): void =>
          this.handleChange(index, event)
        }
        value={value}
      />
    ))

    // 合計値を算出
    const numbers = values.map((number) => Number(number))
    const sum = numbers.reduce((previousValue, currentValue): number => {
      return previousValue + currentValue
    })

    return (
      <>
        {boxes}
        <p>{sum}</p>
      </>
    )
  }
}

const Page: NextPage = () => {
  return <Boxes />
}

// eslint-disable-next-line import/no-default-export
export default Page
