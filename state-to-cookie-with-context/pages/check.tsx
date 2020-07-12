import React from "react"
import { NextPage } from "next"
import { setCookie, parseCookies } from "nookies"
import { checkboxTitles } from "../others/checkConstants"
import CheckContextProvider, { CheckContext } from "../contexts/checkContext"

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
  console.log(checked)

  // クッキーに状態を保存
  const onClickA = (): void => {
    try {
      const state = JSON.stringify(checked)
      setCookie(null, "state", state, null)
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

export default Page
