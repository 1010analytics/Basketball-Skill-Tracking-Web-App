import React from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountCard from "../Components/cards/CountCard";
import WeeklyStatCard from "../Components/cards/WeeklyStatCard";
import { PieChart } from "@mui/icons-material";

const Container = styled.div`
flex: 1;
height: 100%;
display: flex;
justify-content: center;
padding: 22px 0px;
overflow-y: scroll;

`;
const Wrapper = styled.div`
flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;

`;
const FlexWrap = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }

`;

const Dashboard = () =>{
  const data = {
    totalCaloriesBurnt: 13500,
    totalDriblle : 30,
    avgDribblingPerGame: 2250,
    totalWeeksCaloriesBurnt : {
      weeks: ["17th" ,"18th" ,"19" , "20" , "21" , "30"],
      CaloriesBurned: ["10500" ,"0", "0" ,"0" ,"0" , "0"]
      
    },
    PieChartData: [
      {
        id:0,
        value: 370,
        label: "shooting"

      },
      {
        id:1,
        value: 370,
        label: "dribbling"
      } ,
      {
        id:2,
        value: 370,
        label: "defense"
      },
      {
        id:3,
        value: 370,
        label: "physical"
      }
    ]
  }
    return (
       <Container>
          <Wrapper>
             <Title>Dashboard</Title>
             <FlexWrap>
                {counts.map((item) => (
                    <CountCard item={item} />
                ))}
             </FlexWrap>
             <FlexWrap>
                <WeeklyStatCard data={data}/>
             </FlexWrap>
          </Wrapper>
       </Container>
    )
}

export default Dashboard;