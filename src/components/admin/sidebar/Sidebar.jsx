import styles from "./sidebar.module.scss"
import {
  Overview,
  Tickets,
  Contacts,
  Agents,
  Settings,
  Product
} from "../../SvgImporter"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Index from "../../../pages/Admin/AdminIndex"
import Request from "../../../pages/Admin/AdminRequest"
export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_title}>
        <p>Admin Panel</p>
      </div>
      <div className={styles.sidebar_items}>
        <Link to={"/admin"}>
          <div
            className={
              window.location.pathname == `/admin`
                ? `${styles.sidebar_items_overwiew} &&
                    ${styles.activePage}
                  `
                : styles.sidebar_items_overwiew
            }
          >
            <Overview />
            Обзор
          </div>
        </Link>
        <Link to={"/AdminRequest"}>
          <div
            className={
              window.location.pathname == `/AdminRequest`
                ? `${styles.sidebar_items_request} &&
                    ${styles.activePage}
                  `
                : styles.sidebar_items_request
            }
          >
            <Tickets />
            Заявки
          </div>
        </Link>
        <Link to={"/AdminContacts"}>
          <div
            className={
              window.location.pathname == `/AdminContacts`
                ? `${styles.sidebar_items_contacts} &&
                    ${styles.activePage}
                  `
                : styles.sidebar_items_contacts
            }
          >
            <Contacts />
            Контакты
          </div>
        </Link>
        <Link to={"/AdminAgents"}>
          <div
            className={
              window.location.pathname == `/AdminAgents`
                ? `${styles.sidebar_items_agents} &&
                ${styles.activePage}
              `
                : styles.sidebar_items_agents
            }
          >
            <Agents />
            Агенты
          </div>
        </Link>
        <Link to={"/AdminProduct"}>
          <div
            className={
              window.location.pathname == `/AdminProduct`
                ? `${styles.sidebar_items_product} &&
                ${styles.activePage}
              `
                : styles.sidebar_items_product
            }
          >
            <Product />
            Товары
          </div>
        </Link>
        <Link to={"/AdminSettings"}>
          <div className={styles.sidebar_items_separator}></div>
          <div
            className={
              window.location.pathname == `/AdminSettings`
                ? `${styles.sidebar_items_agents} &&
                ${styles.activePage}
              `
                : styles.sidebar_items_settings
            }
          >
            <Settings />
            Настройки
          </div>
        </Link>
      </div>
    </div>
  )
}
export default SideBar
