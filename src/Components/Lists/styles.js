import styled from 'styled-components/native';
import colors from '../../Fontes/colors';
import size from '../../Fontes/sizes';

export const ContainerVertical = styled.View `
  background : ${colors.backgroundMain};
  margin-bottom : 10px;
  padding-top:20px;
`
export const ContainerTitleOption = styled.View `
    margin-bottom : 4px;
    padding-bottom:6px;
    align-items : flex-start;
    margin-left : 24px;
`
export const TitleOption = styled.Text `
    font-size: ${size.medium_large}px;
    border-bottom-width:2px;
    border-color : ${colors.azul};
    font-family : 'segoe';
    font-weight : 900
`