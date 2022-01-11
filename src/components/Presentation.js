import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as React from "react";

const Presentation = function () {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl fullWidth>
                <TextField
                    id="id"
                    label="ID"
                    placeholder={'ID'}
                    onChange={(event)=>{}}
                    value={''}
                />
            </FormControl>


            <div>
                <br/>
                <Button onClick={()=>{}} color={'primary'}>Save</Button>
                <Button color={'secondary'}>Cancel</Button>
            </div>


        </Box>
    )
}

export default Presentation
