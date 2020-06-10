import React from "react"
import { NextPage } from "next"
import {
  ListRowProps,
  WindowScroller,
  WindowScrollerChildProps,
  List,
  AutoSizer,
  Size,
} from "react-virtualized"
import { css } from "@emotion/core"
import { colorNames } from "../others/color"

const styleDiv = css({
  width: "50%",
  border: "1px solid silver",
})

// WindowScroller と AutoSizer の併用

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
          rowHeight={40}
          rowRenderer={rowRenderer}
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
