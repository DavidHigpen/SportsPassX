import NavBar from "./NavBar";

function HeroTitle() {
    return (
        <div className="hero h-[var(--app-height)] bg-cover bg-center flex items-start justify-center" style={{ backgroundImage: `url('/KyleDay.jpg')` }}>
          <NavBar textColor="--dark-text"/>
          <div className="hero-content text-center mt-24 text-[var(--dark-text)]">
            <div className="max-w-xl">
              <h1 className="mb-5 text-7xl font-bold">Buy. Sell. Swap. Game Day Starts Here.</h1>
              <p className="mb-5 text-md font-bold">Your trusted TAMU pass exchange</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Browse Listings</button>
                <button className="btn btn-accent">List a Pass</button>
              </div>
            </div>
          </div>
        </div>
    );
}

export default HeroTitle;