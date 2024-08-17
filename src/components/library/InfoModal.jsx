import React from "react";
import styled from "styled-components";
import pin from "../../assets/icons-pin-48.png";
import palm from "../../assets/icons-palm-48.png";
import hourglass from "../../assets/icons-hourglass-48.png";
import tell from "../../assets/icons-tell-48.png";

// 모달을 중앙에 배치하기 위한 오버레이
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none; // 오버레이를 클릭할 수 없게 함
`;

// 중앙에 위치한 모달 내용
const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 90vw; // 뷰포트 너비를 초과하지 않도록 설정
  max-height: 90vh; // 뷰포트 높이를 초과하지 않도록 설정
  overflow-y: auto; // 내용이 넘칠 경우 스크롤 가능
  pointer-events: auto; // 모달 내용과 상호작용 가능
`;

// 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

// 도서관 정보 스타일
const LibraryInfo = styled.div`
  .title {
    h2 {
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    div {
      display: flex;
      justify-content: center;
      width: 60px;
      padding: 5px;
      font-size: 9.5px;
      font-weight: 700;
      border: 2px solid black;
      border-radius: 15px;
    }
  }
  .content {
    margin-top: 20px;
    p {
      margin: 3px 0;
    }
  }
`;

const InfoModal = ({ isOpen, onClose, library }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {library && (
          <LibraryInfo>
            <div className="title">
              <h2>{library.LBRRY_NAME}</h2>
              <div>
                <p>{library.LBRRY_SE_NAME}</p>
              </div>
            </div>
            <div className="content">
              <p>
                <img src={pin} width="20" alt="" /> : {library.ADRES}
              </p>
              <p>
                <img src={tell} width="20" alt="" /> : {library.TEL_NO}
              </p>
              <p>
                <img src={palm} width="20" alt="" /> : {library.FDRM_CLOSE_DATE}
              </p>
              <p>
                <img src={hourglass} width="20" alt="" /> : {library.OP_TIME}
              </p>
            </div>
          </LibraryInfo>
        )}
      </Content>
    </Overlay>
  );
};

export default InfoModal;
