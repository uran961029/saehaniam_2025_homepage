import React, { useEffect, useRef, useState } from "react";
import "../Common/CommonProduct.css";
import img1 from "@/assets/Areal/plus/npp1.jpg";
import img2 from "@/assets/Areal/plus/npp2.jpg";
import img3 from "@/assets/Areal/plus/npp3.jpg";
import img4 from "@/assets/Areal/plus/npp4.jpg";
import img5 from "@/assets/Areal/plus/npp5.jpg";
import img6 from "@/assets/Areal/plus/npp6.jpg";
import img7 from "@/assets/Areal/plus/npp7.jpg";
import img8 from "@/assets/Areal/plus/npp8.jpg";
import img9 from "@/assets/Areal/plus/npp9.jpg";
import img10 from "@/assets/Areal/plus/npp10.jpg";
import img11 from "@/assets/Areal/plus/npp11.jpg";

function PlusProduct() {
  const products = [
    {
      name: "BRKT-FR UPR TRIM JOINT",
      codeNO: "81191-6D000",
      model: "QV",
      category: ">PC+ASA<",
      give: "서연인테크(정연내장)",
      image: img2,
    },
    {
      name: "CORE-FR DR INR CVR,LH / CORE-FR DR INR CVR,RH",
      codeNO: "81250-6D000 , 81260-6D000",
      model: "QV",
      category: ">PC+ABS<",
      give: "서연인테크(정연내장)",
      image: img4,
    },
    {
      name: "DR FRT HDL C/PULL LH(자동)",
      codeNO: "81210-5H001",
      model: "VT-CAR",
      category: ">ABS<",
      give: "서연인테크(정연내장)",
      image: img6,
    },
    {
      name: "GRILL-SPEAKER RR",
      codeNO: "96365-7A100",
      model: "EG-CAR",
      category: ">PP+E/P-TD10<",
      give: "서연인테크(정연내장)",
      image: img8,
    },
    {
      name: "LWR-FR DR GRIP HDL LH",
      codeNO: "81230-6D000",
      model: "QV-CAR",
      category: ">PP+E/P-(GX+TD)14<",
      give: "서연인테크(정연내장)",
      image: img9,
    },
    {
      name: "UPR-FR- DR GRIP HDL, LH / UPR-FR- DR GRIP HDL, RH",
      codeNO: "812110-6D000 , 812120-6D000",
      model: "QV",
      category: ">ABS<",
      give: "서연인테크(정연내장)",
      image: img11,
    },
    {
      name: "BODY DRAWER",
      codeNO: "DC61-05922A",
      model: "WD8000D",
      category: ">PP< A4WW 1X1X1-1",
      give: "[주] 디케이",
      image: img1,
    },
    {
      name: "PANEL-REF",
      codeNO: "DA64-07491A",
      model: "RF9000C",
      category: ">ABS< A4DU 1X1X1-1",
      give: "[주] 한영 PNS",
      image: img10,
    },
    {
      name: "CASE WATER TANK #3",
      codeNO: "DA61-4174A",
      model: "RF9900T",
      category: "",
      give: "[주] 대창",
      image: img3,
    },
    {
      name: "CASE ICE MAKER R #1",
      codeNO: "3211-0042",
      model: "DI-P2",
      category: "1X1X2-2 ABS",
      give: "[주] 대창",
      image: img5,
    },
    {
      name: "GEAR CAM #1",
      codeNO: "3211-0044",
      model: "DI-P2",
      category: "POM 1X1X4-4",
      give: "[주] 대창",
      image: img7,
    },
  ];

  const [category, setCategory] = useState("전체");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // 카테고리에 따른 필터링
  const filteredProducts = products.filter((product) => {
    if (category === "전체") return true;
    if (category === "자동차 부품") return product.give.includes("서연인테크");
    if (category === "가전 부품") return !product.give.includes("서연인테크");
    return true;
  });

  return (
    <div ref={ref} className={`product ${isVisible ? "fade-in" : ""}`}>
      <h2 className="product-title">주요 생산 제품</h2>
      
      {/* 드롭다운 추가 */}
      <div className="filter-container">
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="전체">전체</option>
          <option value="자동차 부품">자동차 부품</option>
          <option value="가전 부품">가전 부품</option>
        </select>
      </div>

      {filteredProducts.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            {/* <p><strong>납품 업체:</strong> {product.give}</p> */}
            <p className="product-eng-name">{product.model}</p>
            <p>{product.codeNO}</p>
            <p>{product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlusProduct;
