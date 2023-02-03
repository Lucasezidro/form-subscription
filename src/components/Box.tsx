import { Container } from "./styles";
import bgSidebar from "../assets/bg-sidebar-desktop.svg"

type BoxProps = {
  children: React.ReactNode;
  title?: string;
  text?: string;
  goBackButton?: boolean;
  textButton?: string;
}

export function Box ({ children, title, text, goBackButton, textButton }: BoxProps) {

  return (
    <Container>
      <header>
        <img src={bgSidebar} alt="background-sidebar" />
        <div className="menu-item">
          <div className="number"><p>1</p></div>
          <div className="step">
            <p>STEP 1</p>
            <strong><a href="">YOUR INFO</a></strong>
          </div>
          <div className="number"><p>2</p></div>
          <div className="step">
            <p>STEP 2</p>
            <strong><a href="">SELECT PLAN</a></strong>
          </div>
          <div className="number"><p>3</p></div>
          <div className="step">
            <p>STEP 3</p>
            <strong><a href="">ADD-ONS</a></strong>
          </div>
          <div className="number"><p>4</p></div>
          <div className="step">
            <p>STEP 4</p>
            <strong><a href="">SUMMARY</a></strong>
          </div>
        </div>
      </header>

      <div className="title">
        <h1>{title}</h1>

        <p>{text}</p>

        <div>
          {children}
        </div>

      </div>
      <button>Next Step</button>

    </Container>
  )
}