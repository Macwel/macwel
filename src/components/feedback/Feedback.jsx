import styles from './feedback.module.scss'
import { useState, useEffect } from 'react'
import Client1 from '../../common/img/Client1.jpg'
import {Arrow} from '../SvgImporter'
import Slider from 'react-slick'
import 'animate.css';
import Client2 from '../../common/img/Client2.jpg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Feedback = () => {
  const [w, setW] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setW(window.innerWidth)
    })   
  }, [])

  const banners = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  } 
  return (
    <div id="Feedback" className={styles.feedbackWrapper}>
      <div className={styles.feedbackWrapper_content}>
        <div className={styles.feedbackWrapper_content_text}>
          <div className={styles.feedbackWrapper_content_text_header}>
            <p>— ОБРАТНАЯ СВЯЗЬ</p>
          </div>
          <div className={styles.feedbackWrapper_content_text_title}>
            <p>Отзывы</p>
          </div>
          <div className={styles.feedbackWrapper_content_text_fulltitle}>
            <p>
              Ежедневно десятки людей обращаются к нам, для того чтобы их
              автомобиль не имел никаких проблем
            </p>
          </div>
        </div>
        <Slider {...banners}>
        <div className={styles.feedbackWrapper_content_info} style={{ display: "flex", alignItems: "center" }}>
          <img
            className={styles.feedbackWrapper_content_info_img}
            src={Client1}
            alt="step"
          />
          <div className={styles.feedbackWrapper_content_info_name}>
            <p>Джейн МакКаллан</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_proffesion}>
            <p>Директор по маркетингу в Pepsi Co.</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_feedback}>
            <p>
              Я полностью довольна услугами этой компании. Я часто ремонтирую
              свой автомобиль с FASTCAR.
            </p>
          </div>
          <div className={styles.feedbackWrapper_content_info_sliderArrow1}>
            <Arrow/>
          </div>
          <div className={styles.feedbackWrapper_content_info_sliderArrow2}>
          <Arrow/>
          </div>
        </div>
        <div className={styles.feedbackWrapper_content_info}>
          <img
            className={styles.feedbackWrapper_content_info_img}
            src={Client2}
            alt="step"
          />
          <div className={styles.feedbackWrapper_content_info_name}>
            <p>Оливер Сельвос</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_proffesion}>
            <p>Основатель Sony Entertainment</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_feedback}>
            <p>
              Я полность доволен услугами этой компании. Я часто ремонтирую
              свой автомобиль с FASTCAR.
            </p>
          </div>
          <div className={styles.feedbackWrapper_content_info_sliderArrow1}>
            <Arrow/>
          </div>
          <div className={styles.feedbackWrapper_content_info_sliderArrow2}>
          <Arrow/>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  )
}
export default Feedback
