import React from "react"
import { NextPage } from "next"
import {
  ListRowProps,
  WindowScroller,
  WindowScrollerChildProps,
  List,
  AutoSizer,
  Size,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized"
import { CellMeasurerChildProps } from "react-virtualized/dist/es/CellMeasurer"
import { css } from "@emotion/core"
import { colorNames } from "../others/color"

const styleDiv = css({
  width: "50%",
  border: "1px solid silver",
})

// WindowScroller と AutoSizer とCellMeasurer の併用

const cache = new CellMeasurerCache({
  defaultHeight: 50,
  fixedWidth: true,
})

const listRowRenderer = (props: ListRowProps): React.ReactNode => {
  const { key, index, style, parent } = props

  const children = (childProps: CellMeasurerChildProps): React.ReactNode => {
    const { measure, registerChild } = childProps
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

  const windowScrollerChildren = (
    props: WindowScrollerChildProps
  ): React.ReactNode => {
    const { height, isScrolling, onChildScroll, scrollTop } = props

    const autoSizerChildren = (childrenProps: Size): React.ReactNode => {
      const { width } = childrenProps
      return (
        <List
          autoHeight
          height={height}
          isScrolling={isScrolling}
          onScroll={onChildScroll}
          overscanRowCount={3}
          rowCount={names.length}
          rowHeight={cache.rowHeight}
          rowRenderer={listRowRenderer}
          scrollTop={scrollTop}
          width={width}
        />
      )
    }
    return <AutoSizer disableHeight>{autoSizerChildren}</AutoSizer>
  }

  return (
    <>
      <p>WindowScroller</p>
      <hr />
      <div css={styleDiv}>
        <WindowScroller>{windowScrollerChildren}</WindowScroller>
      </div>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
