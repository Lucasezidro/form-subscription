import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";
import IconArcade from "../../assets/icon-arcade.svg"
import IconAdvanced from "../../assets/icon-advanced.svg"
import IconPro from "../../assets/icon-pro.svg"
import ReactSwitch from "react-switch";

export function Payment () {
  const router = useNavigate()

  return (
    <Container>
      <Box
        goBackButton
        textButton="Next Step"
        title="Select your plan"
        text="You have the option of monthly or yearly billing"
        goNextButton
        onClickNextButton={() => router("/pick-add-on")}
        onClickBackButton={() => router("/")}
      >
        <div className="cards" role="button">
          <div className="arcade">
            <img src={IconArcade} alt="icon-arcade" />

            <strong>Arcade</strong>
            <p>$9/mo</p>
          </div>

          <div className="advanced">
            <img src={IconAdvanced} alt="icon-advanced" />

            <strong>Advanced</strong>
            <p>$12/mo</p>
          </div>

          <div className="pro">
            <img src={IconPro} alt="icon-pro" />

            <strong>Pro</strong>
            <p>$15/mo</p>
          </div>
        </div>

        <div className="monthly-payment">
          <span>Monthly</span>

          <ReactSwitch 
            checked={false}
            onChange={() => {}}
            checkedIcon={false}
            uncheckedIcon={false}
            className="switch"
            height={12}
            width={40}
            handleDiameter={20}
            offColor="#02295a"
            onColor="#473dff"
            offHandleColor="#bfe2fd"
            onHandleColor="#bfe2fd"
          />

          <span className="yearly">Yearly</span>
        </div>

      </Box>
    </Container>
  )
}
