import React from "react"
import { NextPage } from "next"
import {
  ListRowProps,
  WindowScroller,
  WindowScrollerChildProps,
  List,
} from "react-virtualized"
import { colorNames } from "../others/color"

const Page: NextPage = () => {
  const names = colorNames

  const rowRenderer = (props: ListRowProps): React.ReactNode => {
    const { key, index, style } = props
    return (
      <div key={key} style={style}>
        {names[index]}
      </div>
    )
  }

  const rowCount = 10
  const rowHeight = 40
  const totalHeight = rowCount * rowHeight
  const width = 300

  const windowScrollerChildren = (
    props: WindowScrollerChildProps
  ): React.ReactNode => {
    const { height, isScrolling, onChildScroll, scrollTop } = props
    return (
      <List
        autoHeight
        height={height}
        isScrolling={isScrolling}
        onScroll={onChildScroll}
        overscanRowCount={3}
        rowCount={rowCount}
        rowHeight={rowHeight}
        rowRenderer={rowRenderer}
        scrollTop={scrollTop}
        width={width}
      />
    )
  }

  // Warning: Expected server HTML to contain a matching <div> in <div>.
  // https://github.com/bvaughn/react-virtualized/issues/891
  // 解決できてない
  // ちなみに、画面内にすべてが収まるセル数の場合は何も言われない
  return (
    <>
      <p>WindowScroller</p>
      <hr />
      <WindowScroller serverWidth={width} serverHeight={totalHeight}>
        {windowScrollerChildren}
      </WindowScroller>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
