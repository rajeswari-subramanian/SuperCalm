import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components'
import { userStatsShow } from '../Redux/User/action'
import { useDispatch } from "react-redux";

const MonthButtons = styled.div`
  font-size: 18px;
  font-weight:bolder;
  cursor:pointer;  
  color: white;
  padding: 20px;  
  border-radius: 35px; 
  background:rgb(0,0,0,0.2);  
`;
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function DropDown() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const handleStartChange = (event) => {
        setStartDate(Number(event.target.value) || '');
    };

    const handleEndChange = (event) => {
        setEndDate(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(userStatsShow())
    };

    return (
        <div>
            <MonthButtons onClick={handleClickOpen} type="button" class="btn btn-lg">
                Select Period Stats</MonthButtons>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Select start and end date</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-dialog-native">Start Date</InputLabel>
                            <Select
                                native
                                value={startDate}
                                onChange={handleStartChange}
                                input={<Input id="demo-dialog-native" />}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>1/11/2010</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-dialog-select-label">End Date</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={endDate}
                                onChange={handleEndChange}
                                input={<Input />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10/11/2010</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
