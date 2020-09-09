import styled from 'styled-components/native';
import colors from '../../Fontes/colors';
import { Dimensions,Platform } from 'react-native';

export const Container = styled.ScrollView`
  background : ${colors.background};
`;
export const SubContainer = styled.View `
flex:1;
min-height : ${Dimensions.get('window').height}px;
margin-bottom : ${Platform.OS === "ios" ? 0 : 60}px;
`