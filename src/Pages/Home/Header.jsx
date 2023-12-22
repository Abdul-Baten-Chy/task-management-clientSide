const Header = () => {
  return (
    <div className="hero min-h-full bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-10">
        <div className="w-1/2">
        <img
          src="https://i.ibb.co/BwY7qB0/banner-img.png"
          className="w-full p-20 block mx-auto "
        />
        </div>
        <div className="w-1/2 ">
          <h1 className="text-5xl font-bold">Manage All Yours <br /> Team`s <span className="text-blue-400">Daily Task</span> <br /> More Efficiently</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="px-4 py-2 text-white bg-blue-400">Let`s Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
