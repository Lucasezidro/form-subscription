import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 30rem;
  top: 8rem;
  background: hsl(217, 100%, 97%);
  width: 60rem;
  height: 35.5rem;
  border-radius: 16px;
  padding: 24px;

  .title {
    width: max-content;
    position: relative;
    left: 17rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    h1 {
      font-size: 40px;
      font-weight: 700;
    }

    p {
      position: relative;
      left: 6rem;
      bottom: 2rem;
      color: hsl(231, 11%, 63%);
    }
  }

  .content {
    position: absolute;
    left: 32rem;
  }

  .next-step {
    position: relative;
    left: 45rem;
    top: 23.5rem;
    padding: 12px;
    width: 6.5rem;
    border-radius: 6px;
    border: none;
    color: hsl(231, 100%, 99%);
    background-color: hsl(243, 100%, 62%);
    cursor: pointer;
    transition: 0.4s;
    font-weight: bold;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .go-back {
    position: relative;
    left: 16rem;
    top: 23.5rem;
    padding: 12px;
    width: 6.5rem;
    border-radius: 6px;
    border: none;
    color: hsl(243, 100%, 62%);
    background-color: hsl(231, 100%, 99%);
    cursor: pointer;
    transition: 0.4s;
    font-weight: bold;

    &:hover {
      filter: brightness(0.8);
      color: hsl(213, 96%, 18%);
    }
  }
`
