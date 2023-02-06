import styled from "styled-components";

export const Container = styled.header`
    position: absolute;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .menu-item {
      position: relative;
      bottom: 35rem;
      left: 3rem;
    }

    .number {
      position: relative;
      right: 30px;
      top: 3rem;
      width: 20px;
      height: 20px;
      border: 1px solid hsl(231, 100%, 99%);
      padding: 6px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.5s; 

      &:hover {
          background: hsl(206, 94%, 87%);
          color: #000;
        }

      p {
        color: hsl(231, 100%, 99%);
        font-size: 14px;
        position: relative;
        bottom: 12px;
        left: 6px;
        font-weight: 500;
      }
    }

    .step {
      position: relative;
      left: 1rem;
      bottom: .5rem;

      p {
        font-size: 13px;
        color: hsl(231, 100%, 99%);
        position: relative;
        top: 5px;
        font-weight: 300;
      }

      a {
        color: hsl(231, 100%, 99%);
        text-decoration: none;
      }
    }
`