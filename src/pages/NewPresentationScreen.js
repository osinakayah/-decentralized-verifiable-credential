import Grid from "@mui/material/Grid";
import * as React from "react";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useCallback, useState} from "react";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import DocumentsActions from '../redux/DocumentsRedux';
import FormControl from '@mui/material/FormControl';
import { useNavigate, useParams} from "react-router-dom";

const NewCertificateScreen = function () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {index} = useParams()

    const [newPresentationData, setNewPresentationData] = useState(()=>{
        return {
            id: '',
            context: '',
            type: '',
        }
    });

    const {
        id,
        context,
        type,
    } = newPresentationData

    const createDocument = useCallback(()=>{
        dispatch(DocumentsActions.documentsCreatePresentation({
            ...newPresentationData,
            index
        }));
    }, [dispatch, newPresentationData, index ]);

    const goBack = useCallback(()=>{
        navigate("/")
    }, [navigate])
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Button onClick={goBack} startIcon={<ArrowBackIcon/>} color={'primary'}>Back</Button>

            </Grid>
            <br/>
            <Grid container spacing={{ xs: 2, md: 3 }} >
                <Grid item md={4} lg={4}/>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography align={'left'} variant={'h6'}>
                            New Presentation
                        </Typography>
                        <br/>
                        <FormControl fullWidth>
                            <TextField
                                id="id"
                                label="ID"
                                placeholder={'Holder DID'}
                                onChange={(event)=>{
                                    setNewPresentationData(prevState => {
                                        return {
                                            ...prevState,
                                            id: event.target.value
                                        }
                                    })
                                }}
                                value={id}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id="context"
                                label="Context"
                                placeholder={'Context'}
                                onChange={(event)=>{
                                    setNewPresentationData(prevState => {
                                        return {
                                            ...prevState,
                                            context: event.target.value
                                        }
                                    })
                                }}
                                value={context}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id="type"
                                label="Type"
                                placeholder={'Type'}
                                onChange={(event)=>{
                                    setNewPresentationData(prevState => {
                                        return {
                                            ...prevState,
                                            type: event.target.value
                                        }
                                    })
                                }}
                                value={type}
                            />
                        </FormControl>

                        <div>
                            <br/>
                            <Button onClick={createDocument} color={'primary'}>Save</Button>
                            <Button onClick={goBack} color={'secondary'}>Cancel</Button>
                        </div>


                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default NewCertificateScreen
