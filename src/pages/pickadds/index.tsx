import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";
import { useState } from "react";

export function PickAdds () {
  const router = useNavigate()
  const [pickOns, setPickOns] = useState<number | boolean>()
  let onlineServiceValue = 1
  let largerStorageValue = 2
  let customProfileValue = 2

  console.log(pickOns)

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
            <input 
              type="checkbox" 
              onChange={() => setPickOns(onlineServiceValue)}
            />

            <div className="info">
              <strong>Online Service</strong>
              <p>Acess to multiple games</p>
            </div>

            <p className="value">+${onlineServiceValue}/mo</p>
          </div>
        </div>

        <div className="card-ons">
          <div className="card">
            <input 
              type="checkbox" 
              onChange={() => setPickOns(largerStorageValue)}
            />

            <div className="info">
              <strong>Larger Storage</strong>
              <p>Extra 1TB of cloud save</p>
            </div>

            <p className="value">+${largerStorageValue}/mo</p>
          </div>
        </div>

        <div className="card-ons">
          <div className="card">
            <input 
              type="checkbox" 
              onChange={() => setPickOns(customProfileValue)}
            />

            <div className="info-custom">
              <strong>Custimizable Profile</strong>
              <p>Custom theme on your profile</p>
            </div>

            <p className="value">+${customProfileValue}/mo</p>
          </div>
        </div>

      </Box>
    </Container>
  )
}
