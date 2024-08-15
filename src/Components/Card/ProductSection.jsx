import Card from "./Card";


const ProductSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-16 pb-10 pt-24 space-y-5">
                <h1 className="text-4xl lg:text-5xl font-bold text-center">Our Exclusive Products</h1>
                <p className="text-center lg:w-4/12">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
            </div>
            <div>
                <Card></Card>
            </div>
        </div>
    );
};

export default ProductSection;