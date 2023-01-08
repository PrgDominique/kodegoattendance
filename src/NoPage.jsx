import { useNavigate } from "react-router-dom";

const NoPage = () => {

    const navigate = useNavigate()
    return (
        <div>
        <h1>404 Page Not Found</h1>

        <button onClick={() => navigate('/')}>Go to Homepage</button>
        </div>
    );
    }

export default NoPage;
