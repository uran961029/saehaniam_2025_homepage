import React, { useEffect, useState } from "react";
import "../Common/CommonMain.css"; // 스타일

function HightechMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className="common-main"
      style={{ backgroundImage: `url("/assets/Areal/hh11.webp")` }} // ✅ public 기준 경로
    >
      <div className="common-overlay"></div>
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className={`common-text ${isLoaded ? "show" : ""}`}>
          <h1 id="main-h1">SAEHAN HIGHTECH</h1>
          <p>
            (주)새한하이테크는 첨단 사출 성형 기술과 정밀 제조 시스템을 바탕으로<br />
            김치냉장고, 냉장고 선반, 산업용 부품을 전문적으로 생산하는 <br />
            글로벌 가전·산업 부품 제조 기업입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HightechMain;
