import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Sidebase from './Sidebar';


const Containers = () => {
    return (
        <>
        <CssBaseline />
        <Grid container>
            <Grid lg={3}>
            <Container>
                <Sidebase />
      </Container>

            </Grid>
            <Grid lg={9}>
            <Container >
        <Box sx={{ bgcolor: 'gray', height: '100vh' }} />
      </Container>

            </Grid>

        </Grid>

        </>

    )
}
export default Containers;