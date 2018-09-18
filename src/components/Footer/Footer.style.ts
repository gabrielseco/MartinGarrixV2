import styled from 'styled-components';

const localProps = {
  textColor: '#6c757d'
}

export const Container = styled.div`
  margin-bottom: 3em;
  padding: 3em 0;
  text-align: center;

  p {
    color: ${localProps.textColor}
  }
`;
