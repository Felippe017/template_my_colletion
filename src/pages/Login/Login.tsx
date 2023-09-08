import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
  };

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
              color: '#00FFA3'
            }}
          >
            MyCollection
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
            <TextField
              sx={{
                backgroundColor: '#223041',
                borderRadius: '5px'
              }}
              value={ email }
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
              }}
              margin="normal"
              required
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
                borderRadius: '5px'
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
              value={ password }
              margin="normal"
              required
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
