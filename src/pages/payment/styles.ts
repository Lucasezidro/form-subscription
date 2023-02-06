import styled from "styled-components";

export const Container = styled.div`
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    position: absolute;
    right: -21.5rem;
    padding: 8px;
    cursor: pointer;

    .arcade {
      border: 1px solid hsl(213, 96%, 18%);
      padding: 10px;
      width: 120px;
      height: 150px;
      border-radius: 8px;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;

      img {
        position: relative;
        bottom: 1rem;
      }

      strong {
        position: relative;
        top: 2rem;
        font-size: 15px;
      }

      p {
        position: relative;
        top: 2rem;
        font-size: 12px;
        color: hsl(231, 11%, 63%);
      }
    }

    .advanced {
      border: 1px solid hsl(213, 96%, 18%);
      padding: 10px;
      width: 120px;
      height: 150px;
      border-radius: 8px;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;

      img {
        position: relative;
        bottom: 1rem;
      }

      strong {
        position: relative;
        top: 2rem;
        font-size: 15px;
      }

      p {
        position: relative;
        top: 2rem;
        font-size: 12px;
        color: hsl(231, 11%, 63%);
      }
    }

    .pro {
      border: 1px solid hsl(213, 96%, 18%);
      padding: 10px;
      width: 120px;
      height: 150px;
      border-radius: 8px;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;

      img {
        position: relative;
        bottom: 1rem;
      }

      strong {
        position: relative;
        top: 2rem;
        font-size: 15px;
      }

      p {
        position: relative;
        top: 2rem;
        font-size: 12px;
        color: hsl(231, 11%, 63%);
      }
    }
  }

  .monthly-payment {
    position: absolute;
    top: 14rem;
    left: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;  

    span {
      font-weight: bold;
    }

    .yearly {
      color: hsl(231, 11%, 63%);
    }
  }
`
