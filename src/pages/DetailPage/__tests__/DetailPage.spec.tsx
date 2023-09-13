import { render, screen } from "@testing-library/react";
import { Detail } from "../DetailPage";
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from "@app/context/CartContext"; 

test("Verifica se o nome e a imagem do jogo  são exibidos na tela", () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Detail />
        </CartProvider>
      </MemoryRouter>  
    );
    const nameGameElement = screen.getByTestId("name-game");
    const imageGameElement = screen.getByTestId("image-game");

    expect(nameGameElement).toBeInTheDocument();
    expect(imageGameElement).toBeInTheDocument();
});
 
test("Verifica se o caminho ' HOME / gênero-do-jogo / nome-do-jogo' aparecem na tela", () => {
    render(
    <MemoryRouter>
      <CartProvider>
      <Detail />
      </CartProvider>
    </MemoryRouter>  );
    const pathGenreAndGame = screen.getByTestId("typography-path");

    expect(pathGenreAndGame).toBeInTheDocument();
});

test("Verifica se a descrição do jogo é renderizada na tela", async () => {
  render(
    <MemoryRouter>
      <CartProvider>
      <Detail />
      </CartProvider>
    </MemoryRouter>  
  );
  const descriptionGame = screen.getByTestId("description-game");

  expect(descriptionGame).toBeInTheDocument();
});

test(`Verifica se o gênero e o preço do jogo são renderizados na tela`, async () => {
  render(
    <MemoryRouter>
      <CartProvider>
      <Detail />
      </CartProvider>
    </MemoryRouter>  
  );

  const genreGame = screen.getByTestId("genre-game");
  const priceGame = screen.getByTestId("price-game");

  expect(genreGame).toBeInTheDocument();
  expect(priceGame).toBeInTheDocument();
});

test(`Verifica se os botões "ADICIONAR AO CARRINHO" e "COMPRAR" são renderizados na tela`,
    () => {
      render(
        <MemoryRouter>
          <CartProvider>
          <Detail />
          </CartProvider>
        </MemoryRouter>  
      );
    
        const buttonShoppingCar = screen.getByTestId("add-to-shopping-car");
        const buttonBuyGame = screen.getByTestId("buy-game");
    
        expect(buttonShoppingCar).toBeInTheDocument();
        expect(buttonBuyGame).toBeInTheDocument();
});

  

