import Typography from '@mui/material/Typography';
import * as React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useNavigate} from 'react-router-dom';


const SmallText = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontSize: '0.6em'
}));
const NormalText = styled(Typography)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontSize: '0.7em',

}));


const SingleDocument = function (props) {

    const navigate = useNavigate()
    const {documentsData} = props

    return (
        <Paper>
            <div style={{
                overflow: 'hidden',
                padding: '25px',
            }}>
                <NormalText>Type</NormalText>
                <SmallText>
                    {documentsData.type[0]}
                </SmallText>
                <br/>

                <NormalText>Issuer ID</NormalText>
                <SmallText>
                    {documentsData.issuer}
                </SmallText>
                <br/>

                <NormalText>Issuance Date</NormalText>
                <SmallText>
                    {documentsData.issuanceDate}
                </SmallText>
                <br/>
                <Button onClick={()=>{
                    navigate(`/presentation/${props.id}`)
                }}>Create Presentation</Button>
            </div>
        </Paper>
    )
}
SingleDocument.propTypes = {
    documentsData: PropTypes.any,
};
export default SingleDocument
