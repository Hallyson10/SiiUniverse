import styled from 'styled-components/native';
import fontFamily from '../../../Fontes/family';
import colors from '../../../Fontes/colors';

export const TextLogo = styled.Text `
align-self : center;
margin-bottom : 20px;
color : ${colors.logo};
font-size : 24px;
font-family : ${fontFamily.fontFamily}
`
export const ImageDesignTop = styled.Image `
    
`
export const ImageDesignBottom = styled(ImageDesignTop) `
    align-self:flex-end;
    z-index: 1;
    position : absolute;
    bottom : 0;
    margin-bottom : -60px;
`
