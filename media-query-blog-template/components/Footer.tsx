import React from "react"

import styles from "./Footer.module.scss"

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>&copy;</p>
      </div>
    </footer>
  )
}

export default Footer
