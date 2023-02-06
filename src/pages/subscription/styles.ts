import styled from "styled-components";

export const Container = styled.div`
  form {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    label {
      position: relative;
      right: 18rem;
    }

    .name {
      position: relative;
      right: 19.7rem;
    }

    input {
      position: relative;
      right: 7.5rem;
      width: 26rem;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid hsl(213, 96%, 18%);
    }

    .error {
      position: relative;
      right: 17.3rem;
      color: #FB3640;
      font-size: 14px
    }
  }
`
