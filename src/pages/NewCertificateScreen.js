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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate} from "react-router-dom";

const NewCertificateScreen = function () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newDocumentsData, setNewDocumentsData] = useState(()=>{
        return {
            id: '',
            context: '',
            type: '',
            subject: '',
            status: ''
        }
    });

    const {
        id,
        context,
        type,
        subject,
        status,
    } = newDocumentsData

    const createDocument = useCallback(()=>{
        dispatch(DocumentsActions.documentsCreate(newDocumentsData));
    }, [dispatch, newDocumentsData ]);

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
                            New Credential
                        </Typography>
                        <br/>
                        <FormControl fullWidth>
                            <TextField
                                id="id"
                                label="ID"
                                placeholder={'ID'}
                                onChange={(event)=>{
                                    setNewDocumentsData(prevState => {
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
                                    setNewDocumentsData(prevState => {
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
                                    setNewDocumentsData(prevState => {
                                        return {
                                            ...prevState,
                                            type: event.target.value
                                        }
                                    })
                                }}
                                value={type}
                            />
                        </FormControl>

                        <FormControl fullWidth >
                            <TextField
                                required
                                id="subject"
                                label="Subject"
                                placeholder={'Subject'}
                                fullWidth
                                variant="outlined"
                                onChange={(event)=>{
                                    setNewDocumentsData(prevState => {
                                        return {
                                            ...prevState,
                                            subject: event.target.value
                                        }
                                    })
                                }}
                                value={subject}
                            />
                        </FormControl>
                        <FormControl variant="outlined" fullWidth >
                            <InputLabel id="status-label">
                                Status
                            </InputLabel>
                            <Select
                                style={{
                                    marginLeft: '6px',
                                    width: '100%'
                                }}
                                id="status"
                                label="Status"
                                placeholder={'Status'}
                                labelId="status-label"
                                value={status}
                                onChange={(event)=>{
                                    setNewDocumentsData(prevState => {
                                        return {
                                            ...prevState,
                                            status: event.target.value
                                        }
                                    })
                                }}
                            >
                                <MenuItem value={'suspended'} key={'suspended'}>
                                    Suspended
                                </MenuItem>
                                <MenuItem value={'revoked'} key={'revoked'}>
                                    Revoked
                                </MenuItem>

                            </Select>
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
