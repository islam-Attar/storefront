
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShopIcon from '@mui/icons-material/Shop';
import { Link } from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ShopIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"

                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'heading',
                            fontWeight: 1000,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link className="link" to="/">My Store</Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;