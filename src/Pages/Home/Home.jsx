
import ProductSection from "../../Components/Card/ProductSection";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="px-4 lg:mx-24">
                <ProductSection></ProductSection>
            </div>
        </div>
    );
};

export default Home;