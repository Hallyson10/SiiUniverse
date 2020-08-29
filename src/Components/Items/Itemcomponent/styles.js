import styled from 'styled-components/native';
import colors from '../../../Fontes/colors';


export const Container = styled.View`
    height : 133px;
    width : 120px;
    background : ${colors.background};
    border-radius : 2px;
    margin-right : 20px;
    margin-top : 10px;
    margin-bottom : 10px;
    padding : 2px;
    shadow-color: ${colors.logo};
    shadow-offset: 6px 4px;
    shadow-opacity: 0.22;
    shadow-radius: 4.65px;
    elevation: 1;
`;
export const SubContainer = styled.View `
    flex:1;
    background : ${colors.background};
`