import React, { useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdCameraswitch } from "react-icons/md";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* button {
    display: flex;

    position: absolute;
    bottom: 64px;
    background-color: lightgray;
    border-radius: 50%;
    padding: 10px;
  } */

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    max-width: 100%;
    height: auto;
  }
`;
const CameraContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
  .camera {
    width: 100%;
    height: 100%;
    /* -o-object-fit: cover; */
    object-fit: cover;
  }
  .camera-content {
    position: absolute;
  }
`;
const Header = styled.div`
  padding: 10px 6px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  .button {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      font-size: 1.2rem;

      font-weight: bold;
      color: white;
    }
  }

  p {
    color: white;
    text-align: center;
  }
  p:first-of-type {
    font-weight: bold;
    font-size: 1.4rem;
  }
  p: last-of-type {
    margin-top: 7px;
    font-weight: 300;
    font-size: 1.1rem;
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* width: 100%; */
  button {
    position: absolute;
    bottom: 64px;
    display: flex;
    background-color: lightgray;
    border-radius: 50%;
    padding: 10px;
  }
  p {
    position: absolute;
    bottom: 22px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Loan = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [mode, setMode] = useState("environment");
  const [cameraKey, setCameraKey] = useState(0);
  const navigate = useNavigate();

  const takePhoto = () => {
    if (camera.current) {
      const photo = camera.current.takePhoto();
      setImage(photo);
      alert("인증이 완료되었습니다.");
    }
  };

  // const toggleCamera = () => {
  //   setMode((prevMode) =>
  //     prevMode === "environment" ? "user" : "environment"
  //   );
  //   setCameraKey((prevKey) => prevKey + 1);
  // };
  const toggleCamera = () => {
    if (camera.current) {
      camera.current.switchCamera();
    }
  };

  return (
    <Container className="form-container">
      <Header>
        <div className="button">
          <button className="left" onClick={() => navigate(-1)}>
            <IoChevronBack size={30} />
            뒤로가기
          </button>
          <button onClick={toggleCamera}>
            <MdCameraswitch color="white" size={25} />
          </button>
        </div>
        <p>대출인증</p>
        <p>대출증을 사진 찍어 주세요!</p>
      </Header>

      <CameraContainer className="camera-container">
        <Camera facingMode="environment" ref={camera} className="camera" />
      </CameraContainer>

      <Bottom>
        <button onClick={takePhoto}>
          <FaCircle size={50} color="white" />
        </button>

        <p onClick={() => navigate(-1)}>다음에 찍을게요!</p>
      </Bottom>

      {/* {image && <img src={image} alt="A photo taken by the user" />} */}
    </Container>
  );
};

export default Loan;
