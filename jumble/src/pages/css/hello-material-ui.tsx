import React from "react"
import { NextPage } from "next"
import { Button, Badge, Checkbox } from "@material-ui/core"

const Page: NextPage = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        ボタン
      </Button>
      <hr />
      <Badge badgeContent={4} color="primary">
        <span>あ</span>
      </Badge>
      <hr />
      <Checkbox color="primary" />
      <Checkbox checked color="primary" />
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Page
