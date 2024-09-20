// import React from "react";
// import styled from "styled-components";

// const LayoutContainer = styled.div`
//   /* max-width: 1024px;
//   height: 100%;
//   margin: 0 auto;
//   background-color: aliceblue; */
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh; /* 화면의 세로를 꽉 채우도록 설정 */
//   max-width: 500px; /* 시작 가로 크기 */
//   margin: 0 auto; /* 중앙 정렬 */
//   width: 100%; /* 반응형으로 가로 크기를 줄일 수 있도록 설정 */
//   /* padding: 0 16px; 화면이 좁아졌을 때 패딩 적용 */
//   background-color: #f4f4f9;
// `;

// const Layout = ({ children }) => {
//   return (
//     <LayoutContainer>
//       {children}
//       {/* <LayoutContent>{children}</LayoutContent> */}
//     </LayoutContainer>
//   );
// };

// export default Layout;
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom"; // To check current route
import Header from "./common/Header";
import Footer from "./common/Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  background-color: #f4f4f9;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  height: calc(100vh - 110px);
  overflow: hidden;
`;

const Layout = ({ children }) => {
  const location = useLocation();

  // List of routes where Header/Footer should NOT appear
  const noHeaderFooterRoutes = ["/", "/AttendanceMap", "/Loan", "/Shop"];

  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <LayoutContainer>
      {!shouldHideHeaderFooter && <Header />}
      <ContentWrapper>{children}</ContentWrapper>
      {!shouldHideHeaderFooter && <Footer />}
    </LayoutContainer>
  );
};

export default Layout;
