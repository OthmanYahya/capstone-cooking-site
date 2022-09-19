import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Category from '../components/Category';
import Search from '../components/Search';
import Container from '@mui/material/Container';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${name}`);
            setSearchedRecipes(response.data.results);
            console.log(searchedRecipes);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    useEffect(() => {
        //(params.search comes from the dynamic link in the Pages component)
        getSearched(params.search);
        console.log(params);
    }, [params.search]);

    return (
        <Container maxWidth='xl'>
            <Search />
            <Category />
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
                gridGap: '3rem'
            }}>
                {searchedRecipes.map((item) => {
                    return (
                        <Link to={`/recipe/` + item.id} style={{ textDecoration: 'none' }}>
                            <Card
                                key={item.id}
                                sx={{
                                    maxWidth: 490,
                                    height: '99%',
                                    '&:hover': { boxShadow: 5 },
                                    borderRadius: '1rem'
                                }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={item.image}
                                        alt={item.title}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="body2"
                                            align="center"
                                            component="div"
                                            noWrap="false"
                                            sx={{ fontWeight: "401" }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    )
                })}
            </Box>
        </Container>
    )
}

export default Searched