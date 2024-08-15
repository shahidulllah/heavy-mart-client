

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/3dsDkB9/banner.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Welcome To Our Shop</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">See Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;