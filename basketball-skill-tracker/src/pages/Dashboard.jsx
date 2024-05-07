import React ,{useState} from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountCard from "../Components/cards/CountCard";
import WeeklyStatCard from "../Components/cards/WeeklyStatCard";
import CategoryChart from "../Components/cards/CategoryChart"
import { Category, PieChart } from "@mui/icons-material";
import AddWorkout from "../Components/AddWorkout";
import WorkoutCard from "../Components/cards/WorkoutCard";

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

const Section = styled.div`
display: flex;
flex-direction: column;
padding: 0px 16px;
gap: 22px;
padding: 0px 16px;
@media (max-width: 600px) {
  gap: 12px;
}
`;

const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin-bottom: 100px;
@media (max-width: 600px) {
  gap: 12px;

}

`;

const Dashboard = () =>{
  const [workout ,setWorkout] = useState("");
  const data = {
    totalCaloriesBurnt: 13500,
    totalDriblle : 30,
    avgDribblingPerGame: 2250,
    totalWeeksCaloriesBurnt : {
      weeks: ["17th" ,"18th" ,"19th" , "20th" , "21th" , "30th"],
      CaloriesBurned: ["10500" ,"1234", "7899" ,"8935" ,"9834" , "4235"]
      
    },
    PieChartData: [
      {
        id:0,
        value: 370,
        label: "shooting"

      },
      {
        id:1,
        value: 670,
        label: "dribbling"
      } ,
      {
        id:2,
        value: 350,
        label: "defense"
      },
      {
        id:3,
        value: 550,
        label: "physical"
      }
    ]
  }
    return (
       <Container>
          <Wrapper>
             <Title>Skill Tracking and Analytics</Title>
             <FlexWrap>
                {counts.map((item) => (
                    <CountCard item={item} data={data}/>
                ))}
             </FlexWrap>
             <FlexWrap>
                <WeeklyStatCard data={data}/>
                <CategoryChart data={data} />
                <AddWorkout workout={workout} setWorkout={setWorkout}/>
             </FlexWrap>
             <Section>
                 <Title>Todays Games Data</Title>
                 <CardWrapper >
                   <WorkoutCard />
                   <WorkoutCard />
                   <WorkoutCard />
                 </CardWrapper>
             </Section>
            
          </Wrapper>
       </Container>
    )
}

export default Dashboard;