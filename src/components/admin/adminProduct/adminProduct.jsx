import styles from "./adminProduct.module.scss"
import { SideBar } from "../sidebar/Sidebar"
import Button from "../../Button/Button"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import { Formik, Field, Form } from "formik"

import { useEffect, useState } from "react"
import axios from "axios"

import * as Yup from "yup"

const AddGoodSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Название должно быть не менее 2 символов!")
    .max(256, "Слишком длинное название!")
    .required("Введите название"),
  type: Yup.string()
    .min(2, "Тип должен быть не менее 2 символов!")
    .max(50, "Слишком длинный тип!")
    .required("Введите тип"),
  price: Yup.string()
    .min(2, "Стоимость должна быть не менее 2 символов!")
    .max(50, "Слишком большая сумма!")
    .required("Введите сумму"),
  amount: Yup.string()
    .min(2, "Кол-во должно быть не менее 2 символов!")
    .max(50, "Слишком большое кол-во!")
    .required("Введите кол-во")
})

export const Product = () => {
  const [prod, setProd] = useState([])
  const token = window.localStorage.getItem("token")

  if (!token) {
    window.location.href = "/admin/auth"
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
  const addGood = (data) => {
    console.log(data)
    axios
      .post(`/admin/addGood`, data, {
        headers
      })
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          setProd(res.data.goods)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deleteGood = (id) => {
    axios
      .post(
        `/admin/delGood`,
        { id },
        {
          headers
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setProd(res.data.goods)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    axios
      .post(
        `/admin/getGoods`,
        {},
        {
          headers
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.goods)
          setProd(res.data.goods)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
                <div className={`${styles.col} ${styles.col3}`}>Тип</div>
                <div className={`${styles.col} ${styles.col4}`}>
                  Кол-во на складе
                </div>
                <div
                  className={`${styles.col} ${styles.col5} ${styles.col6}`}
                ></div>
              </li>
              {prod.map((el) => (
                <ul key={el.id} className={styles.table}>
                  <li className={styles.table_header}>
                    <div className={`${styles.col} ${styles.col1}`}>
                      {el.name}
                    </div>
                    <div className={`${styles.col} ${styles.col4}`}>
                      {el.price} руб.
                    </div>
                    <div className={`${styles.col} ${styles.col3}`}>
                      {el.type}
                    </div>
                    <div className={`${styles.col} ${styles.col3}`}>
                      {el.amount} шт.
                    </div>
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
                  <Popup
                    trigger={<button>Добавить товар</button>}
                    position="right center"
                  >
                    <div className={prod.upwrap}>
                      <Formik
                        validationSchema={AddGoodSchema}
                        initialValues={{
                          name: "",
                          type: "",
                          amount: "",
                          price: ""
                        }}
                        onSubmit={(values, { resetForm: any }) => {
                          addGood(values)
                        }}
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        render={({ values, errors }) => (
                          <Form>
                            <div
                              className={
                                styles.wrapper_container_authForm_inputEmail
                              }
                            >
                              <p>Название</p>
                              <Field
                                name="name"
                                placeholder="Введите название"
                                type="text"
                              />
                              {errors.name && (
                                <p className={styles.promoTitle}>
                                  {errors.name}
                                </p>
                              )}
                            </div>
                            <div
                              className={
                                styles.wrapper_container_authForm_inputPassword
                              }
                            >
                              <p>Цена</p>
                              <Field
                                name="price"
                                placeholder="Введите стоимость"
                                type="text"
                              />
                              {errors.price && (
                                <p className={styles.promoTitle}>
                                  {errors.price}
                                </p>
                              )}
                              <div
                                className={
                                  styles.wrapper_container_authForm_passwordText
                                }
                              ></div>
                            </div>
                            <div
                              className={
                                styles.wrapper_container_authForm_inputPassword
                              }
                            >
                              <p>Тип товара</p>
                              <Field
                                name="type"
                                placeholder="Введите тип товара"
                                type="text"
                              />
                              {errors.type && (
                                <p className={styles.promoTitle}>
                                  {errors.type}
                                </p>
                              )}
                            </div>
                            <div
                              className={
                                styles.wrapper_container_authForm_inputPassword
                              }
                            >
                              <p>Кол-во</p>
                              <Field
                                name="amount"
                                placeholder="Введите кол-во"
                                type="text"
                              />
                              {errors.amount && (
                                <p className={styles.promoTitle}>
                                  {errors.amount}
                                </p>
                              )}
                            </div>
                            <Button
                              style={{ paddingTop: "10px" }}
                              type="button"
                              text="Добавить"
                            />
                          </Form>
                        )}
                      ></Formik>
                    </div>
                  </Popup>
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
