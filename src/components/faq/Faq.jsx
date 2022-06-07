import styles from './faq.module.scss'

export const Faq= () => {
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.faqWrapper_content}>
        <div className={styles.faqWrapper_content_textCenter}>
          <div className={styles.faqWrapper_content_textCenter_header}>
            <p>— ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
          </div>
          <div className={styles.faqWrapper_content_textCenter_title}>
            <p>Часто задаваемые вопросы</p>
          </div>
          <div className={styles.faqWrapper_content_textCenter_fullTitle}>
            <p>
              Мы предлагаем простые и прозрачные условия аренды автомобиля на
              любой срок. Ознакомьтесь с приведенной ниже информацией, и если у
              вас возникнут какие-либо вопросы, мы будем рады ответить на них.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.faqWrapper_blockQuestions}>
        <div className={styles.faqWrapper_blockQuestions_ask}>
          <div className={styles.faqWrapper_blockQuestions_ask_block}>
            <div className={styles.faqWrapper_blockQuestions_ask_block_title}>
              <p>С кем связаться в случае дополнительных вопросов?</p>
            </div>
            <div
              className={styles.faqWrapper_blockQuestions_ask_block_description}
            >
              <p>
                Свяжитесь с директором, телефон которого указан вверху станицы.
              </p>
            </div>
          </div>
          <div className={styles.faqWrapper_blockQuestions_ask_block}>
            <div className={styles.faqWrapper_blockQuestions_ask_block_title}>
              <p>Какие сроки ремонта в вашем СТО?</p>
            </div>
            <div
              className={styles.faqWrapper_blockQuestions_ask_block_description}
            >
              <p>
                Все зависит от сложности работы и наличие деталей. Подробнее о
                сроках всегда можно узнать у вашего мастера.
              </p>
            </div>
          </div>
          <div className={styles.faqWrapper_blockQuestions_ask_block}>
            <div className={styles.faqWrapper_blockQuestions_ask_block_title}>
              <p>
                Возможны ли какие-то дополнительные затраты не обговоренные
                перед ремонтом?
              </p>
            </div>
            <div
              className={styles.faqWrapper_blockQuestions_ask_block_description}
            >
              <p>
                Дополнительные затраты никогда не требуются. Мы всегда говорим
                вам полную стоймость ремонта.
              </p>
            </div>
          </div>
          <div className={styles.faqWrapper_blockQuestions_ask_block}>
            <div className={styles.faqWrapper_blockQuestions_ask_block_title}>
              <p>
                В случае если в машине есть дополнительные проблемы, вы сообщите
                мне об этом?
              </p>
            </div>
            <div
              className={styles.faqWrapper_blockQuestions_ask_block_description}
            >
              <p>
                Конечно, наша задача рассказать вам о проблемах с вашей машиной,
                и решить, будем ли мы ремонтировать дополнительные элементы.
              </p>
            </div>
          </div>
          <div className={styles.faqWrapper_blockQuestions_ask_block}>
            <div className={styles.faqWrapper_blockQuestions_ask_block_title}>
              <p>Где мне получить номер мастера?</p>
            </div>
            <div
              className={styles.faqWrapper_blockQuestions_ask_block_description}
            >
              <p>
                Мастер свяжется с вами, когда вы оставите заявку. Запишите номер
                в телефонную книжку.
              </p>
            </div>
          </div>
          <div className={styles.faqWrapper_blockQuestions_ask_block}>
            <div className={styles.faqWrapper_blockQuestions_ask_block_title}>
              <p>
                У меня нет возможности довезти машину самостоятельно, можете ли
                вы ее эукуировать?
              </p>
            </div>
            <div
              className={styles.faqWrapper_blockQuestions_ask_block_description}
            >
              <p>
                К сожелению нет, чтобы доставить вашу машину в СТО, вам
                потребутеся прибегнуть к помощи 3-их лиц.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Faq
