import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { AppColors } from "../../constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChatSection = () => {
  const [savingsData, setSavingsData] = useState({
    labels: [],
    datasets: [
      {
        label: "Savings",
        data: [],
        fill: false,
        borderColor: AppColors.primary,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointRadius: 5,
        pointHitRadius: 10,
      },
    ],
  });

  useEffect(() => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const data = [1000, 1200, 1500, 1800, 2000, 2200];

    setSavingsData({
      labels,
      datasets: [{ label: "Savings", data }],
    });
  }, []);

  return (
    <Container>
      <Label>Savings Progress</Label>
      <Line
        data={savingsData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </Container>
  );
};

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

export default ChatSection;
