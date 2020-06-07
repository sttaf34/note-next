import React from "react"
import { NextPage } from "next"
import {
  List,
  ListRowProps,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized"
import { CellMeasurerChildProps } from "react-virtualized/dist/es/CellMeasurer"
import { colorNames } from "../others/color"

const cache = new CellMeasurerCache({
  defaultHeight: 50,
  fixedWidth: true,
})

const listRowRenderer = (props: ListRowProps): React.ReactNode => {
  const { key, index, style, parent } = props

  const children = (childProps: CellMeasurerChildProps): React.ReactNode => {
    const { measure, registerChild } = childProps
    // ここちゃんと理解してない
    // そのままだと型が合わないので、キャストして合わせてるだけ
    const ref = registerChild as
      | ((instance: HTMLDivElement | null) => void)
      | undefined

    const imageHeight = (index + 1) * 10
    const src = `https://dummyimage.com/120x${imageHeight}/222/fff`
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
  const names = colorNames.slice(0, 30)

  return (
    <>
      <p>List</p>
      <hr />
      <List
        deferredMeasurementCache={cache}
        height={400}
        rowCount={names.length}
        rowHeight={cache.rowHeight}
        rowRenderer={listRowRenderer}
        width={300}
      />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
