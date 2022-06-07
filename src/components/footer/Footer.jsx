import styles from "./footer.module.scss"

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerWrapper_content}>
        <div className={styles.footerWrapper_ft}></div>
        <div className={styles.footerWrapper_content_links}>
          <div className={styles.footerWrapper_content_links_link}>
            <a href="/rightt">Политика конфиденциальности</a>
          </div>
          <div className={styles.footerWrapper_content_links_link}>
            <a href="/cookies">Использование cookies</a>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper_separator}></div>
      <div className={styles.footerWrapper_content_terms}>
        <p></p>
        <div className={styles.footerWrapper_content_terms_created}>
          <p>
            Copyright © 2022 Carobar.
            <span>
              <a href="/rightt"> All rights reserved.</a>
            </span>{" "}
            and
            <span>
              <a href="/cookies"> cookies</a>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
