import React, { useEffect, useState } from "react";
import PlusMain from "./PlusMain";
import PlusProduct from "./PlusProduct";
import PlusEquip from "./PlusEquip";


function SaehanPlus() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 0.1초 뒤 페이드인 효과 실행
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <PlusMain />
      <PlusEquip />
      <PlusProduct />
    </div>
  );
}

export default SaehanPlus;
 