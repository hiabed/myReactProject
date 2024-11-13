import Main from './Main';
import Browse from "./Browse";
import OurProducts from './OurProducts';
import ExploreMore from './ExploreMore';
import Furniture from './Furniture';
import "./Home";

const Home = () => { //Home done.
    return (
        <main id="home">
            <Main />
            <Browse />
            <OurProducts />
            <ExploreMore />
            <Furniture />
        </main>
    );
}

export default Home;