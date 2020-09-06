import styled from 'styled-components/native';
import colors from "../../Fontes/colors";
import size from "../../Fontes/sizes";
import { Platform } from "react-native";

export const ImageDesignBottom = styled.Image `
    align-self:flex-end;
    position : absolute;
    bottom : 0;
    margin-bottom : ${Platform.OS === "ios" ? -20 : 0}px;
`
export const ImageDesignTop = styled.Image`
    position :absolute;
    top : 0;
`;
export const ContainerView = styled.View`
  flex:1;
  background : ${colors.background};
  max-height : 380px;
  min-height : 380px;
  min-width : 280px;
  padding : 20px;
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