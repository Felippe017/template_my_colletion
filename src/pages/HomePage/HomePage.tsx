import React, { useState } from "react";
import { 
  HomeContainer, Divider, NameAndPriceHoover, 
  SliderContainer, CardSlider, CardMediaSlider, 
  BoxHooverSlider, HooverNameAndPrice
} from "./styles.tsx";
import { useCart } from "@app/context/CartContext";
import { games } from '@app/mocks/mockGames.ts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Grid, CardMedia, CardActions, Button } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

export const Home: React.FC = () => {
  const [highlightedCardSlider, setHighlightedCardSlider] = useState<number | null>(null);
  const [highlightedCardList, setHighlightedCardList] = useState<number | null>(null);
  const navigate = useNavigate()
  const { addToCart } = useCart();

  const settings = {
    nextArrow: <ArrowForwardIos sx={{ color: '#00FFA3', }} />,
    prevArrow: <ArrowBackIos sx={{ color: '#00FFA3' }} />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <HomeContainer>
        <Box component="div">
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
            }}

          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "30px",
                lineHeight: "36.31px",
                color: "white",
                padding: "30px"
              }}
            >
              DESTAQUES
            </Typography>
            <Divider />
          </Grid>
        </Box>
        <SliderContainer component="div">
          <Slider {...settings} >
            {games.map((game: Game) => (
              <Grid item  key={`S-${game.id}`}>
                <CardSlider
                  onMouseEnter={() => setHighlightedCardSlider(game.id)}
                  onMouseLeave={() => setHighlightedCardSlider(null)}
                  sx={{ 
                    border: highlightedCardSlider === game.id ? "2px solid #00FFA3" : "none",
                  }}
                >
                  <CardMediaSlider
                    height={225} 
                    width={380} 
                    image={game.image}
                    alt={`Imagem do jogo ${game.name}`}
                  />
                    {highlightedCardSlider === game.id && (
                      <BoxHooverSlider>
                        <NameAndPriceHoover>
                          <HooverNameAndPrice>
                            {game.name}
                          </HooverNameAndPrice>
                          <HooverNameAndPrice fontSize={16} color={'#00FFA3'}>
                            R$ {game.price}
                          </HooverNameAndPrice>
                        </NameAndPriceHoover>
                        <CardActions sx={{ marginLeft: '100px'}}>
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={  () => addToCart(
                              { id: game?.id, name: game?.name, price: game?.price })
                            }
                            sx={{ 
                              backgroundColor: '#00FFA3', 
                              color: '#000000',
                              marginRight: '15px',
                              whiteSpace: "nowrap"
                            }}
                          >
                            ADD CART
                          </Button>
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={() => navigate(`/games/${game.slug}`)}
                            sx={{ 
                              backgroundColor: '#00FFA3',
                              color: '#000000'
                            }}
                          >
                            DETALHES
                          </Button>
                        </CardActions>
                      </BoxHooverSlider>
                    )}
                </CardSlider>
              </Grid>
            ))}      
          </Slider>
        </SliderContainer>
        
        <Box component="div">
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "30px",
                lineHeight: "36.31px",
                color: "white",
                padding: "30px"
              }}
            >
              Mais Vendidos
            </Typography>
            <Divider />
          </Grid>
        </Box>
        <Box component="div" sx={{ width: '90vw', marginLeft: '50px'}}>
          <Grid container spacing={2}>
            {games.slice(0, 3).map((game: Game) => (
              <Grid item xs={4} key={`L-${game.id}`}>
                <CardSlider
                  onMouseEnter={() => setHighlightedCardList(game.id)}
                  onMouseLeave={() => setHighlightedCardList(null)}
                  sx={{ 
                    border: highlightedCardList === game.id ? "2px solid #00FFA3" : "none"
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{  width: '380px', height: "225px" }}
                    image={game.image}
                    alt={`Imagem do jogo ${game.name}`}
                  />
                      {highlightedCardList === game.id && (
                    <BoxHooverSlider>
                      <NameAndPriceHoover>
                        <HooverNameAndPrice>
                          {game.name}
                        </HooverNameAndPrice>
                        <HooverNameAndPrice fontSize={16} color={'#00FFA3'}>
                          R$ {game.price}
                        </HooverNameAndPrice>
                      </NameAndPriceHoover>
                      <CardActions sx={{ marginLeft: '100px'}}>
                        <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          onClick={  () => addToCart(
                            { id: game?.id, name: game?.name, price: game?.price })
                          }
                          sx={{ 
                            backgroundColor: '#00FFA3', 
                            color: '#000000',
                            marginRight: '15px',
                            whiteSpace: "nowrap"
                          }}
                        >
                          ADD CART
                        </Button>
                        <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          onClick={() => navigate(`/games/${game.slug}`)}
                          sx={{ 
                            backgroundColor: '#00FFA3',
                            color: '#000000'
                          }}
                        >
                          DETALHES
                        </Button>
                      </CardActions>
                    </BoxHooverSlider>
                  )}
                </CardSlider>
              </Grid>
            ))}
          </Grid>
        </Box>
      </HomeContainer>
    </>
  );
};
