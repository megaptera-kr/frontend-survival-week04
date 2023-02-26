import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

function Title({ title }: { title: string }) {
  return (
    <TitleContainer>
      <h1>{title}</h1>
    </TitleContainer>
  );
}

export default Title;
