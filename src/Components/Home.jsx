import Categories from './Categories';
import Banner from './Banner';
import Videos from './Videos';

const Home = () => {
    return (
        <div className="home">
            <Categories />
            <Banner />
            <Videos/>
        </div>
    );
}
export default Home;

