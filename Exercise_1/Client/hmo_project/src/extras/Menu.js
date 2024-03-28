import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const Menu = () => {
    let navigate = useNavigate();
    return (<div style={{ direction: "rtl" }}>
        <div style={{ height: "70px", backgroundColor: "rgb(0, 191, 255)", position: "static", top: "0", left: "0", right: "0", direction: "rtl", display: "flex" }}>
            <Tooltip title="מסך הבית">
                <IconButton onClick={() => { navigate("/") }}>
                    <HomeIcon />
                </IconButton>
            </Tooltip>

            <IconButton onClick={() => { navigate("/addMember") }}>
                <Tooltip title="הוסף חבר חדש">
                    <AddCircleOutlineSharpIcon />
                </Tooltip>
            </IconButton>
            <Tooltip title="נתוני תחלואה">
                <IconButton onClick={() => { navigate("/coronaData") }}>
                    <CoronavirusIcon />
                </IconButton>
            </Tooltip>


        </div>

    </div>);
}

export default Menu;