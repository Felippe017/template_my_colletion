import styled from 'styled-components';
import { Box, Typography, TextField} from '@mui/material'

const FormsBox = styled(Box)`
    margin-top: ${(props) => `${props.marginTop}px`};
    display: ${(props) => `${props.display}`};
    flex-direction: ${(props) => `${props.flexDirection}`};
    align-items: ${(props) => `${props.alignItems}`};
`;

const TitleTypography = styled(Typography)`
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

const TextFieldInput = styled(TextField)`
    border-radius: 5px;
    background-color: #223041;

    & label, & label.Mui-focused {
        color: #3D5470;
    }

    & input::placeholder, & input:focus::placeholder {
        color: #3D5470;
    }

    & input {
        color: white;
    }
`

export {
    FormsBox, TitleTypography, TextFieldInput
}
