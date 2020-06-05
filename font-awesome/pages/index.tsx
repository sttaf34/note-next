import React from "react"
import { NextPage } from "next"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faFilter,
  faPassport,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons"

// CSS は _app.tsx で読み込んでいる
// https://fontawesome.com/icons
// https://www.npmjs.com/package/@fortawesome/react-fontawesome

const Page: NextPage = () => {
  return (
    <>
      <FontAwesomeIcon icon={faSearch} size="xs" color="#FF0000" />
      <br />
      <FontAwesomeIcon icon={faFilter} color="#FF0000" />
      <br />
      <FontAwesomeIcon icon={faPassport} size="2x" color="#333333" />
      <br />
      <FontAwesomeIcon icon={faBalanceScale} size="3x" color="#333333" />
    </>
  )
}

export default Page
