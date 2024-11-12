import Main from './Main';
import Browse from "./Browse";
import OurProducts from './OurProducts';
import ExploreMore from './ExploreMore';
import "./Home";

const Home = () => {
    return (
        <main id="home">
            <Main />
            <Browse />
            <OurProducts />
            <ExploreMore />
        </main>
    );
}

export default Home;