import React from "react"
import { NextPage } from "next"

import { checkboxTitles } from "../others/checkConstants"
import CheckContextProvider, { CheckContext } from "../others/checkContext"

interface CheckboxPros {
  title: string
  index: number
}

const Checkbox: React.FC<CheckboxPros> = (props: CheckboxPros) => {
  const context = React.useContext(CheckContext)
  const { checked, setChecked } = context

  const { title, index } = props
  const currentChecked = checked[index]

  return (
    <>
      <input
        type="checkbox"
        onClick={(): void => {
          setChecked(index, currentChecked)
        }}
      />
      {title}
    </>
  )
}

const Ol: React.FC = () => {
  const lis = checkboxTitles.map((title, index) => {
    return (
      <li key={String(index)}>
        <Checkbox title={title} index={index} />
      </li>
    )
  })

  return (
    <>
      <ol>{lis}</ol>
    </>
  )
}

const Page: NextPage = () => {
  return (
    <CheckContextProvider>
      <Ol />
    </CheckContextProvider>
  )
}

export default Page
