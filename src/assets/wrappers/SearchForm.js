import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 6rem;
  .form {
    background: var(--grey-300);
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    font-size: 1rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    font-size: 1rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default Wrapper;
