import * as S from "./Main.styles";

export const Main = () => {
  return (
    <S.Wrapper >
      <S.Logo src='/img/logo.svg' alt="Ilustração de uma pessoa caminhando da esquerda para a direita com a imagem de um átomo ao fundo. Uma planta no lado direito." />
      <S.Title>
        React Avançado - Boilerplate
      </S.Title>
      <S.Description>
        TypeScript, Emotion, React.js powered by Next.js
      </S.Description>
      <S.Illustration src="/img/programmer.svg" alt="Ilustração de uma programadora sentada de frente a tela de um computador segurando uma xícara na mão esquerda" />
    </S.Wrapper>
  );
}