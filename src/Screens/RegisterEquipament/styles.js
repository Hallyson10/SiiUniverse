import styled from 'styled-components/native';
import colors from '../../Fontes/colors';
import size from '../../Fontes/sizes';

export const Container = styled.View`
  flex:1;
  background : black;
  background-color: rgba(0,0,0,0.8);
  align-items : center;
  justify-content : center
`;
export const ContainerView = styled.View`
  flex:1;
  background : ${colors.background};
  max-height : 380px;
  min-height : 380px;
  min-width : 280px;
  padding : 10px;
  border-radius : 2px;
`;

export const ViewVideo = styled.View `
    flex: 1;
    margin-bottom : 10px;
    border-radius : 2px;
    margin-top:10px;
    background : black
`
export const ViewSubContainer = styled.View `
    flex:1;
`
export const TitleCode = styled.Text `
    font-size : ${size.medium_large}px;
    margin-top : 10px;
    color:${colors.botao_selecionado_login}
`
export const InputCode = styled.TextInput `
    max-height : 90px;
    min-height : 90px;
    margin-top : 10px;
    border-radius : 2px;
    border-width : 1px;
    border-color : ${colors.logo};
    padding : 20px;
    margin-bottom: 20px;
    font-size : ${size.medium}px;
    color : ${colors.letras_login}
`
export const ButtonPauseVideo = styled.View `
    min-height : 100px;
    min-width : 100px;
    background : black;
    align-self : center

`