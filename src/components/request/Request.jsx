import styles from './request.module.scss'
import Button from '../Button/Button'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import { useState } from 'react'
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(8, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Введите Ф.И.О.'),
  telephone: Yup.string()
    .min(8, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Введите номер телефона'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Введите сообщение'),
  email: Yup.string().email('Не корректный Емэйл').required('Введите Емэйл'),
});

export const Request = () => {
  const [postStatus, setPostStatus] = useState(false)

  return (
    <div id="request" className={styles.request}>
      <div className={styles.test}>
        
      </div>
      <div className={styles.request_container}>
        <div className={styles.request_container_text}>
          <p>—ОТПРАВИТЬ ЗАПРОС—</p>
          <p>Нуждаетесь в ремонте автомобиля?</p>
          <p>Заполните форму ниже, и мы свяжемся с вами как можно скорее!</p>
        </div>
        {postStatus ? (<h1 style={{color: 'white', textAlign: 'center'}}>Ваша заявка успешно отправленна</h1>) : (<Formik
            validationSchema={SignupSchema}
            initialValues={{
              email: '',
              message: '',
              telephone: '',
              fullName: '',
              error: '',
            }}
            onSubmit={(values, { setErrors, resetForm: any }) => {
              const headers = {
                'Content-Type': 'application/json',
              }
              axios
                .post(
                  `/sendReq`,
                  {
                    fullName: values.fullName,
                    desc: values.message,
                    telephone: values.telephone,
                    email: values.email,
                  },
                  {
                    headers: headers,
                  }
                )
                .then((res) => {
                  console.log(1)
                  console.log(res.data)
                    setPostStatus(true)
                })
                .catch((err) => {
                  console.log(1)
                  setErrors({error: err.response.data.message})
                  console.log('tfs')
                })
              }}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ values, errors }) => (
              <Form className={styles.request_container_form}>
                <div className={styles.request_container_form_input}>
                <Field
                    name="fullName"
                    autoComplete="fullName"
                    placeholder="Введите ваше Ф.И.О."
                    type="text"
                  />
                  {errors.fullName && (
                    <p className={styles.promoTitle}>{errors.fullName}</p>
                  )}
                </div>
                <div className={styles.request_container_form_input}>
                  <Field
                      name="telephone"
                      autoComplete="telephone"
                      placeholder="Введите ваш номер телефона"
                      type="telephone"
                    />
                    {errors.telephone && (
                      <p className={styles.promoTitle}>{errors.telephone}</p>
                    )}
                </div>
                <div className={styles.request_container_form_input}>
                    <Field
                      name="email"
                      autoComplete="email"
                      placeholder="Введите ваш email"
                      type="email"
                    />
                    {errors.email && (
                      <p className={styles.promoTitle}>{errors.email}</p>
                    )}
                </div>
                <div className={styles.request_container_form_input}>
                    <Field
                      name="message"
                      autoComplete="message"
                      placeholder="Введите ваш message"
                      type="text"
                    />
                    {errors.message && (
                      <p className={styles.promoTitle}>{errors.message}</p>
                    )}
                </div>
                {errors && (
                    <p className={styles.promoTitle}>{errors.error}</p>
                  )}
                <Button text="Войти" />
              </Form>
            )}
          ></Formik>)}
        


        </div>
    </div>
  )
}
export default Request
