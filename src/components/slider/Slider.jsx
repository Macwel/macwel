import styles from './slider.module.scss'
import back from '../../common/img/back.png'

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <img src={back} width="100%" role="presentation" />
      <div className={styles.slider_line}>
        <div>
          <p>Carobar - новая жизнь для вашей машины</p>
        </div>
        <div>
          <p>Мы всегда рады помочь вам!</p>
        </div>
      </div>
    </div>
  )
}
export default Slider
