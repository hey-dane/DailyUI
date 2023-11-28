import styles from "./AppIcon.module.css";

export default function AppIcon() {
  return (
    <div className={styles.AppIconMain}>
      <div className={styles.AppIcon}>
        <div className={styles.sky}></div>
        <div className={styles.orangeSky}></div>
        <div className={styles.waves}></div>
        <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,25 Q25,0 50,25 T100,25 T150,25 T200,25 T250,25 T300,25 T350,25 T400,25 T450,25 T500,25"
            stroke="blue"
            stroke-width="10"
            fill="none"
          />

          <path
            className={styles.wavyLine}
            d="M0,75 Q30,50 60,75 T120,75 T180,75 T240,75 T300,75 T360,75 T420,75 T480,75"
          />

          <path
            className="wavy-line"
            d="M0,125 Q35,100 70,125 T140,125 T210,125 T280,125 T350,125 T420,125 T490,125"
            stroke="black"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
