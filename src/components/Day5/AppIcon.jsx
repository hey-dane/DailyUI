import styles from "./AppIcon.module.css";

export default function AppIcon() {
  return (
    <div className={styles.AppIconMain}>
      <div className={styles.imageContainer}>
        <div className={styles.AppIconImage}>
          <img src="src/assets/AppICON2.png" alt="App Icon" />
        </div>
        <div className={styles.comment}>Photo Reference</div>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.AppIcon}>
          <div className={styles.sky}>
            <div className={styles.sun}>
              <div className={`${styles.sunRay} ${styles.topRay}`}></div>
              <div className={`${styles.sunRay} ${styles.leftRay}`}></div>
              <div className={`${styles.sunRay} ${styles.rightRay}`}></div>
              <div className={`${styles.sunRay} ${styles.topRay}`}></div>
              <div
                className={`${styles.sunRayWide} ${styles.leftWideRay}`}
              ></div>
              <div
                className={`${styles.sunRayWide} ${styles.rightWideRay}`}
              ></div>
              <div className={`${styles.sunRay} ${styles.leftHighRay}`}></div>
              <div className={`${styles.sunRay} ${styles.rightHighRay}`}></div>
            </div>
          </div>
          <div className={styles.orangeSky}>
            <div className={styles.mountain}>
              <div className={styles.snowCap}></div>
            </div>
            <div className={styles.waves}>
              <svg
                width="500px"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="verticalGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="15%"
                      style={{ stopColor: "white", stopOpacity: 1 }}
                    />
                    <stop
                      offset="40%"
                      style={{ stopColor: "#3BCEC1", stopOpacity: 1 }}
                    />
                    <stop
                      offset="80%"
                      style={{ stopColor: "#024D65", stopOpacity: 1 }}
                    />
                  </linearGradient>
                  <clipPath id="clipWave">
                    <path d="M0,25 Q30,50 60,30 T120,25 T180,25 T240,25 T300,25 T360,25 T420,25 T480,25 T540,25 T600,25 T660,25 T720,25 V250 H0 Z" />
                  </clipPath>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="72%"
                  fill="url(#verticalGradient)"
                  clip-path="url(#clipWave)"
                />
                <path
                  d="M40,25 Q30,55 60,30 T120,25 T180,25 T240,25 T300,25 T360,25 T420,25 T480,25 T540,25 T600,25 T660,25 T720,25"
                  className={styles.wavyLine}
                />
                <path
                  d="M40,75 Q30,105 60,80 T120,75 T180,75 T240,75 T300,75 T360,75 T420,75 T480,75 T540,75 T600,75 T660,75 T720,75"
                  className={styles.wavyLine}
                />
                <path
                  d="M40,125 Q30,155 60,130 T120,125 T180,125 T240,125 T300,125 T360,125 T420,125 T480,125 T540,125 T600,125 T660,125 T720,125"
                  className={styles.wavyLine}
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.comment}>HTML/CSS Render</div>
      </div>
    </div>
  );
}
