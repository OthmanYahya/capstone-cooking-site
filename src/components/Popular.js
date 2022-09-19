import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'


function Popular() {

    const [popular, setPopular] = useState([]);

    // const handleClick = () => {
    //     alert('test');
    // }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async function () {
        //storing the fetched data locally because this api only allows 150 requests per day
        const check = localStorage.getItem("popular");

        //checking if there's fetched data stored locally before fetching it
        if (check) {
            //parsing the fetched data from JSON to normal javascript format
            setPopular(JSON.parse(check));
            console.log(popular);
        } else {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`);


                /* storing the fetched data locally as a JSON file, otherwise it wont work when using it 
                after storing the fetched data */
                localStorage.setItem("popular", JSON.stringify(response.data.recipes));
                setPopular(response.data.recipes);
                console.log(popular);
            } catch (err) {
                console.log(err.response.data);
            }

        }

    }

    return (
        <Box sx={{ margin: '4rem 0rem' }}>
            {console.log(popular)}
            <Typography variant='h4' sx={{ marginLeft: "1.3rem", marginBottom: '1rem', fontWeight: 'bold' }}>
                Popular Picks
            </Typography>
            <Splide
                options={{
                    //perPage: 3,
                    padding: '0.13rem',
                    //type: 'loop',
                    autoWidth: true,
                    gap: '1.06rem',
                    drag: 'free',
                    pagination: true,
                    arrows: false,
                }}>
                {
                    popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Link to={'/recipe/' + recipe.id} style={{ textDecoration: 'none' }}>
                                    <Card
                                        sx={{
                                            maxWidth: 355,
                                            height: '99%',
                                            '&:hover': { boxShadow: 5 },
                                            borderRadius: '1rem'
                                        }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="100%"
                                                image={recipe.image}
                                                alt={recipe.title}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    align="center"
                                                    component="div"
                                                    noWrap="false"
                                                    sx={{
                                                        fontWeight: "401",
                                                        whiteSpace: 'initial',
                                                        margin: 'auto'
                                                    }}
                                                >
                                                    {recipe.title}
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </SplideSlide>
                        );
                    })
                }
            </Splide>
        </Box >
    )
}

export default Popular