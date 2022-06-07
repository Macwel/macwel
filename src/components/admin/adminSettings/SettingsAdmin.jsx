import styles from "./settingsAdmin.module.scss"
import { SideBar } from "../sidebar/Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"

import { useEffect, useState } from "react"
import axios from "axios"
export const Settings = () => {
  const [reqs, setReqs] = useState([])
  const [token, setToken] = useState(null)
  const [data, setData] = useState([])
  const Arr = [
    {
      name: "love"
    },
    {
      name: "you"
    }
  ]
  useEffect(() => {
    setData(Arr)
  }, [])
  const hundleClickRemove = () => {
    const Arrs = [
      {
        name: "love"
      }
    ]
    setData(Arrs)
  }

  // useEffect(() => {
  //   return setToken(window.localStorage.getItem('token'))
  // }, [])
  // useEffect(() => {
  //   // !window.localStorage.getItem('token') && router.push('/admin/auth')
  // }, [])
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
  // useEffect(() => {
  //   axios
  //     .post(
  //       `http://api.vizet.macwel.live/admin/getSettings`,
  //       {},
  //       {
  //         headers,
  //       }
  //     )
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setReqs(res.data.requests)
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [token])
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_header}>
          <div className={styles.wrapper_container_header_title}>
            <p>Контакты</p>
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
                <p>Все контакты</p>
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_headerBlock_sort
                }
              >
                <p>Sort</p>
              </div>
            </div>
            <div className={styles.table}>
              <div className={styles.table_content}>
                {data.map((key) => (
                  <div className={styles.table_content_blockVisible}>
                    <div className={styles.table_content_blockVisible_info}>
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      <p>Иванов Дмитрий Ильич</p>
                    </div>
                    <div
                      className={`${styles.table_content_blockVisible_info} ${styles.table_content_blockVisible_active}`}
                    >
                      <p
                        className={
                          styles.table_content_blockVisible_active_text
                        }
                      >
                        lorem ipsum dolor sit amet, consectlorem ipsum dolor sit
                        amet, consectlorem ipsum dolor sit amet, consectlorem
                        ipsum dolor sit amet, consectlorem ipsum dolor sit amet,
                        consectlorem ipsum dolor sit amet, consectlorem ipsum
                        dolor sit amet, consectlorem ipsum dolor sit amet,
                        consectlorem ipsum dolor sit amet, consect
                      </p>
                      <div
                        className={
                          styles.table_content_blockVisible_active_func
                        }
                      >
                        {/* <div
                        className={
                          styles.table_content_blockVisible_active_func_roll
                        }
                      >
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        <p>Мастер</p>
                      </div> */}
                        <div
                          className={
                            styles.table_content_blockVisible_active_func_delete
                          }
                        >
                          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                          <p onClick={hundleClickRemove}>Удалить</p>
                        </div>
                      </div>
                    </div>
                    {/* <Button
                    click={() => {
                      console.log(1)
                    }}
                    type={1}
                    text="Полная информация"
                  ></Button> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Settings
