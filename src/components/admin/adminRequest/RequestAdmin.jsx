import styles from './requestAdmin.module.scss'
import { SideBar } from '../sidebar/Sidebar'
import Button from '../../Button/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
export const Request = () => {
  const [reqs, setReqs] = useState([])
  const [token, setToken] = useState(null)
  useEffect(() => {
    return setToken(window.localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    // !window.localStorage.getItem('token') && router.push('/admin/auth')
  }, [])
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    axios
      .post(
        `http://api.vizet.macwel.live/admin/requests`,
        {},
        {
          headers,
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
  }, [token])

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
                <li className={styles.table_row}>
                  <div className={`${styles.col} ${styles.col1}`}>
                    {el.desc}
                  </div>
                  <div className={`${styles.col} ${styles.col2}`}>
                    {el.fullName}
                  </div>
                  <div className={`${styles.col} ${styles.col3}`}>
                    {el.createdAt}
                  </div>
                  <div className={`${styles.col} ${styles.col4}`}>
                    {el.phone}
                  </div>
                  <div className={`${styles.col} ${styles.col5}`}>
                    <Button text="Удалить"></Button>
                  </div>
                </li>
              ))}
            </ul>

            {/* <div className={styles.wrapper_container_tableTop_block_table_top}>
              <div
                className={
                  styles.wrapper_container_tableTop_block_table_top_first
                }
              >
                Детали
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_table_top_second
                }
              >
                ФИО
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_table_top_three
                }
              >
                Дата
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_table_top_fourth
                }
              >
                Номер телефона
              </div>
            </div> */}
            {/* <div className={styles.wrapper_container_tableTop_block_all}>
              {reqs.map((el) => (
                <div
                  className={styles.wrapper_container_tableTop_block_all_ticket}
                >
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_all_ticket_one
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_all_ticket_one_name
                      }
                    >
                      <p>{el.desc}</p>
                    </div>
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_all_ticket_one_desc
                      }
                    >
                      <p>{el.createdAt}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_all_ticket_two
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_all_ticket_two_name
                      }
                    >
                      <p>{el.fullName}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_all_ticket_three
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_all_ticket_three_name
                      }
                    >
                      <p>{el.createdAt}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_all_ticket_fourth
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_all_ticket_fourth_phone
                      }
                    >
                      <p>{el.phone}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_all_ticket_delete
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_all_ticket_delete_but
                      }
                    >
                      <Button text="Удалить"></Button>
                    </div>
                  </div>
                </div> */}
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}
export default Request