import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useNavigate } from "react-router-dom";


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
      navigate("/", { replace: true })
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontWeight: 400,
              fontSize: '30px',
              fontFamily: 'Inter',
              lineHeight: '36.31px',
              position: 'relative',
              '&::before': {
                content: "'My'",
                color: '#00FFA3',
              },
              '&::after': {
                content: "'Collection'",
                color: 'white'
              },
            }}
          />
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 0 }}>
            <TextField
              sx={{
                backgroundColor: '#223041',
                borderRadius: '5px',
                '& label, & label.Mui-focused': {
                  color: '#3D5470',
                },
                '& input::placeholder, & input:focus::placeholder': {
                  color: '#3D5470', 
                },
                '& input': {
                  color: 'white'
                }
              }}
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
            <TextField
              sx={{
                backgroundColor: '#223041',
                borderRadius: '5px',
                '& label, & label.Mui-focused': {
                  color: '#3D5470',
                },
                '& input::placeholder, & input:focus::placeholder': {
                  color: '#3D5470', 
                },
                '& input': {
                  color: 'white'
                }
              }}
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
              <Grid item xs>
                <FormControlLabel
                  control={<Switch data-testid="switch-id" defaultChecked />}
                  label="PERMANECER LOGADO"
                  style={{ color: 'white' }}
                />
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" data-testid="registration-id">
                  {"cadastro"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
