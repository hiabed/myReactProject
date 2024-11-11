import Main from './Main';
import Browse from "./Browse";
import OurProducts from './OurProducts';
import "./Home";

const Home = () => {
    return (
        <main id="home">
            <Main />
            <Browse />
            <OurProducts />
        </main>
    );
}

export default Home;