import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";

export function Summary () {
  const router = useNavigate()

  return (
    <Container>
      <Box
        title="Finishing up"
        text="Double-check everything looks OK before confirming"
        goBackButtonDisable
        goNextButton
        textButton="Confirm"
        onClickNextButton={() => router("/finished")}
      >
        <div className="final-info">
          <div className="confirm">
            <div className="subscription">
              <div>
                <span className="text-info">Arcade (Monthly)</span>
                <a href="/">change</a>
              </div>
              <p>$9/mo</p>
            </div>
          </div>

          <div className="add-ons">
            <div className="ons">
              <p>Online service</p>
              <p>Larger storage</p>
            </div>

            <div className="value-ons">
              <p>+$1/mo</p>
              <p>+$2/mo</p>
            </div>
          </div>
        </div>

        <div className="summary">
          <p className="summary-month">Total (per month)</p>
          <p className="summary-value">+$12/mo</p>
        </div>

      </Box>
    </Container>
  )
}
