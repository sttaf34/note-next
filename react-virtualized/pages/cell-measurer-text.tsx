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

const listRowRendererByLength = (
  props: ListRowProps,
  length: number
): React.ReactNode => {
  const { key, index, style, parent } = props

  const children = (childProps: CellMeasurerChildProps): React.ReactNode => {
    const { registerChild } = childProps
    const ref = registerChild as
      | ((instance: HTMLDivElement | null) => void)
      | undefined

    const text = "あ".repeat(length)
    return (
      <div ref={ref} style={style}>
        <p>{text}</p>
      </div>
    )
  }

  // CellMeasurerCache は行と列のインデックス毎に高さと幅を保持している
  // インデックスに対して表示するものの中身が変わる場合、
  // キャッシュの意味がないが、キャッシュを使わない設定はないっぽい？
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
  // ボタンを押すたびにセルの中身のテキストの文字数がランダムで変わる
  const [lengths, setValue] = React.useState(randomNumbers(50))
  const onClick = (): void => {
    setValue(randomNumbers(50))

    // キャッシュクリアして、高さの再計算、パフォーマンスは大丈夫？
    cache.clearAll()
  }

  const listRowRenderer = (props: ListRowProps): React.ReactNode => {
    const { index } = props
    return listRowRendererByLength(props, lengths[index])
  }

  return (
    <>
      <button type="button" onClick={onClick}>
        セルの高さをランダム切り替え
      </button>
      <hr />
      <List
        deferredMeasurementCache={cache}
        height={700}
        rowCount={lengths.length}
        rowHeight={cache.rowHeight}
        rowRenderer={listRowRenderer}
        width={400}
      />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
