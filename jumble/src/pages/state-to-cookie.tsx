import React from "react"
import { NextPage } from "next"
import { setCookie, parseCookies } from "nookies"

const checkboxTitles = ["りんご", "みかん", "バナナ", "ぶどう"]
const checkboxCount = checkboxTitles.length

//
// Context
//

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

const CheckContext = React.createContext(initialContext)

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

//
// Page
//

interface CheckboxPros {
  title: string
  index: number
}

const Checkbox: React.FC<CheckboxPros> = (props: CheckboxPros) => {
  const { checked, invertChecked } = React.useContext(CheckContext)
  const { title, index } = props
  const currentChecked = checked[index]

  return (
    <>
      <input
        type="checkbox"
        onClick={(): void => {
          invertChecked(index)
        }}
        checked={currentChecked}
        readOnly
      />
      {title}
    </>
  )
}

const Ul: React.FC = () => {
  const lis = checkboxTitles.map((title, index) => {
    return (
      <li key={String(index)}>
        <Checkbox title={title} index={index} />
      </li>
    )
  })
  return <ul>{lis}</ul>
}

const PageComponent: React.FC = () => {
  const { checked, restoreChecked } = React.useContext(CheckContext)

  // クッキーに状態を保存
  const onClickA = (): void => {
    try {
      const state = JSON.stringify(checked)
      setCookie(null, "state", state, {})
      console.log(state)
    } catch (error) {
      console.log(error)
    }
  }

  // クッキーから状態を復元
  const onClickB = (): void => {
    const object = parseCookies(null)
    if (object.state == null) {
      return
    }

    try {
      // 型のバリデートをちゃんとやる必要があるが省略してる
      const newChecked: boolean[] = JSON.parse(object.state)
      restoreChecked(newChecked)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Ul />
      <hr />
      <input type="button" value="クッキーに状態を保存" onClick={onClickA} />
      <input type="button" value="クッキーから状態を復元" onClick={onClickB} />
    </>
  )
}

const Page: NextPage = () => {
  return (
    <CheckContextProvider>
      <PageComponent />
    </CheckContextProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
