import styles from "../Common/HoverEffect.module.scss"; //  SCSS 파일 import
import React from "react";






function HoverEffect() {
  return (
    <div className={styles.wrapper}>
      {/* ✅ 중앙 정렬된 제목 */}
      <div className={styles.introText}>
        <p>View of Plus</p>
      </div>

      {/* ✅ 이미지 리스트 */}
      <div className={styles.container}>
        <div className={styles.box}>
          <img src="/assets/Areal/plus/p1.webp" alt="Image 1" />
        </div>
        <div className={styles.box}>
          <img src="/assets/Areal/plus/p2.webp" alt="Image 2" />
        </div>
        <div className={styles.box}>
          <img src="/assets/Areal/plus/p3.webp" alt="Image 3" />
        </div>
        <div className={styles.box}>
          <img src="/assets/Areal/plus/p4.webp" alt="Image 4" />
        </div>
        <div className={styles.box}>
          <img src="/assets/Areal/plus/safe.webp" alt="Image 5" />
        </div>
      </div>
    </div>
  );
}

export default HoverEffect;
