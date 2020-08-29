import styled from 'styled-components/native';
import color from '../../Fontes/colors';
import size from '../../Fontes/sizes';
import fontFamily from '../../Fontes/family';
export const ViewBottomLogin = styled.View`
    min-height : 60px;
    max-height : 60px;
    min-width : 200px;
    max-width : 200px;
    background : ${color.logo};
    margin-top : 30px;
    shadow-color: ${color.logo};
    shadow-offset: 6px 4px;
    shadow-opacity: 0.22;
    shadow-radius: 4.65px;
    elevation: 1;
    align-self : center;
    border-radius : 1px;
    align-items : center;
    justify-content : center;
`;
export const TitleButtonLogin = styled.Text `
      font-size : ${size.medium_large}px;
      color : ${color.background};
      font-family : ${fontFamily.fontFamily}

`