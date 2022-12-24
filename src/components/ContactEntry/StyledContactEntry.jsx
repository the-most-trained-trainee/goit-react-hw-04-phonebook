import styled from 'styled-components';

const ContactEntryStyled = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & span:first-child {
    font-weight: 800;
  }
`;

export default ContactEntryStyled;
