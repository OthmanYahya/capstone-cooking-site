import React from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { NavLink } from 'react-router-dom'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Container from '@mui/material/Container';

function Category() {

    const [alignment, setAlignment] = React.useState(null);

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        };
    };

    return (
        <Container sx={{
            display: "flex",
            jsutifyContent: "center",
            alignItems: "center",
            marginBottom: "3rem"
        }}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                //onChange={handleChange}
                aria-label="Category"
                sx={{

                    margin: 'auto auto 1rem'
                }}
            >
                <ToggleButton value="American" color="primary">
                    <NavLink to={'/cuisine/American'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <LunchDiningIcon sx={{ margin: 'auto', '&:active': { color: 'blue' } }} />
                        American
                    </NavLink>
                </ToggleButton>

                <ToggleButton value="Italian" color="success" >
                    <NavLink to={'/cuisine/Italian'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                        <LocalPizzaIcon sx={{ margin: 'auto' }} />
                        Italian
                    </NavLink>
                </ToggleButton>

                <ToggleButton value="Middle Eastern" color="warning" >

                    <NavLink to={'/cuisine/Middle+Eastern'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                        <KebabDiningIcon sx={{ margin: 'auto' }} />
                        Middle Eastern
                    </NavLink>
                </ToggleButton>

                <ToggleButton value="Thai" color="secondary">
                    <NavLink to={'/cuisine/Thai'} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <RamenDiningIcon sx={{ margin: 'auto' }} />
                        Thai
                    </NavLink>
                </ToggleButton>
            </ToggleButtonGroup>
        </Container >
    )
}

export default Category