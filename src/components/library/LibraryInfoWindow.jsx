import React from "react";
import styled from "styled-components";
import { BsTelephoneFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
const InfoWindow = styled.div`
  padding: 15px;
  background-color: white;
  position: relative; /* Absolute 자식 요소의 기준 */
  min-width: 270px; /* 최소 너비 설정 */
  max-width: 270px;
  overflow: hidden;
  z-index: 100;
`;

const CloseButton = styled.img`
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;
const LibraryContent = styled.div`
  div {
    margin-bottom: 5px;
    font-size: 0.9rem;
  }
  .title {
    p:nth-child(1) {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
    p:nth-child(2) {
      font-size: 0.8rem;
    }
  }
`;
const LinkBox = styled.div`
  width: 100%;
  /* height: 30px; */
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-top: 20px;
  padding: 10px 0;
  div {
    /* border-right: 1px solid lightgray; */
  }
`;

const LibraryInfoWindow = ({ library, onClose }) => {
  return (
    <InfoWindow>
      <CloseButton
        alt="close"
        width="16"
        height="16"
        src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
        onClick={onClose}
      />
      <LibraryContent>
        <div className="title">
          <p>{library.LBRRY_NAME}</p>
          <p>({library.LBRRY_SE_NAME})</p>
        </div>
        <br />
        <div>주소 : {library.ADRES}</div>
        {/* <div>{library.TEL_NO}</div>
        <div>{library.HMPG_URL}</div> */}

        <div>운영시간 : {library.OP_TIME}</div>
        <div>정기 휴관일 : {library.FDRM_CLOSE_DATE}</div>
      </LibraryContent>
      <LinkBox>
        <a href={`tel:${library.TEL_NO}`}>
          <BsTelephoneFill size={20} />
        </a>

        <a href={`${library.HMPG_URL}`}>
          <IoHome size={20} />
        </a>

        <a href="">
          <FaMapMarkerAlt size={20} />
        </a>
      </LinkBox>
    </InfoWindow>
  );
};

export default LibraryInfoWindow;
// LibraryInfoWindow.js
// import React from "react";

// const LibraryInfoWindow = ({ library, onClose }) => {
//   return (
//     <div style={infoWindowStyle}>
//       <h4>{library.LBRRY_NAME}</h4>
//       <p>{library.ADRES}</p>
//       <button onClick={onClose}>닫기</button>
//     </div>
//   );
// };

// const infoWindowStyle = {
//   padding: "10px",
//   backgroundColor: "#fff",
//   border: "1px solid #ddd",
//   borderRadius: "5px",
//   boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
// };

// export default LibraryInfoWindow;
