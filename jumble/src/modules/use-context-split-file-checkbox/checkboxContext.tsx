import React from "react"

export const checkboxTitles = ["りんご", "オレンジ", "ぶどう"]

const checkboxCount = checkboxTitles.length

const INITIAL_CHECKED = Array<boolean>(checkboxCount).fill(false)

interface Context {
  checked: boolean[]
  invertChecked: (index: number) => void
}

const initialContext: Context = {
  checked: INITIAL_CHECKED,
  invertChecked: (index: number): void => {
    console.log(index)
  },
}

export const CheckboxContext = React.createContext(initialContext)

export const CheckContextProvider: React.FC = (props: React.Props<unknown>) => {
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
  }

  const { children } = props
  return (
    <CheckboxContext.Provider value={context}>
      {children}
    </CheckboxContext.Provider>
  )
}
