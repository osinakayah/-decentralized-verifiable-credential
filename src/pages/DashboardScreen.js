import * as React from 'react';
import PropTypes from 'prop-types';
import DocumentList from '../components/DocumentList'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate} from "react-router-dom";



function DashboardScreen() {
    const navigate = useNavigate();

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Button onClick={()=>navigate("/certificate")} color={'primary'}>Issue New Certificate</Button>

            </Grid>
            <br/>
            <DocumentList/>
        </>
    );
}

DashboardScreen.propTypes = {
    window: PropTypes.func,
};

export default DashboardScreen;
