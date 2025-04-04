import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../dropDownCssFile/BizDropdownMenu.css";

const BizDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 추가

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a onClick={() => navigate("/biz-area")} style={{ cursor: "pointer" }}>사업영역</a>  

      {/* ✅ <ul>을 추가하여 올바른 구조 유지 */}
      {/* {isDropdownOpen && ( */}
        {/* <ul className="dropdown-menu"> */}
          {/* <li><a onClick={() => navigate("/biz-area")} style={{ cursor: "pointer" }}>사업 영역</a></li>   */}
          {/* <li><a onClick={() => navigate("/tech")} style={{ cursor: "pointer" }}>기술 & 혁신</a></li>  */}
          {/* <li><a onClick={() => navigate("/solutions")} style={{ cursor: "pointer" }}>고객 맞춤형 솔루션</a></li>  */}
          {/* <li><a onClick={() => navigate("/investment")} style={{ cursor: "pointer" }}>투자 & 글로벌</a></li>  */}
        {/* </ul> */}
      {/* )} */}
    </li>
  );
};

export default BizDropdownMenu;
