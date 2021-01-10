import { Link } from 'react-router-dom';

const Cover = () => {
    return (
        <div id="head" className="row text-center">
            <Link id="headtitle" to="/artists">
                MUSIC-DB
            </Link>
        </div>
    );
}
export default Cover;