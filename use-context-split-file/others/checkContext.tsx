import React from "react"

import { checkboxCount } from "./checkConstants"

// pages/check.tsx は複数個のチェックボックスを持っている
// この others/chkeckContext.tsx は
// そのチェックボックスの状態を管理している存在

const INITIAL_CHECKED = Array<boolean>(checkboxCount).fill(false)

interface Context {
  checked: boolean[]
  setChecked: (index: number, value: boolean) => void
}

const initialContext: Context = {
  checked: INITIAL_CHECKED,
  setChecked: (index: number, value: boolean): void => {
    console.log(index, value)
  },
}

export const CheckContext = React.createContext(initialContext)

const CheckContextProvider: React.FC = (props: React.Props<{}>) => {
  const [currentChecked, setNewChecked] = React.useState(INITIAL_CHECKED)

  const context = {
    checked: currentChecked,
    setChecked: (index: number, value: boolean): void => {
      if (index < 0 || index >= checkboxCount) {
        return
      }
      const newChecked = currentChecked.slice()
      newChecked[index] = value
      setNewChecked(newChecked)
    },
  }

  const { children } = props
  return (
    <CheckContext.Provider value={context}>{children}</CheckContext.Provider>
  )
}

export default CheckContextProvider
