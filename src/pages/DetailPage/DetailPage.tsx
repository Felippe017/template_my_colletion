import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from "@app/context/CartContext";
import { games } from '@app/mocks/mockGames';
import { DetailContainer, Divider, BannerWrapper,
    BannerImage, GameTitle, defaultTheme, BoxPath } from './styles'
import { ThemeProvider } from '@mui/material/styles';
import { Box, Grid, Button, Typography } from '@mui/material';

export const Detail: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const currentGames:Game | undefined = games.find((game) => game.slug === params.game);
    
    useEffect(() => {
        !currentGames ? navigate('/login') : null
    }, [])
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <DetailContainer>
                <BannerWrapper>
                    <BannerImage
                        data-testid="image-game"
                        src={currentGames?.image}
                        title={currentGames?.name}
                        sx={{ imageRendering: 'auto', objectFit: 'fill' }}
                        component="img"
                    />
                    <GameTitle data-testid="name-game" variant="h6">{currentGames?.name}</GameTitle>
                </BannerWrapper>
                <Box component="div" sx={{ marginLeft: "40px", marginTop: "22px" }}>
                    <Grid container
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            borderRadius: '5px'
                        }}

                    >
                        <BoxPath
                            noWrap
                            data-testid="typography-path"
                            sx={{         
                                '&::before': {
                                    content: `'HOME / ${currentGames?.genre} / '`,
                                    color: 'white',
                                },
                                '&::after': {
                                    content: `' ${currentGames?.name}'`,
                                    color: '#00FFA3',
                                },
                            }}
                        />
                        <Divider />
                    </Grid>
                </Box>
                <Grid container spacing={6} sx={{ flexWrap: 'nowrap' }}>
                    <Grid item xs={8}>
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: '#223041',
                                width: '65vw',
                                marginLeft: '40px',
                                marginTop: '25px'
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "30px"
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    noWrap
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "20px",
                                        lineHeight: "24.2px",
                                        color: '#00FFA3',
                                    }}
                                >
                                    DESCRIÇÃO:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "20px",
                                        lineHeight: "24.2px",
                                        color: "white",
                                        marginTop: "30px",
                                        marginLeft: "12px"
                                    }}
                                    data-testid="description-game"
                                >
                                    { currentGames?.description }
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid
                        item xs={4}
                        columns={4}
                        sx={{ 
                            boxSizing: 'content-box',
                            marginLeft: '28px',
                            marginTop: '25px'
                        }}
                    >
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: '#223041',
                                width: '26vw',
                                borderRadius: '5px',                              
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "15px"
                                }}

                            >
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "15px",
                                        lineHeight: "18.15px",
                                        color: '#00FFA3',
                                    }}
                                >
                                    TIPO:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "20px",
                                        lineHeight: "24.2px",
                                        color: "white",
                                        marginTop: "10px"
                                    }}
                                    data-testid="genre-game"
                                >
                                    { currentGames?.genre }
                                </Typography>
                            </Grid>
                        </Box>
                        <Box
                            component="div"
                            sx={{
                                backgroundColor: '#223041',
                                width: '26vw',
                                borderRadius: '5px',
                                marginTop: '15px', 
                                marginBottom: '18px'
                            }}
                        >
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "15px"
                                }}

                            >
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "15px",
                                        lineHeight: "18.15px",
                                        color: '#00FFA3',
                                    }}
                                >
                                    VALOR:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: 400,
                                        fontSize: "20px",
                                        lineHeight: "24.2px",
                                        color: "white",
                                        marginTop: "10px"
                                    }}
                                    data-testid="price-game"
                                >
                                    { `R$ ${ currentGames?.price }` }
                                </Typography>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '26vw', boxSizing: 'content-box' }}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                data-testid="add-to-shopping-car"
                                onClick={
                                    () => addToCart(
                                        { id: currentGames?.id, name: currentGames?.name, price: currentGames?.price })
                                }
                                sx={{ mt: 3, mb: 2,  boxSizing: 'border-box' }}
                            >
                                ADICIONAR AO CARRINHO
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2,  boxSizing: 'border-box', marginTop: '0' }}
                                data-testid="buy-game"
                            >
                                COMPRAR
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </DetailContainer>
        </ThemeProvider>     
    )

}
