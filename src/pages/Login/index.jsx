import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Box
} from '@mui/material';

/*************  ✨ Codeium Command 🌟  *************/
/**
 * Componente de login
 * 
 * @returns Um componente React que renderiza a tela de login
 */
const Login = () => {
  /**
   * Estados do componente
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Fun o chamada quando o formul rio  enviado
   * 
   * @param {Event} event O evento de envio do formul rio
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
        <Typography variant="h5" align="center">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Box marginTop={2}>
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              // O campo de e-mail  obrigat rio
            />
          </Box>
          <Box marginTop={2}>
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              // O campo de senha  obrigat rio
            />
          </Box>
          <Box marginTop={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              // O bot o de login  renderizado com a variant "contained" e
              // o texto "Entrar" em letra mai scula
            >
              Entrar
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

/**
 * M dulo de exporta o do componente Login
 */
/******  fdf39f4f-e457-43bb-8407-2950b2c0e6b1  *******/

export default Login;
