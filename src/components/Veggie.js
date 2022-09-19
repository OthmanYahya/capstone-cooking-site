import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom';

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    const handleClick = () => {

    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async function () {

        //storing the fetched data locally because this api only allows 150 requests per day
        const check = localStorage.getItem("veggie");


        //checking if there's fetched data stored locally before fetching it
        if (check) {
            //parsing the fetched data from JSON to normal javascript format
            setVeggie(JSON.parse(check));
            console.log(veggie);
        } else {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=vegetarian`);

                /* storing the fetched data locally as a JSON file, otherwise it wont work when using it 
                after storing the fetched data */
                localStorage.setItem("veggie", JSON.stringify(response.data.recipes));
                setVeggie(response.data.recipes);
                console.log(veggie);
            } catch (err) {
                console.log(err.response.data);
            }

        }

    }

    return (
        <Box sx={{ margin: '4rem 0rem' }}>

            <Typography variant='h5' sx={{ marginLeft: "1.55rem", marginBottom: '1rem', fontWeight: 'bold' }}>
                Our Vegetarian Picks
            </Typography>
            <Splide
                options={{
                    padding: '0.13rem',
                    //perPage: 3,
                    //type: 'loop',
                    autoWidth: true,
                    gap: '1.13rem',
                    drag: 'free',
                    pagination: true,
                    arrows: false,
                    borderRadius: '1rem',
                }}>
                {
                    veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Link to={'/recipe/' + recipe.id} style={{ textDecoration: 'none' }}>
                                    <Card
                                        onClick={() => handleClick()}
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

export default Veggie