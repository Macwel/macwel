import styles from './auth.module.scss'
import Button from '../../Button/Button'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import { Navigate, Route,  } from 'react-router-dom';
export const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_title}>
          <p>Admin Panel</p>
        </div>
        <div className={styles.wrapper_container_header}>
          <p>Авторизация</p>
          <p>Введите логин и пароль</p>
        </div>
        <div className={styles.wrapper_container_authForm}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { resetForm: any }) => {
              const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer fefege...',
              }
              axios
                .post(
                  `http://api.vizet.macwel.live/admin/sign-in`,
                  {
                    email: values.email,
                    password: values.password,
                  },
                  {
                    headers: headers,
                  }
                )
                .then((res) => {
                  if (res.status === 200) {
                    window.localStorage.setItem('token', res.data.token)
                    return (
                      <Navigate to='/admin'/>
                    )
                    // router.history.push("/admin");
                  }
                })
                .catch((err) => {
                  console.log(err)
                })
            }}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ values, errors }) => (
              <Form>
                <div className={styles.wrapper_container_authForm_emailText}>
                  <p>EMAIL</p>
                </div>
                <div className={styles.wrapper_container_authForm_inputEmail}>
                  <Field
                    name="email"
                    autoComplete="email"
                    placheholder="Enter email"
                    type="email"
                  />
                  {errors.email && (
                    <p className={styles.promoTitle}>{errors.email}</p>
                  )}
                </div>
                <div className={styles.wrapper_container_authForm_passwordText}>
                  <p>PASSWORD</p>
                </div>
                <div
                  className={styles.wrapper_container_authForm_inputPassword}
                >
                  <Field
                    name="password"
                    autoComplete="password"
                    placheholder="Enter password"
                    type="password"
                  />
                  {errors.password && (
                    <p className={styles.promoTitle}>{errors.password}</p>
                  )}
                </div>
                <Button text="Войти" />
              </Form>
            )}
          ></Formik>
        </div>
      </div>
    </div>
  )
}
export default Auth
