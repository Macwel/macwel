import styles from "./listBrands.module.scss"
import { useState, useEffect } from "react"
import BMWBrand from "../../common/img/bmw.webp"
import HondaBrand from "../../common/img/honda.webp"
import FordBrand from "../../common/img/ford.webp"
import AudiBrand from "../../common/img/audi.webp"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const ListBrands = () => {
  const [w, setW] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setW(window.innerWidth)
    })
  }, [])

  const banners = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: w > 800 ? (w > 1400 ? 4 : 2) : 1,
    slidesToScroll: 4,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000
  }
  return (
    <div className={styles.listBrands}>
      <div className={styles.listBrands_text}>
        <p>— Список брендов</p>
        <p>Бренды</p>
        <p>Мы занимаемся ремонтом следующих брендов</p>
      </div>
      <div className={styles.listBrands_backgroundAll}>
        <Slider {...banners}>
          <div className={styles.listBrands_backgroundAll_backgroundSlider}>
            <img src={BMWBrand} alt="step" />
          </div>
          <div
            style={{ display: "flex" }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <img src={HondaBrand} alt="step" width="200px" height="180px" />
          </div>
          <div
            style={{ display: "flex" }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <img src={FordBrand} alt="step" width="280px" />
          </div>
          <div
            style={{ display: "flex" }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <img src={AudiBrand} alt="step" />
          </div>
          <div
            style={{ display: "flex" }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <img src={HondaBrand} alt="step" width="200px" height="180px" />
          </div>
          <div
            style={{ display: "flex" }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <img src={FordBrand} alt="step" width="280px" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ListBrands
