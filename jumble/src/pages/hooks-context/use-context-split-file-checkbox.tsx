import React from "react"
import { NextPage } from "next"

import {
  checkboxTitles,
  CheckboxContext,
  CheckContextProvider,
} from "src/modules/use-context-split-file-checkbox/checkboxContext"

interface CheckboxPros {
  title: string
  index: number
}

const Checkbox: React.FC<CheckboxPros> = (props: CheckboxPros) => {
  const { checked, invertChecked } = React.useContext(CheckboxContext)
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

const Ol: React.FC = () => {
  const { checked } = React.useContext(CheckboxContext)
  console.log(checked)

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

// eslint-disable-next-line import/no-default-export
export default Page
