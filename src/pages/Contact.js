import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';

function Contact() {

    const [email, setEmail] = useState('');
    const [submission, setSubmission] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('');
        setSubmission('');
        setTimeout(function () { alert("Thank you for your submission"); }, 50);
    }

    return (
        <Container maxWidth='md'>
            <FormControl
                sx={{
                    marginTop: '7rem',
                    align: 'center',
                    width: '100%',
                }}
            >
                <Typography variant='h4' sx={{}}>
                    Contact us
                </Typography>

                <TextField
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{
                        width: '40%',
                        marginTop: '2rem'
                    }} />

                <TextField
                    onChange={(e) => setSubmission(e.target.value)}
                    value={submission}
                    id="outlined-multiline-flexible"
                    label="Fill in your request"
                    multiline
                    minRows={9}
                    maxRows={11}
                    sx={{ marginTop: '1rem' }}
                />

                <Button
                    onClick={submitHandler}
                    variant="contained"
                    size='large'
                    sx={{
                        width: '12.5ch',
                        marginTop: '1rem',
                    }}>
                    Submit
                </Button>
            </FormControl>
        </Container>
    )
}

export default Contact