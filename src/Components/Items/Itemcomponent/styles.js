import styled from 'styled-components/native';
import colors from '../../../Fontes/colors';
import size from '../../../Fontes/sizes';


export const Container = styled.View`
    height : 150px;
    width : 140px;
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
    align-items: center;
    justify-content : center;
    padding-top:20px;
`
export const ImageItems = styled.Image `
    max-height : 105px;
    max-width : 105px;
    align-self : center;
`
export const TitleButtonOption = styled.Text `
    font-size : ${size.medium}px;
    color : ${colors.botao_selecionado_login};
    font-family : 'segoe';
    align-self : center;
    text-align:center;
    margin-top:10px;
`

export const SubTitleButtonOption = styled(TitleButtonOption) `
    font-size : ${size.small}px;
    color : ${colors.logo};
    margin-top:0px;
`
export const SubTitle = styled(SubTitleButtonOption) `
    margin-bottom : 10px;
`
export const ContainerViewTitleItem = styled.TouchableOpacity `
    flex-direction : row;
    align-items : center;
    width : 140px;
    padding-bottom:10px;

`
export const IconOptionTitle = styled.Text `
        align-self : flex-end;
        text-align : right;
        flex-direction:row;
        margin-right : 10px;
`
export const ViewOptions = styled.View `
    flex:1;
    padding : 10px;
    justify-content : center
`
export const View = styled.View `
    flex:1;
    align-items : center
`