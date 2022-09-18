import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        /* this will pass the user input to the url so we can fetch the user input
        from the url by other components or pages using useParams from react-router-dom */
        navigate('/searched/' + input)
        setInput('');
    }

    return (
        <Box
            component='form'
            sx={{
                '& > :not(style)': { m: 1, width: `25ch` },
                display: 'center',
                justifyContent: 'center',
                marginTop: '3rem',
                marginBottom: '3rem'
            }}
            onSubmit={submitHandler}
            noValidate
            autoComplete='off'
        >
            <TextField
                d="outlined-search"
                label="Search"
                variant="outlined"
                type="text"
                //component='input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onSubmit={submitHandler}
                sx={{
                    //accessing the root of the components in order their color values
                    "& .MuiInputLabel-root": { color: 'gray' },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            //borderColor: "#383838"
                            borderColor: 'gray'
                        }
                    },

                }}
            />
        </Box>
    )
}



export default Search