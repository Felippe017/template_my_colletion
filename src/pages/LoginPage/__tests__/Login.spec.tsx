import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Login } from '../LoginPage';
import { MemoryRouter } from 'react-router-dom';

test('Verifica se o título MyCollection é exibido na tela', () => {
    render(<MemoryRouter>
        <Login />
      </MemoryRouter>);
    const titleElement = screen.getByTestId("title-my-collection");
    expect(titleElement).toBeInTheDocument();
})


test('Verifica se os inputs e-mail e senha são exibidos ', () => {
    render(<MemoryRouter>
        <Login />
      </MemoryRouter>);
    const emailInput = screen.getByLabelText(/e-mail/i)
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
})


test('Verifica se o botão "Entrar", "cadastro" e "Permanecer logado" são exibidos na tela ',
    () => {
        render(<MemoryRouter>
            <Login />
          </MemoryRouter>);
        const button = screen.getByRole('button')
        const switchButton = screen.getByLabelText(/permanecer logado/i)
        const registrationButton = screen.getByTestId("registration-id")

        expect(button).toBeInTheDocument()
        expect(switchButton).toBeInTheDocument()
        expect(registrationButton).toBeInTheDocument()
})

test('Verifica erro quando e-mail não é preenchido', async () => {
    render(<MemoryRouter>
        <Login />
      </MemoryRouter>);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    const emailError = screen.getByText(/e-mail é obrigatório/i);
    expect(emailError).toBeInTheDocument();
});

test('Verifica erro quando senha não é preenchida', async () => {
    render(<MemoryRouter>
        <Login />
      </MemoryRouter>);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    const passwordError = screen.getByText(/senha é obrigatória/i);
    expect(passwordError).toBeInTheDocument();
});

test('Verifica erro quando e-mail não é válido', async () => {
    render(<MemoryRouter>
        <Login />
      </MemoryRouter>);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const button = screen.getByRole('button');

    await userEvent.type(emailInput, 'email_invalido');
    await userEvent.click(button);

    const emailError = screen.getByText(/digite um e-mail válido/i);
    expect(emailError).toBeInTheDocument();
});

test('Verifica se há erro quando senha não possui pelo menos 8 caracteres', async () => {
    render(<MemoryRouter>
        <Login />
      </MemoryRouter>);
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button');

    await userEvent.type(passwordInput,'1234567');
    await userEvent.click(button);

    const passwordError = screen.getByText(/senha deve ter no mínimo 8 caracteres/i);
    expect(passwordError).toBeInTheDocument();
});

test('Verifica se o usuário consegue logar na aplicação com sucesso', async () => {
    render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );
    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);
    const button = screen.getByRole('button');

    await userEvent.type(emailInput, 'seu-email@exemplo.com');
    await userEvent.type(passwordInput, 'senha-secreta');

    await userEvent.click(button);

    expect(window.location.pathname).toBe('/');

})