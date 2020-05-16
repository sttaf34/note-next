import React from "react"

import styles from "./Header.module.scss"

export const Header: React.FC = () => {
  // className を各タグに付与するのは面倒なので、一番上だけ指定してる
  return (
    <header className={styles.header}>
      <div>
        <h1>サイト名</h1>
      </div>
    </header>
  )
}

export default Header
