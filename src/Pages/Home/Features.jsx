

const Features = () => {
    return (
        <div className=" bg-purple-400 py-16">
            <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto px-10">
                <div className="w-1/2">
                    <h4 className="text-white text-lg mb-6">Clear Your Mind</h4>
                    <h2 className="text-5xl text-white">The fastest way to get <br /> tasks out of <span className="text-blue-600 font-medium">your head.</span></h2>
                    <p className="w-10/12 text-lg text-white mt-6">Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</p>
                </div>
                <div className="w-1/2">
                    <img src="https://assets-global.website-files.com/5e5340681635de6aa9bd78d5/5f18e09bb7c9d38c42fda798_Microsoft-To-Do-Preview.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Features;