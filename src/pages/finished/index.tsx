import { Box } from "../../components/Box";
import { Container } from "./styles";
import finishIcon from "../../assets/icon-thank-you.svg"

export function Finished () {

  return (
    <Container>
      <Box>
        <div className="thanks">
          <img src={finishIcon} alt="" />

          <h1>Thank you!</h1>

          <span>Thanks for confirming your subscription! We hope you have fun using our plataform. If you need support, please feel free to email us at support@loremgaming.com.</span>
        </div>
      </Box>
    </Container>
  )
}
