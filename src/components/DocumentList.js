import * as React from 'react';
import Grid from '@mui/material/Grid';
import SingleDocument from './SingleDocument'
import { useSelector } from 'react-redux';

const DocumentList = function () {

    const issuedDocuments = useSelector((state) => state.documents.issuedDocuments);

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} >

            {issuedDocuments.map((issuedDocument, index)=>{
                return  (
                    <Grid item xs={12} sm={12} md={6} lg={3} key={issuedDocument.id}>
                        <SingleDocument documentsData={issuedDocument} id={index}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DocumentList
