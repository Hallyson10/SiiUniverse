import styled from 'styled-components/native';
import colors from '../../../Fontes/colors';
import size from '../../../Fontes/sizes';

export const Container = styled.View`
  border-width : 0.9px;
  border-color : ${colors.letras_login};
  margin-bottom : 10px;
  margin-top : 20px;
  margin-horizontal : 44px;
  border-radius : 4px;
  background : ${colors.background};
  shadow-color: #000;
  shadow-offset: 2px 2px;
    shadow-opacity: 0.22;
    shadow-radius: 2.22px;
    elevation: 2;
`;
export const Buttom = styled.TextInput `
    min-height : 68px;
    max-height : 68px;
    padding-left : 20px;
    font-size : ${size.medium_large}px;
    color : ${colors.letras_login};

`
export const ButtonBorder = styled(Buttom) `
    border-bottom-width : 1px;
    border-color : ${colors.letras_login};
`