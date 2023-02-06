import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";

export function PickAdds () {
  const router = useNavigate()

  return (
    <Container>
      <Box
        title="Pick add-ons"
        textButton="Next Step"
        text="Add ons help enhance your gaming experience"
        onClickNextButton={() => router("/summary")}
        goNextButton
        goBackButtonDisable
      >
        <div className="card-ons">
          <div className="card">
            <input type="checkbox" />

            <div className="info">
              <strong>Online Service</strong>
              <p>Acess to multiple games</p>
            </div>

            <p className="value">+$1/mo</p>
          </div>
        </div>

        <div className="card-ons">
          <div className="card">
            <input type="checkbox" />

            <div className="info">
              <strong>Larger Storage</strong>
              <p>Extra 1TB of cloud save</p>
            </div>

            <p className="value">+$2/mo</p>
          </div>
        </div>

        <div className="card-ons">
          <div className="card">
            <input type="checkbox" />

            <div className="info-custom">
              <strong>Custimizable Profile</strong>
              <p>Custom theme on your profile</p>
            </div>

            <p className="value">+$2/mo</p>
          </div>
        </div>

      </Box>
    </Container>
  )
}
