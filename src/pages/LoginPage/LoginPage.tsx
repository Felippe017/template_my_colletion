import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Button, CssBaseline, FormControlLabel, Link, Grid,
  Box, Container, Switch } from '@mui/material'
import { FormsBox, TitleTypography, TextFieldInput } from './styles'  

export const Login: React.FC = () => {
  const navigate = useNavigate()
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

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('E-mail é obrigatório'),
    password: yup
      .string()
      .min(8, 'Senha deve ter no mínimo 8 caracteres')
      .required('Senha é obrigatória'),
  });
 
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      navigate("/home", { replace: true })
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FormsBox
          marginTop={8}
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <TitleTypography
            fontWeight={400}
            fontSize={30}
            fontFamily="Inter"
            position="relative"
            data-testid="title-my-collection" 
          />
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 0 }}>
            <TextFieldInput
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
              fullWidth
              id="email"
              data-testid='email'
              label="E-MAIL"
              placeholder="E-MAIL"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextFieldInput
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
              fullWidth
              name="password"
              label="SENHA"
              placeholder='SENHA'
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ENTRAR
            </Button>
            <Grid container direction={"column"} alignItems="flex-end">
              <Grid item>
                <FormControlLabel
                  control={<Switch data-testid="switch-id" defaultChecked />}
                  label="PERMANECER LOGADO"
                  sx={{ color: 'white' }}
                />
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" data-testid="registration-id">
                  {"cadastro"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </FormsBox>
      </Container>
    </ThemeProvider>
  )
}
