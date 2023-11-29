import styles from "./AppIcon.module.css";

export default function AppIcon() {
  return (
    <div className={styles.AppIconMain}>
      <div className={styles.AppIcon}>
        <div className={styles.sky}></div>
        <div className={styles.orangeSky}>
          <div className={styles.waves}>
            <svg width="500px" height="250" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40,25 Q30,50 60,25 T120,25 T180,25 T240,25 T300,25 T360,25 T420,25 T480,25 T540,25 T600,25 T660,25 T720,25"
                className={styles.wavyLine}
              />
              <path
                d="M40,75 Q30,100 60,75 T120,75 T180,75 T240,75 T300,75 T360,75 T420,75 T480,75 T540,75 T600,75 T660,75 T720,75"
                className={styles.wavyLine}
              />
              <path
                d="M40,125 Q30,150 60,125 T120,125 T180,125 T240,125 T300,125 T360,125 T420,125 T480,125 T540,125 T600,125 T660,125 T720,125"
                className={styles.wavyLine}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
