import styles from './adminProduct.module.scss'
import { SideBar } from '../sidebar/Sidebar'
import Button from '../../Button/Button'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { Formik, Field, Form } from 'formik'
import { Navigate, Route,  } from 'react-router-dom';


import { useEffect, useState } from 'react'
import axios from 'axios'
export const Product = () => {
  const [token, setToken] = useState(null)
  const Products = [{
    name: 'Мотор',
    model:'km234Turbo',
    count: '14'
  },{
    name: 'Хуй',
    model:'Авто',
    count: '777'
  },]
  // useEffect (() =>{
  //   setReqs(reqs)
  // },[])
  const add = () => {
    setProd([{
    name: 'Мотор',
    model:'km234Turbo',
    count: '14'
  },{
    name: 'Хуй',
    model:'Авто',
    count: '777'
  },
      {name: '', model: '', count: ''}
    ])
  }
  
  
  const [prod, setProd] = useState(Products)

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
        `http://api.vizet.macwel.live/admin/getAgents`,
        {},
        {
          headers,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          // setReqs(res.data.requests)
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
            <p>Товары</p>
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
                <p>Список товаров</p>
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
                <div className={`${styles.col} ${styles.col1}`}>Товар</div>
                <div className={`${styles.col} ${styles.col3}`}>Стоимость</div>
                <div className={`${styles.col} ${styles.col4}`}>Кол-во на складе</div>
                <div
                  className={`${styles.col} ${styles.col5} ${styles.col6}`}
                ></div>
              </li>
              {prod.map((object) => (
            <ul className={styles.table}>
                 <li className={styles.table_header}>
                  <div className={`${styles.col} ${styles.col1}`}>{object.name}</div>
                  <div className={`${styles.col} ${styles.col3}`}>{object.model}</div>
                  <div className={`${styles.col} ${styles.col4}`}>{object.count}</div>
                  <div
                  className={`${styles.col} ${styles.col5} ${styles.col6}`}
                ></div>
                  </li>
                  </ul>
              ))}
            </ul>
        <div className={styles.interface}>
            <div className={styles.interface_container}>
            <div className={styles.interface_container_button}>
            <Popup trigger={
              <button>Добавить товар</button>
            } position="right center"><div className={prod.upwrap}>
              <Formik
            initialValues={{
              name: '',
              model: '',
              count: '',
            }}
            onSubmit={(values, { resetForm: any }) => {
              Products.push({
                name: values.name, 
                model: values.model, 
                count: values.count, 
              })
             setProd([{
                name: values.name, 
                model: values.model, 
                count: values.count, 
              }])
            }}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ values, errors }) => (
              <Form>
                <div className={styles.wrapper_container_authForm_emailText}>
                  <p>Название</p>
                </div>
                <div className={styles.wrapper_container_authForm_inputEmail}>
                  <Field
                    name="name"
                    placheholder="Введите название"
                    type="text"
                  />
                  {errors.name && (
                    <p className={styles.promoTitle}>{errors.name}</p>
                  )}
                </div>
                <div className={styles.wrapper_container_authForm_passwordText}>
                  <p>Модель</p>
                </div>
                <div
                  className={styles.wrapper_container_authForm_inputPassword}
                >
                  <Field
                    name="model"
                    placheholder="Введите модель"
                    type="text"
                  />
                  <div className={styles.wrapper_container_authForm_passwordText}>
                  <p>Количество</p>
                </div>
                </div>
                <div
                  className={styles.wrapper_container_authForm_inputPassword}
                >
                  <Field
                    name="count"
                    placheholder="Введите кол-во"
                    type="text"
                  />
                  {errors.model && (
                    <p className={styles.promoTitle}>{errors.model}</p>
                  )}
                </div>
                <Button style={{paddingTop:'10px'}}type="button" text="Добавить" />
              </Form>
            )}
          ></Formik>
            </div></Popup>
            </div>
        </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Product

{
  /* <div className={styles.wrapper_container_tableTop_block_table_top}>
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
                  styles.wrapper_container_tableTop_block_table_top_three
                }
              >
                Номер телефона
              </div>
            </div>
            {reqs.length !== 0 ? (
              reqs.map((el) => (
                <div className={styles.wrapper_container_tableTop_block_ticket}>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_ticket_one
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_one_name
                      }
                    >
                      <p>{el.desc}</p>
                    </div>
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_one_desc
                      }
                    >
                      <p>{el.createdAt}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_ticket_two
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_two_name
                      }
                    >
                      <p>{el.fullName}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_ticket_three
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_three_name
                      }
                    >
                      <p>{el.createdAt}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_ticket_three
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_three_name
                      }
                    >
                      <p>{el.phone}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Агентов нету</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} */
}