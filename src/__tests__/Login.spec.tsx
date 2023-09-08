import { render, screen } from '@testing-library/react';
import { Login } from '../pages/Login/Login';

test('Verifica se os elementos da tela de Login aparecem na tela', () => {
    render(<Login />);

    // Verifica se o título MyCollection é exibido
    const titleElement = screen.getByText(/mycollection/i);
    expect(titleElement).toBeInTheDocument();

    // Verifica se os inputs e-mail e senha são exibidos e tem os types corretos
    const emailInput = screen.getByLabelText(/e-mail/i)
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Verifica se o botão "Entrar" está na tela
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    // Verifica se o botão "permanecer logado" está na tela
    const switchButton = screen.getByLabelText(/permanecer logado/i)
    expect(switchButton).toBeInTheDocument()

    // Verifica se o botão "cadastro" está na tela
    const registrationButton = screen.getByTestId("registration-id")
    expect(registrationButton).toBeInTheDocument()
})
/* 
test('', () => {

})
 */

