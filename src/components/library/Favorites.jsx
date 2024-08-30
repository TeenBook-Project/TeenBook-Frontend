import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { FavoritAtom } from "../../recoil/FavoritAtom";
import styled from "styled-components";
import { MdStars } from "react-icons/md";
import InfoModal from "./InfoModal";
import { DeleteBookMark } from "../../api/BookMarkAPI";
import { FetchUser } from "../../api/UserAPI";
const Data = styled.div`
  margin: 17px 10px 30px;
  font-size: 12px;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 150px;
  background-color: white;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  margin: 3px 0;
  .top {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 20px;
      font-weight: bold;
      padding: 15px 10px;
    }
    .two-button {
      display: flex;
      align-items: center;
      margin-right: 20px;
      .view-details {
        width: 70px;
        height: 20px;
        background-color: #957fe2;
        color: white;
        border-radius: 5px;

        font-size: 10px;
        font-weight: bold;
      }
    }
  }

  .content {
    padding: 15px 10px;
    p {
      margin: 5px 0;
      font-size: 13px;
      font-weight: bold;
    }
    p:not(:first-child) {
      color: lightgray;
    }
  }
`;
const Favorites = () => {
  const [favoritItem, setFavoritItem] = useRecoilState(FavoritAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLibrary, setSelectedLibrary] = useState(null);
  const [user, setUser] = useState([]);
  //즐겨찾기에서 도서관 제거
  const removeFromFavorit = async (libraryId, libraryName) => {
    try {
      // 서버에서 즐겨찾기 삭제
      await DeleteBookMark(favoritItem.LBRRY_NAME);
      // 로컬 상태 업데이트
      setFavoritItem((prev) =>
        prev.filter((e) => e.LBRRY_SEQ_NO !== libraryId)
      );
      const data = await FetchUser();
      setUser(data.result[0]);
    } catch (error) {
      console.error("즐겨찾기 삭제 중 오류가 발생했습니다:", error);
      alert("즐겨찾기 삭제 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };
  // 정보보기 버튼 클릭 시 모달 열기
  const handleViewDetails = (library) => {
    setSelectedLibrary(library); // 선택된 도서관 설정
    setIsModalOpen(true); // 모달 열기
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLibrary(null); // 모달이 닫힐 때 선택된 도서관 정보 초기화
  };

  return (
    <div>
      <Data>자주 찾는 도서관 (등록 도서관 {favoritItem.length}개)</Data>
      {favoritItem.length !== 0 ? (
        favoritItem.map((e) => (
          <div key={e.LBRRY_SEQ_NO}>
            <Container key={e.LBRRY_SEQ_NO}>
              <div className="top">
                <h2>{e.LBRRY_NAME}</h2>
                <div className="two-button">
                  <button onClick={() => removeFromFavorit(e.LBRRY_SEQ_NO)}>
                    <MdStars size={25} color="gold" />
                  </button>
                  <button
                    className="view-details"
                    onClick={() => handleViewDetails(e)}
                  >
                    정보보기
                  </button>
                </div>
              </div>
              <div className="content">
                <p>방문 횟 수 0회</p>
                <p>{e.ADRES}</p>
                <p>{e.TEL_NO}</p>
              </div>
            </Container>
          </div>
        ))
      ) : (
        <div>비었습니다.</div>
      )}

      {selectedLibrary && (
        <InfoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          library={selectedLibrary}
        />
      )}
    </div>
  );
};

export default Favorites;
