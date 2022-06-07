import styles from "./button.module.scss"
import { useEffect, useState } from "react"

const Button = ({ colorBack, colorFont, text, type, click }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {}, [open])
  return type === 1 ? (
    <button
      data-open={open}
      onClick={() => {
        open ? setOpen(false) : setOpen(true)
        // click
      }}
      className={styles.primaryButton}
      style={{
        backgroundColor: colorBack ? colorBack : "#F15B5B",
        color: colorFont ? colorFont : "#fff"
      }}
    >
      {text}
    </button>
  ) : (
    <button
      type="submit"
      className={styles.primaryButton}
      style={{
        backgroundColor: colorBack ? colorBack : "#F15B5B",
        color: colorFont ? colorFont : "#fff",
        width: "100%"
      }}
      onClick={click}
    >
      {text}
    </button>
  )
}

export default Button
