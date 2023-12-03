import { useHistory } from 'react-router-dom';

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