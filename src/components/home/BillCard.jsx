import styled from "styled-components";
import { AppColors } from "../../constants/colors";

export default function BillCard({ name, amount, dueDate }) {
  const formattedDueDate = new Date(dueDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Container>
      <Title>{name}</Title>
      <Caption
        style={{
          marginBottom: 20,
        }}
      >
        ₦ ${amount.toFixed(2)} - Due on {formattedDueDate}
      </Caption>
    </Container>
  );
}
const Title = styled.h3`
  margin-bottom: 5px;
`;
const Caption = styled.p`
  margin-bottom: 0;
  width: 200px;
`;
const Container = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: ${AppColors.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: calc(30% - 2px); /* Adjust width as needed */
  text-align: center;
  &:hover {
    border: 1px solid ${AppColors.primary};
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media only screen and (min-width: 1201px) {
    width: calc(50% - 18px);
  }
`;
