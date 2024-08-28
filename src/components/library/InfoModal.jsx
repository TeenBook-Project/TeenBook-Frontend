import React from "react";
import styled from "styled-components";
import pin from "../../assets/icons-pin-48.png";
import palm from "../../assets/icons-palm-48.png";
import hourglass from "../../assets/icons-hourglass-48.png";
import tell from "../../assets/icons-tell-48.png";
import { IoCloseOutline } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { useRecoilState } from "recoil";
import { FavoritAtom } from "../../recoil/FavoritAtom";
import Event from "../../assets/Event.png";
import axios from "axios";
import { DeleteBookMark, PostBookMark } from "../../api/BookMarkAPI";

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
  pointer-events: none;
`;

// 중앙에 위치한 모달 내용
const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  pointer-events: auto;
`;

const Button = styled.div`
  float: right;
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
      width: 65px;
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
    .event {
      margin: 20px 0 10px;
    }
  }
`;

const InfoModal = ({ isOpen, onClose, library }) => {
  const [favoritItem, setFavoritItem] = useRecoilState(FavoritAtom);
  if (!isOpen) return null;
  console.log(library);
  const isAlreadyInFavorit = favoritItem.some(
    (e) => e.LBRRY_SEQ_NO === library.LBRRY_SEQ_NO
  );

  // 즐겨찾기 추가 및 삭제 함수
  const toggleFavorit = async () => {
    const bookData = {
      LBRRY_SEQ_NO: Number(library.LBRRY_SEQ_NO),
      LBRRY_NAME: library.LBRRY_NAME,
      ADRES: library.ADRES,
      TEL_NO: library.TEL_NO,
    };
    try {
      if (isAlreadyInFavorit) {
        // 즐겨찾기 삭제
        await DeleteBookMark(library.LBRRY_NAME);
        setFavoritItem((prev) =>
          prev.filter((e) => e.LBRRY_SEQ_NO !== library.LBRRY_SEQ_NO)
        );
      } else {
        // 즐겨찾기 추가
        await PostBookMark(bookData);

        setFavoritItem((prev) => [...prev, library]);
      }
    } catch (error) {
      console.error("즐겨찾기 변경 중 오류가 발생했습니다:", error);
      alert("즐겨찾기 변경 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Button>
          <button onClick={toggleFavorit}>
            <MdStars size={25} color={isAlreadyInFavorit ? "gold" : "gray"} />
          </button>
          <button className="close-button" onClick={onClose}>
            <IoCloseOutline size={25} />
          </button>
        </Button>
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
              <div className="event">진행중인 이벤트</div>
              <img src={Event} alt="" />
            </div>
          </LibraryInfo>
        )}
      </Content>
    </Overlay>
  );
};

export default InfoModal;
