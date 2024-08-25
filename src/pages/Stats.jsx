import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import Point from "../components/stats/Point";
import Visit from "../components/stats/Visit";
import Loans from "../components/stats/Loans";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StatsContainer = styled.div`
  flex: 1;
  padding: 20px 17px;

  display: flex;
  flex-direction: column;

  /* & > * {
    flex-shrink: 0; 
  } */
`;

const PointContainer = styled.div`
  flex: 2;
`;

const VisitContainer = styled.div`
  flex: 4;
`;

const LoansContainer = styled.div`
  flex: 4;
`;

const Stats = () => {
  return (
    <Container>
      <Header />
      <StatsContainer>
        <PointContainer>
          <Point />
        </PointContainer>
        <VisitContainer>
          <Visit />
        </VisitContainer>
        <LoansContainer>
          <Loans />
        </LoansContainer>
      </StatsContainer>
      <Footer />
    </Container>
  );
};

export default Stats;
