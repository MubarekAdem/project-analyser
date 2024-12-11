import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-800 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl mb-6">
            We are a team of innovators building intelligent systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
