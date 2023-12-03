import { useHistory } from 'react-router-dom';
import { NavigateNext } from "@mui/icons-material";
import { Button } from "@mui/material";

function NextButton(props) {

    const history = useHistory();

    const handleClick = (e) => {

        e.preventDefault();
        history.push(`/${props.path}`);
    };

    return (
        <Button variant="outlined" onClick={handleClick} startIcon={<NavigateNext />}>Next</Button>
    )

}

export default NextButton;