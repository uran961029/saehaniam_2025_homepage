import React, { useEffect, useState } from "react";
import HightechMain from "./HightechMain";
import HightechProduct from "./HightechProduct";
import HighEquip from "./HighEquip";

function SaehanHightech() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 0.1초 뒤 페이드인 효과 실행
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <HightechMain />
      <HighEquip />
      <HightechProduct />
    </div>
  );
}

export default SaehanHightech;
