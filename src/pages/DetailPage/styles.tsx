import styled from 'styled-components'
import { createTheme } from '@mui/material/styles';
import { Typography, CardMedia, Card } from '@mui/material';
import { CardMediaProps } from '@mui/material/CardMedia';

const defaultTheme = createTheme({
  palette: {
      background: {
          default: '#2B3C51'
      },
      primary: {
          main: '#00FFA3'
      }
  }
});

interface CustomCardMediaProps extends CardMediaProps {
  component: React.ElementType;
}

const DetailContainer = styled.div`
  background-color: #2B3C51;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`

const Divider = styled.hr`
  border-color: #223041;
  width: 57vw;
  margin-left: 30px;
`;

const BannerWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const BannerImage = styled(CardMedia)<CustomCardMediaProps>`
  height: 410px;
  image-rendering: auto;
  object-fit: fill;
`;

const GameTitle = styled(Typography)`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px 8px; 
  color: white; 
  font-family: 'Inter';
  font-weight: 400;
  font-size: '30px';
  line-height: '36.31px';
`;

const BoxPath = styled(Typography)`
  font-family: 'Inter';
  font-weight: 400;
  font-size: '20px';
  line-height: "24.2px";
`

const BoxInformationGame = styled(Typography)`
  font-family: 'Inter';
  font-weight: 400;
  font-size: '20px';
  line-height: "24.2px";

`

export {
  DetailContainer,
  Divider,
  BannerWrapper,
  BannerImage,
  GameTitle,
  defaultTheme,
  BoxPath,
  BoxInformationGame
}