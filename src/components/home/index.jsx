import {useNavigate, useLocation} from '../router/react-router';

const Home = () => {
    const history = useNavigate();
    const location = useLocation();
    console.log(location);
    return (
        <div
            onClick={() => {
                // console.log(history)
                history('/list', {replace: true})
            }}
        >home</div>
    )
}

export default Home;


