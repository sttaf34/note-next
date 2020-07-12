import React from "react"

import { checkboxCount } from "../others/checkConstants"

const INITIAL_CHECKED = Array<boolean>(checkboxCount).fill(false)

interface Context {
  checked: boolean[]
  invertChecked: (index: number) => void
  restoreChecked: (checked: boolean[]) => void
}

const initialContext: Context = {
  checked: INITIAL_CHECKED,
  invertChecked: (index: number): void => {
    console.log(index)
  },
  restoreChecked: (checked: boolean[]): void => {
    console.log(checked)
  },
}

export const CheckContext = React.createContext(initialContext)

const CheckContextProvider: React.FC = (props: React.Props<unknown>) => {
  const [checked, setChecked] = React.useState(INITIAL_CHECKED)

  const context = {
    checked,
    invertChecked: (index: number): void => {
      if (index < 0 || index >= checkboxCount) {
        return
      }
      const newChecked = { ...checked }
      newChecked[index] = !checked[index]
      setChecked(newChecked)
    },
    restoreChecked: (newChecked: boolean[]): void => {
      setChecked(newChecked)
    },
  }

  const { children } = props
  return (
    <CheckContext.Provider value={context}>{children}</CheckContext.Provider>
  )
}

export default CheckContextProvider
