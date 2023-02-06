import { Header } from "./Header";
import { Container } from "./styles";
type BoxProps = {
  children: React.ReactNode;
  title?: string;
  text?: string;
  goBackButton?: boolean;
  textButton?: string;
  onClickNextButton?: () => void
  onClickBackButton?: () => void
}

export function Box ({ children, title, text, goBackButton, textButton, onClickNextButton, onClickBackButton }: BoxProps) {

  return (
    <Container>
      <Header />

      <div className="title">
        <h1>{title}</h1>

        <p>{text}</p>
      </div>

        <div className="content">
          {children}
        </div>

      <button className="next-step" onClick={onClickNextButton}>{textButton}</button>

      {goBackButton && (
        <button className="go-back" onClick={onClickBackButton}>Go Back</button>
      )}

    </Container>
  )
}