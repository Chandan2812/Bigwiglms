
import admin from "../assets/features/admin panel.webp";
import vendor from "../assets/features/vendor.webp";
import document from "../assets/features/document (1).webp";
import communication from '../assets/features/counselor.webp';
import { motion } from "framer-motion";

function Features() {
  const featureData = [
    {
      title: "Property Listings Management",
      description:
        "Manage your property listings with ease. From creating new listings to updating details, ensure accurate and up-to-date property information for your clients.",
      listItems: [
        "Easy Listing Creation",
        "Detailed Property Descriptions",
        "Real-Time Updates",
        "Seamless Property Search",
      ],
      imageUrl: "https://static.vecteezy.com/system/resources/previews/012/958/739/non_2x/3d-home-insurance-icon-toy-house-floating-in-hand-isolated-on-transparent-business-invest-real-estate-mortgage-offer-of-purchase-house-loan-concept-mockup-cartoon-minimal-icon-3d-rendering-png.png", // Keep the same image for now
    },
    {
      title: "Lead Management",
      description:
        "Centralize, manage, and track your real estate leads. Assign, score, and track leads effectively to convert more potential clients into sales.",
      listItems: [
        "Lead Source Tracking",
        "Lead Scoring & Prioritization",
        "Real-Time Notifications",
        "Effective Lead Assignment",
      ],
      imageUrl: "https://img.freepik.com/free-vector/generating-new-leads-concept-illustration_114360-7654.jpg", // Keep the same image for now
    },
    {
      title: "Client & Agent Communication",
      description:
        "Streamline communication between agents and clients. With centralized messaging, stay connected and responsive with potential buyers and sellers.",
      listItems: [
        "Centralized Messaging Hub",
        "Email, SMS & Call Tracking",
        "Instant Notifications",
        "Scheduled Follow-ups",
      ],
      imageUrl: "https://img.freepik.com/free-vector/open-mind-psychotherapy-composition-with-discussion-symbols-flat-vector-illustration_1284-78150.jpg", // Keep the same image for now
    },
    {
      title: "Agent Performance Monitoring",
      description:
        "Track agent performance in real-time. Monitor closed deals, active listings, and performance metrics to drive productivity and identify areas for improvement.",
      listItems: [
        "Deal Tracking",
        "Agent Productivity Insights",
        "Performance Metrics",
        "Target-Based Tracking",
      ],
      imageUrl: "https://natterbox.com/wp-content/uploads/2023/08/Banner-Image-8-Simple-Ways-to-Improve-Agent-Performance-in-the-Call-Center.png", // Keep the same image for now
    },
    {
      title: "Property Search & Filters",
      description:
        "Provide your clients with an intuitive property search experience. Use filters to refine property searches based on location, price, size, and other preferences.",
      listItems: [
        "Advanced Search Filters",
        "Location-Based Search",
        "Price Range Adjustments",
        "Save & Share Listings",
      ],
      imageUrl: "https://png.pngtree.com/png-clipart/20240109/original/pngtree-find-property-png-image_14057230.png", // Keep the same image for now
    },
    {
      title: "Admin Dashboard",
      description:
        "Manage the entire platform with a comprehensive admin dashboard. Control listings, manage users, track performance, and get detailed reports in one place.",
      listItems: [
        "Full Platform Control",
        "User Management",
        "Analytics & Reports",
        "Real-Time Updates",
      ],
      imageUrl: admin, // Keep the same image for now
    },
    {
      title: "Vendor & Partner Management",
      description:
        "Streamline your relationships with vendors, contractors, and partners. Track performance, manage contracts, and ensure effective collaboration.",
      listItems: [
        "Vendor Performance Tracking",
        "Contract Management",
        "Centralized Communication",
        "Improved Collaboration",
      ],
      imageUrl: vendor, // Keep the same image for now
    },
    {
      title: "Document Management & E-signatures",
      description:
        "Simplify document handling with secure document storage and e-signature integration. Ensure all real estate documents are easily accessible and legally compliant.",
      listItems: [
        "Secure Document Storage",
        "E-Signatures Integration",
        "Contract & Agreement Management",
        "Document Tracking",
      ],
      imageUrl: document, // Keep the same image for now
    },
    {
      title: "Task & Workflow Automation",
      description:
        "Automate key tasks and workflows to improve efficiency. Schedule property viewings, follow-up reminders, and task assignments to optimize the sales process.",
      listItems: [
        "Automated Task Assignments",
        "Viewing Scheduling",
        "Follow-Up Reminders",
        "Workflow Automation",
      ],
      imageUrl: communication, // Keep the same image for now
    },
  ];
  
  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8 mt-${
            index === 0 ? 0 : 16
          } mt-10`}
        >
          {/* Feature */}
          <motion.div
            className={index % 2 === 0 ? "" : "order-1 md:order-2"}
            custom={index % 2 === 0 ? "left" : "right"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
              {feature.listItems.map((item, i) => (
                <ul key={i} className="transition-colors duration-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl">✔</span> {item}
                  </li>
                </ul>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center mb-10 md:mb-4 order-2 md:order-1"
            custom={index % 2 === 0 ? "right" : "left"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-96 max-w-md md:max-w-lg transition-transform duration-300"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Features;
