import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const useStyles = makeStyles(theme => ({
    employeeList: {
        padding: theme.spacing(2),
    },
}));



const StatusSelect = ({ value, onChange, isFilter }) => {
    const classes = useStyles();
    return <Typography className={classes.employeeList}>
        <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
                label="Status"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {isFilter && <MenuItem selected value={''}>Status</MenuItem>}
                <MenuItem value={'Working'}>Working</MenuItem>
                <MenuItem value={'OnVacation'}>On Vacation</MenuItem>
                <MenuItem value={'LunchTime'}>Lunch Time</MenuItem>
                <MenuItem value={'BusinessTrip'}>Business Trip</MenuItem>
            </Select>
        </FormControl>
    </Typography>
}

export default StatusSelect;