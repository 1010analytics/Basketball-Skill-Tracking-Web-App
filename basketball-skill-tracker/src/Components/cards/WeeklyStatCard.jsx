// import React from "react";
// import styled from "styled-components";
// import { BarChart } from "@mui/x-charts/BarChart";



// const Card = styled.div`
// flex:1;
// min-width: 280px;
// padding: 24px;
// border: 1px solid ${({ theme }) => theme.text_primary + 20};
//   border-radius: 14px;
//   box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   @media (max-width: 600px) {
//     padding: 16px;
//   }

// `;
// const Title = styled.div`
// font-weight: 600;
// font-size: 16px;
// color: ${({ theme }) => theme.primary};
// @media (max-width: 600px) {
//   font-size: 14px;
// }`;
// const WeeklyStatCard = ({data}) => {
//     return (
//         <Card>
//             <Title>Weekly Performance </Title>
//             {data ?.totalWeeksCaloriesBurn && (
//               <BarChart
//               xAxis={[
//                 { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?. weeks },
//               ]}
//               series={[{ data: data?.totalWeeksCaloriesBurnt?.CaloriesBurned }]}
//               height={300}
//             />

//             ) }
//         </Card>
//     )
// }

// export default WeeklyStatCard;


import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const WeeklyStatCard = ({ data }) => {
  return (
    <Card>
      <Title>Metrics Tracking </Title>
      {data && data.totalWeeksCaloriesBurnt && (
        <BarChart
          xAxis={[{ scaleType: "band", data: data.totalWeeksCaloriesBurnt.weeks }]}
          series={[{ data: data.totalWeeksCaloriesBurnt.CaloriesBurned.map(Number)
           }]}
          height={300}
        />
      )}
    </Card>
  );
};

export default WeeklyStatCard;
