import React from "react"
import { NextPage } from "next"
import {
  List,
  ListRowProps,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized"
import { CellMeasurerChildProps } from "react-virtualized/dist/es/CellMeasurer"

const randomNumbers = (n: number): number[] => {
  const numbers = Array.from({ length: n }, (_, index) => index + 1)
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
  }
  return numbers.map((number) => number * 15)
}

const cache = new CellMeasurerCache({
  defaultHeight: 50,
  fixedWidth: true,
})

const listRowRendererByHeight = (
  props: ListRowProps,
  height: number
): React.ReactNode => {
  const { key, index, style, parent } = props

  const children = (childProps: CellMeasurerChildProps): React.ReactNode => {
    const { measure, registerChild } = childProps
    const ref = registerChild as
      | ((instance: HTMLDivElement | null) => void)
      | undefined

    // measure でセルの高さを再計算するような仕組みになってる
    const src = `https://dummyimage.com/120x${height}/222/fff`
    return (
      <div ref={ref} style={style}>
        <img onLoad={measure} src={src} alt="ダミー画像" />
      </div>
    )
  }

  return (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      parent={parent}
      rowIndex={index}
    >
      {children}
    </CellMeasurer>
  )
}

const Page: NextPage = () => {
  // ボタンを押すたびにセルの中身の高さがランダムで変わるようにしている
  const [heights, setValue] = React.useState(randomNumbers(15))
  const onClick = (): void => {
    setValue(randomNumbers(15))
  }

  const listRowRenderer = (props: ListRowProps): React.ReactNode => {
    const { index } = props
    return listRowRendererByHeight(props, heights[index])
  }

  return (
    <>
      <button type="button" onClick={onClick}>
        セルの高さをランダム切り替え
      </button>
      <hr />
      <List
        height={400}
        rowCount={heights.length}
        rowHeight={cache.rowHeight}
        rowRenderer={listRowRenderer}
        width={300}
      />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
