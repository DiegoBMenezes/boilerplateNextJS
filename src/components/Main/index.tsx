import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, React, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)
export default Main
