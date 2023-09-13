import styled from 'styled-components'
import { Typography, Drawer, DrawerProps, TextField } from '@mui/material'

interface ExtendedDrawerProps extends DrawerProps {
    width?: number;
}

const RightArrow = styled("div")((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    color: props.color
}));

const TitleHeaderTypography = styled(Typography)`
    font-weight: ${(props) => `${props.fontWeight}px`};
    font-size: ${(props) => `${props.fontSize}px`};
    font-family: ${(props) => `${props.fontFamily}`};
    position: ${(props) => `${props.position}`};
    &::before {
        content: "My";
        color: #00FFA3;
    }

    &::after {
        content: "Collection";
        color: white;
    };
`

const DrawerComponent = styled(Drawer)<ExtendedDrawerProps>`
    width: ${(props) => `${props.width}px`};
    flex-shrink: 0;
    & .MuiDrawer-paper {
        width: ${(props) => `${props.width}px`};
        box-sizing: "border-box";
    }
`
const TextFieldInput = styled(TextField)`
    width: 203px;
    left: 18px;
    top: 12px;
    border-radius: 5px;
    background-color: '#F4F4F41';
`

export { RightArrow, TitleHeaderTypography, DrawerComponent, TextFieldInput }
