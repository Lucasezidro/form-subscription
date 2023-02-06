import styled from "styled-components";

export const Container = styled.div`
  .card-ons {
    display: flex;  
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .card {
      border: 1px solid hsl(213, 96%, 18%);
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      border-radius: 8px;
      width: 30rem;
      margin-top: 15px;
      position: relative;
      right: 8rem;
      bottom: 2rem;

      input {
        width: 25px;
        height: 16px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          filter: brightness(0.8)
        }
      }

      .info {
        position: relative;
        right: 5rem;
        top: .5rem;

        p {
          position: relative;
          bottom: .3rem;
          font-size: 14px;
          color: hsl(231, 11%, 63%);
        }
      }

      .info-custom {
        position: relative;
        right: 4rem;
        top: .5rem;

        p {
          position: relative;
          bottom: .3rem;
          font-size: 14px;
          color: hsl(231, 11%, 63%);
        }
      }

      .value {
        color: hsl(243, 100%, 62%);
        font-size: 14px;
      }
    }
  }
`
