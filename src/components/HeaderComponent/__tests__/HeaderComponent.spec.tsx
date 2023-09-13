import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HeaderComponent } from "../HeaderComponent";
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from "@app/context/CartContext";

test("Verifica se o título MyCollection e o hamburguer menu são exibidos na tela", () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <HeaderComponent />
      </CartProvider>
    </MemoryRouter>  
  );
  const titleElement = screen.getByTestId("title-header");
  const hamburguerElement = screen.getByTestId("hamburguer-menu");

  expect(titleElement).toBeInTheDocument();
  expect(hamburguerElement).toBeInTheDocument();
});

test("Verifica se o carrinho de compras e o ícone de perfil aparecem na tela", () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <HeaderComponent />
      </CartProvider>
    </MemoryRouter>  
  );
  const shoppingCartElement = screen.getByTestId("shopping-cart");
  const profileIcon = screen.getByTestId("profile-icon");

  expect(shoppingCartElement).toBeInTheDocument();
  expect(profileIcon).toBeInTheDocument();
});

test("Verifica se o sidebar é aberto quando o botão hamburger é clicado", async () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <HeaderComponent />
      </CartProvider>
    </MemoryRouter>  
  );

  const hamburguerElement = screen.getByTestId("hamburguer-menu");
  await userEvent.click(hamburguerElement);

  const sidebarAfterClick = screen.getByTestId("sidebar-menu");
  expect(sidebarAfterClick).toBeInTheDocument();
});

test(`Verifica se quando o sidebar é aberto, aparecem os botões home e perfil,
searchbar e o botão para fechar o sidebar`, async () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <HeaderComponent />
      </CartProvider>
    </MemoryRouter>  
  );

  const hamburguerElement = screen.getByTestId("hamburguer-menu");
  await userEvent.click(hamburguerElement);

  const sidebarAfterClick = screen.getByTestId("sidebar-menu");
  expect(sidebarAfterClick).toBeInTheDocument();

  const backButtonElement = screen.getByTestId("back-button");
  const searchBarElement = screen.getByTestId("search-bar");
  const homeButtonElement = screen.getByTestId("home-button");
  const profileButtonElement = screen.getByTestId("profile-button");

  expect(backButtonElement).toBeInTheDocument();
  expect(searchBarElement).toBeInTheDocument();
  expect(homeButtonElement).toBeInTheDocument();
  expect(profileButtonElement).toBeInTheDocument();
});
