import { useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { Container } from "./styles";
import IconArcade from "../../assets/icon-arcade.svg";
import IconAdvanced from "../../assets/icon-advanced.svg";
import IconPro from "../../assets/icon-pro.svg";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import { PaymentPlan } from "../../components/PaymentPlan";

export function Payment() {
  const router = useNavigate();
  const [selectArcadeMethod, setSelectArcadeMethod] = useState<boolean>(false);
  const [selectAdvancedMethod, setSelectAdvancedMethod] =
    useState<boolean>(false);
  const [selectProMethod, setSelectProMethod] = useState<boolean>(false);

  const [arcade, setArcade] = useState<number>(9)
  const [advanced, setAdvanced] = useState<number>(12)
  const [pro, setPro] = useState<number>(15)

  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (checked === true) {
      setArcade(120)
    } else {
      setArcade(9)
    }
  }, [arcade, checked])

  useEffect(() => {
    if (checked === true) {
      setAdvanced(135)
    } else {
      setAdvanced(12)
    }
  }, [advanced, checked])

  useEffect(() => {
    if (checked === true) {
      setPro(150)
    } else {
      setPro(15)
    }
  }, [pro, checked])

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
        <div className="cards">
          {!selectArcadeMethod && (
            <div
              className="arcade"
              role="button"
              onClick={() => setSelectArcadeMethod(true)}
              onChange={(e: any) => setArcade(e.target.value)}
            >
              <img src={IconArcade} alt="icon-arcade" />

              <strong>Arcade</strong>
              <p>${arcade}/mo</p>
            </div>
          )}

          {selectArcadeMethod && (
            <div
              className="arcade-selected"
              role="button"
              onClick={() => setSelectArcadeMethod(false)}
              onChange={(e: any) => setArcade(e.target.value)}
            >
              <img src={IconArcade} alt="icon-arcade" />

              <strong>Arcade</strong>
              <p>${arcade}/mo</p>
            </div>
          )}

          {!selectAdvancedMethod && (
            <div
              className="advanced"
              role="button"
              onClick={() => setSelectAdvancedMethod(true)}
              onChange={(e: any) => setAdvanced(e.target.value)}
            >
              <img src={IconAdvanced} alt="icon-advanced" />

              <strong>Advanced</strong>
              <p>${advanced}/mo</p>
            </div>
          )}

          {selectAdvancedMethod && (
            <div
              className="advanced-selected"
              role="button"
              onClick={() => setSelectAdvancedMethod(false)}
              onChange={(e: any) => setAdvanced(e.target.value)}
            >
              <img src={IconAdvanced} alt="icon-advanced" />

              <strong>Advanced</strong>
              <p>${advanced}/mo</p>
            </div>
          )}

          {!selectProMethod && (
            <div
              className="pro"
              role="button"
              onClick={() => setSelectProMethod(true)}
              onChange={(e: any) => setPro(e.target.value)}
            >
              <img src={IconPro} alt="icon-pro" />

              <strong>Pro</strong>
              <p>${pro}/mo</p>
            </div>
          )}

          {selectProMethod && (
            <div
              className="pro-selected"
              role="button"
              onClick={() => setSelectProMethod(false)}
              onChange={(e: any) => setPro(e.target.value)}
            >
              <img src={IconPro} alt="icon-pro" />

              <strong>Pro</strong>
              <p>${pro}/mo</p>
            </div>
          )}
        </div>

        <div className="monthly-payment">
          {!checked && (
            <PaymentPlan
              title="Monthly"
              color="#02295a"
            />
          )}

          {checked && (
            <PaymentPlan
            title="Monthly"
            color="#9699ab"
          />
          )}

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />

          {!checked && (
            <PaymentPlan
            title="Yearly"
            color="#9699ab"
          />
          )}
          {checked && (
            <PaymentPlan
            title="Yearly"
            color="#02295a"
          />
          )}
        </div>
      </Box>
    </Container>
  );
}
