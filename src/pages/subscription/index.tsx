import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";

export function Subscription () {
  const router = useNavigate()

  return (
    <Container>
      <Box
        text="Plase provide your name, email, address, and phone number"
        title="Personal Info"
        textButton="Next Step"
        onClickNextButton={() => router("/payment")}
      >
        <form>
          <label htmlFor="name-input" className="name">Name</label>
          <input type="text" placeholder="Jon Doe" className="name-input" />

          <label htmlFor="email-input" className="email">Email Address</label>
          <input type="email" className="email-input" placeholder="jondoe@test.com"  />

          <label htmlFor="phone-number" className="phone">Phone Number</label>
          <input type="phone" className="phone-number" placeholder="(011) 99999-9999" />
        </form>
      </Box>
    </Container>
  )
}
