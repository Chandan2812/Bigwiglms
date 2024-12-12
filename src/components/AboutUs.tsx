import about from "../assets/about-us.webp";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-8 md:px-14 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            About Us
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            At BigwigLms, we aim to revolutionize the way real estate businesses operate. We saw an industry plagued with inefficiencies and outdated systems, so we set out to build a platform that empowers real estate professionals to work smarter, not harder.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            From property listings to lead management, BigwigLms integrates everything you need in one place. Whether you're a real estate agency, a property developer, or an independent agent, we help streamline your workflows, improve customer relationships, and maximize sales.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={about} // Replace this URL with your actual image source
            alt="About Us"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
