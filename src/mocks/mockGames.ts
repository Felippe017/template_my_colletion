import battlefield2042 from '@app/assets/Rectangle 8.png'
import crashBandicoot4 from '@app/assets/Rectangle 9.png'
import streetFighter from '@app/assets/Rectangle 11.png'
import forzaHorizon from '@app/assets/Rectangle_10.png'
import oriAndBlindForest from '@app/assets/Rectangle 6.png'

export const games: Game[] = [
    {
      id: 1,
      name: "BATTLEFIELD 2042",
      slug: "battlefield-2042",
      image: battlefield2042,
      description: "Battlefield 2042 é um emocionante e revolucionário jogo de tiro em primeira pessoa (FPS) desenvolvido pela Electronic Arts (EA) e pela DICE, lançado em 2021. Este título cativante transporta os jogadores para um cenário futurista e distópico, marcando uma evolução na icônica série Battlefield.",
      price: 249.99,
      genre: "AÇÃO",
    },
    {
      id: 2,
      name: "CRASH BANDICOOT 4",
      slug: "crash-bandicoot-4",
      image: crashBandicoot4,
      description: "Crash Bandicoot 4: It's About Time é um jogo de plataforma desenvolvido pela Toys for Bob e publicado pela Activision, lançado em 2020. Este jogo marca o retorno triunfante de um dos personagens mais icônicos dos video games, Crash Bandicoot.",
      price: 59.99,
      genre: "AVENTURA",
    },
    {
      id: 3,
      name: "STREET FIGHTER CHAMPION EDITION",
      slug: "street-fighter-champion-edition",
      image: streetFighter,
      description: 'Street Fighter V: Champion Edition é a versão definitiva de um dos jogos de luta mais icônicos da história dos videogames, lançado pela Capcom em 2016 e continuamente aprimorado até a edição "Champion Edition" em 2020. Aqui está uma descrição detalhada deste jogo de luta renomado',
      price: 39.99,
      genre: "LUTA",
    },
    {
      id: 4,
      name: "FORZA HORIZON 5",
      slug: "forza-horizon-5",
      image: forzaHorizon,
      description: "O Forza Horizon 5 é um jogo de corrida de mundo aberto desenvolvido pela Playground Games e publicado pela Xbox Game Studios.",
      price: 69.99,
      genre: "CORRIDA",
    },
    {
      id: 5,
      name: "ORI AND THE BLIND FOREST",
      slug: "ori-and-the-blind-forest",
      image: oriAndBlindForest,
      description: "Ori and the Blind Forest é um jogo de plataforma com gráficos deslumbrantes. Foi desenvolvido pela Moon Studios e publicado pela Microsoft Studios. Foi lançado para Xbox One e Windows 10 no dia 11 de março de 2015.",
      price: 29.99,
      genre: "AVENTURA",
    },
  ];
