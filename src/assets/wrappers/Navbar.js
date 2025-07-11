import styled from 'styled-components';

const Wrapper = styled.nav`
    background: var(--grey-200);
    .nav-center {
      /* background: var(--grey-200); */
      width: var(--view-width);
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding: 1.5rem 2rem;
      padding-right: 0rem;
      padding-left: 0rem;
    }
    .logo {
      font-size: clamp(3.5rem, 3vw, 3rem);
      color: var(--primary-500);
      font-weight: 700;
      letter-spacing: 3px;
      
    }
    .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    font-size: clamp(2rem, 1vw, 1rem);
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
    margin-top: 1.1rem
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
