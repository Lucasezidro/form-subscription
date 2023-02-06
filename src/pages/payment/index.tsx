import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";

export function Payment () {
  const router = useNavigate()

  return (
    <Container>
      <Box
        goBackButton
        textButton="Next Step"
        title="Select your plan"
        text="You have the option of monthly or yearly billing"
        onClickNextButton={() => router("/pick-add-on")}
        onClickBackButton={() => router("/")}
      >

      </Box>
    </Container>
  )
}
