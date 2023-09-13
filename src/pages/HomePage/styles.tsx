import styled from "styled-components";
import { Box, Card, CardMedia, Typography } from '@mui/material'

const HomeContainer = styled.body`
  background-color: #2b3c51;
  min-width: 100vw;
  margin-top: 60px;
`

const Divider = styled.hr`
  border-color: #223041;
  width: 70vw;
  margin-left: 3px;
`

const NameAndPriceHoover = styled.div`
  padding: 10px;
`

const SliderContainer = styled(Box)`
  width: 90vw;
  margin-left: 50px;
`

const CardSlider = styled(Card)`
  position: relative;
  width: 380px;
`

const CardMediaSlider = styled(CardMedia)<{ height: number; width: number, alt: string }>`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  alt: ${(props) => `Imagem do game ${props.alt}`};
`

const BoxHooverSlider = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
`

const HooverNameAndPrice = styled(Typography)`
  font-family: 'Inter';
  font-weight: 400;
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: ${(props) => `${props.color}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`

export {
  HomeContainer,
  Divider,
  NameAndPriceHoover,
  SliderContainer,
  CardSlider,
  CardMediaSlider,
  BoxHooverSlider,
  HooverNameAndPrice
};
