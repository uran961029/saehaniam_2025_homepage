import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./PlusFacility.css";

// ✅ 문자열 경로 사용
const facilityData = [
  {
    title: "엔겔 사출기 120TON",
    image: "/assets/Areal/plus/120.webp",
  },
  {
    title: "엔겔 사출기 150TON",
    image: "/assets/Areal/plus/150.webp",
  },
  {
    title: "엔겔 사출기 400TON",
    image: "/assets/Areal/plus/400.webp",
  },
  {
    title: "엔겔 사출기 650TON",
    image: "/assets/Areal/plus/650.webp",
  },
  {
    title: "엔겔 사출기 900TON",
    image: "/assets/Areal/plus/900.webp",
  },
  {
    title: "엔겔 사출기 1100TON",
    image: "/assets/Areal/plus/1100.webp",
  },
];

function PlusFacility() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="facility-layout">
      {/* 왼쪽 탭 */}
      <div className="facility-tabs">
        {facilityData.map((item, index) => (
          <div
            key={index}
            className={`tab-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="tab-indicator" />
            <span className="tab-text">{item.title}</span>
          </div>
        ))}
      </div>

      {/* 오른쪽 슬라이드 영역 */}
      <div className="facility-content-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="facility-content"
          >
            <img
              src={facilityData[activeIndex].image}
              alt="facility"
              className="facility-image"
              loading="lazy"
            />
            <p className="facility-description">
              {facilityData[activeIndex].description ?? ""}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PlusFacility;
