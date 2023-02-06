import styled from "styled-components";

export const Container = styled.div`
  .final-info {
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
    
    .subscription {
      position: relative;
      right: 7.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: 16rem;
      padding: 8px;
      border-bottom: 1px solid hsl(231, 11%, 63%);

      .text-info {
        font-weight: bold;
        display: flex;
        align-items: center;

      }

      a {
        color: hsl(243, 100%, 62%);
        opacity: 0.8;
        text-decoration: none;
        transition: all 0.4s;

        &:hover {
          opacity: 1;
          text-decoration: underline;
        }
      }
    }

    .add-ons {
      position: relative;
      right: 7.5rem;
      top: 1.5rem;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 17rem;
      padding: 8px;
      border-bottom: 1px solid hsl(231, 11%, 63%);

      .ons p {
        color: hsl(231, 11%, 63%);
      }
    }

  }
  .summary {
    position: relative;
    right: 7.5rem;
    top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    .summary-month {
      color: hsl(231, 11%, 63%);
    }

    .summary-value {
      font-weight: bold;
      font-size: 18px;
      color: hsl(243, 100%, 62%);
    }
  }
`
