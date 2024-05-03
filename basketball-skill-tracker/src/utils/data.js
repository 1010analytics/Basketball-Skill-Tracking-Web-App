import {
    FitnessCenterRounded,
    LocalFireDepartmentRounded,
    TimelineRounded,
  } from "@mui/icons-material";
  
  export const counts = [
    {
    
      name: "Dribbling",
      icon: (
        <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
      ),
      desc: "Total time spent dribbling today",
      key: "totalTimeDribbling",
      unit: "minutes",
      color: "#eb9e34",
      lightColor: "#FDF4EA",
    },
    {
      name: "Shooting",
      icon: <FitnessCenterRounded sx={{ color: "inherit", fontSize: "26px" }} />,
      desc: "Total number of shots taken today",
      key: "totalShotsTaken",
      unit: "shots",
      color: "#41C1A6",
      lightColor: "#E8F6F3",
    },
    {
      name: "Physical (speed, strength)",
      icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
      desc: "Average speed and strength during workouts",
      key: "avgSpeedAndStrength",
      unit: "units",
      color: "#FF9AD5",
      lightColor: "#FEF3F9",
    },
    {
      name: "Game IQ",
      icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
      desc: "Average game intelligence score",
      key: "avgGameIQ",
      unit: "points",
      color: "#FF9AD5",
      lightColor: "#FEF3F9",
    },

  ];