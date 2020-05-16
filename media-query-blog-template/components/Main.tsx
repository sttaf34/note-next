import React from "react"

import styles from "./Main.module.scss"

export const Main: React.FC = (props: React.Props<{}>) => {
  const { children } = props
  return (
    <main className={styles.main}>
      <div>{children}</div>
    </main>
  )
}

export default Main
