import styles from "./requestAdmin.module.scss"
import { SideBar } from "../sidebar/Sidebar"
import Button from "../../Button/Button"
import { useEffect, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"
import "dayjs/locale/ru"

export const Request = () => {
  const [reqs, setReqs] = useState([])

  const token = window.localStorage.getItem("token")

  if (!token) {
    window.location.href = "/admin/auth"
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }

  function getReq() {
    axios
      .post(
        `admin/requests`,
        {},
        {
          headers
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setReqs(res.data.requests)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const denyReqById = (id) => {
    axios
      .post(
        `/admin/deleteReq`,
        {
          id
        },
        {
          headers
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setReqs(res.data.req)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const acceptReqById = (id) => {
    axios
      .post(
        `/admin/acceptReq`,
        {
          id
        },
        {
          headers
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setReqs(res.data.req)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getReq()
  }, [])

  const handleClickDeny = (id, e) => {
    denyReqById(id)
  }

  const handleClickAccept = (id, e) => {
    acceptReqById(id)
  }
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_header}>
          <div className={styles.wrapper_container_header_title}>
            <p>Заявки</p>
          </div>
          <div className={styles.wrapper_container_header_user}>
            <div className={styles.wrapper_container_header_user_nameUser}>
              <p>Admin</p>
            </div>
            <div
              className={styles.wrapper_container_header_user_iconUser}
            ></div>
          </div>
        </div>
        <div className={styles.wrapper_container_tableTop}>
          <div className={styles.wrapper_container_tableTop_block}>
            <div
              className={styles.wrapper_container_tableTop_block_headerBlock}
            >
              <div
                className={
                  styles.wrapper_container_tableTop_block_headerBlock_text
                }
              >
                <p>Все заявки</p>
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_headerBlock_sort
                }
              >
                <p>Sort</p>
              </div>
            </div>
            <ul className={styles.table}>
              <li className={styles.table_header}>
                <div className={`${styles.col} ${styles.col1}`}>Детали</div>
                <div className={`${styles.col} ${styles.col2}`}>ФИО</div>
                <div className={`${styles.col} ${styles.col3}`}>Дата</div>
                <div className={`${styles.col} ${styles.col4}`}>Телефон</div>
                <div
                  className={`${styles.col} ${styles.col5} ${styles.col6}`}
                ></div>
              </li>
              {reqs.map((el) => (
                <li key={el.id} className={styles.table_row}>
                  <div className={`${styles.col} ${styles.col1}`}>
                    {el.desc}
                  </div>
                  <div className={`${styles.col} ${styles.col2}`}>
                    {el.fullName}
                  </div>
                  <div className={`${styles.col} ${styles.col3}`}>
                    {dayjs(el.createdAt)
                      .locale("ru")
                      .format("HH:mm, D MMMM YYYY")}
                  </div>
                  <div className={`${styles.col} ${styles.col4}`}>
                    {el.phone}
                  </div>
                  <div className={`${styles.col} ${styles.col5}`}>
                    {el.status === "0" ? (
                      <>
                        <Button
                          type="2"
                          click={handleClickAccept.bind(this, el.id)}
                          text="Одобрить"
                        />
                        <Button
                          type="2"
                          click={handleClickDeny.bind(this, el.id)}
                          text="Отклонить"
                        />
                      </>
                    ) : el.status === "1" ? (
                      <p>Одобренно</p>
                    ) : (
                      <p>Отклонено</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Request
