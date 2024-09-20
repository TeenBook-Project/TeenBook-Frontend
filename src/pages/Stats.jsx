import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import Point from "../components/stats/Point";
import Visit from "../components/stats/Visit";
import Loans from "../components/stats/Loans";
import { fetchStats } from "../api/StatsAPI";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StatsContainer = styled.div`
  flex: 1;
  margin: 20px 17px 120px;

  display: flex;
  flex-direction: column;
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
  const [stats, setStats] = useState(fetchStats);
  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data.result[0]);
        console.log(data.result[0]);
      } catch (error) {
        console.log("error", error);
      }
    };
    loadStats();
  }, []);
  return (
    <Container>
      <StatsContainer>
        <PointContainer>
          <Point stats={stats} />
        </PointContainer>
        <VisitContainer>
          <Visit stats={stats} />
        </VisitContainer>
        <LoansContainer>
          <Loans stats={stats} />
        </LoansContainer>
      </StatsContainer>
    </Container>
  );
};

export default Stats;
