import React from "react"
import { NextPage } from "next"
import { ListRowProps, List } from "react-virtualized"
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

  return (
    <>
      <p>List</p>
      <hr />
      <List
        height={300}
        rowCount={names.length}
        rowHeight={40}
        rowRenderer={rowRenderer}
        width={300}
      />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
