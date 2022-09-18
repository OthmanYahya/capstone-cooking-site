import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Search from '../components/Search';

function TestRecipe() {

    const [details, setDetails] = useState({});
    let params = useParams();

    const fetchedDetails = async () => {
        const data = await fetch(`https:/api.spoonacular.com/recipes/${params.id}/information?apiKey=e8b192f115124219a6ae87a11a7591c8`)
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchedDetails();
    }, [params.name]);

    return (
        <Container position='static' maxWidth="xl" sx={{ marginTop: '2rem' }}>
            <Search />
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <Paper
                                component='img'
                                src={details.image}
                                alt={details.title}
                                sx={{
                                    height: '350',
                                    width: '100%',
                                    marginTop: '2.7rem',
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                }}
                            />
                        </Grid>
                        <Typography
                            sx={{
                                margin: '2rem',
                                height: '100%',
                                width: 700,
                                marginTop: '3.7rem',
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >
                            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>{details.title}</Typography>
                            <br />
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Summary: </Typography>
                            <Typography dangerouslySetInnerHTML={{ __html: details.summary }} />

                            <br /><br />
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Ingredients: </Typography>
                            <ul>
                                {details.extendedIngredients && details.extendedIngredients.map((Ingredient) => (
                                    <li key={Ingredient.id}>
                                        {Ingredient.original}
                                    </li>
                                ))}
                            </ul>

                            <br /><br />
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Instructions: </Typography>
                            <Typography dangerouslySetInnerHTML={{ __html: details.instructions }} />

                        </Typography>

                    </Grid>
                </Grid>
                <Grid item xs={12}>


                </Grid>
            </Grid>
        </Container >
    )
}

export default TestRecipe