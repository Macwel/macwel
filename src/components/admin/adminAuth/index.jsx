import styles from './auth.module.scss'
import Button from '../../Button/Button'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Введите пароль'),
  email: Yup.string().email('Не корректный Емэйл').required('Введите Емэйл'),
});

export const Auth = () => {
  if(window.localStorage.getItem('token')){
    window.location.href = '/admin'
  }
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
            validationSchema={SignupSchema}
            initialValues={{
              email: '',
              password: '',
              error: '',
            }}
            onSubmit={(values, { setErrors, resetForm: any }) => {
              const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer fefege...',
              }
              axios
                .post(
                  `/admin/sign-in`,
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
                      window.location.href = '/admin'
                    )
                  }
                })
                .catch((err) => {
                  setErrors({error: err.response.data.message})
                  console.log('tfs')
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
                {errors.error && (
                    <p className={styles.promoTitle}>{errors.error}</p>
                  )}
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
