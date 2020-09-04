import styled from 'styled-components/native';
import colors from '../../Fontes/colors';
import { Dimensions } from "react-native";

export const Container = styled.ScrollView`
    flex:1;
    background : ${colors.backgroundMain};
`;
export const SubContainer = styled.View `
    flex:1;
    min-height : ${Dimensions.get('window').height}px;
    margin-bottom : 60px;
`