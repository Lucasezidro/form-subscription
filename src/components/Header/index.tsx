import bgSidebar from "../../assets/bg-sidebar-desktop.svg"
import { Container } from "./styles"


export function Header () {
  return (
    <Container>
        <img src={bgSidebar} alt="background-sidebar" />
        <div className="menu-item">
          <div className="number"><p>1</p></div>
          <div className="step">
            <p>STEP 1</p>
            <strong><a href="/">YOUR INFO</a></strong>
          </div>
          <div className="number"><p>2</p></div>
          <div className="step">
            <p>STEP 2</p>
            <strong><a href="/payment">SELECT PLAN</a></strong>
          </div>
          <div className="number"><p>3</p></div>
          <div className="step">
            <p>STEP 3</p>
            <strong><a href="/pick-add-on">ADD-ONS</a></strong>
          </div>
          <div className="number"><p>4</p></div>
          <div className="step">
            <p>STEP 4</p>
            <strong><a href="/summary">SUMMARY</a></strong>
          </div>
        </div>
      </Container>
  )
}