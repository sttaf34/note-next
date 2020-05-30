import React from "react"
import { NextPage } from "next"

// layout.tsx に対して layout.module.css というファイル名にしておく必要がある
import styles from "./layout.module.css"

const Layout: NextPage = (props: React.Props<{}>) => {
  const { children } = props
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contents}>{children}</div>
      </div>
    </>
  )
}

export default Layout
