import React from "react"

import { MainContext } from "./mainContext"

const Child: React.FC = () => {
  const context = React.useContext(MainContext)
  const { count, increment } = context

  return (
    <>
      <button type="button" onClick={increment}>
        増 by 子
      </button>
      <p>子コンポーネントでの表示 → {count}</p>
    </>
  )
}

export default Child
