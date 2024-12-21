
import document from "../assets/features/document (1).webp";
import communication from '../assets/features/counselor.webp';
import { motion } from "framer-motion";

function Features() {
  const featureData = [
    {
      title: "Lead Capture",
      description:
        "Effortlessly collect leads from various sources, including your website, social media platforms, and ad campaigns. Ensure no potential client is missed with our automated lead collection tools.",
      listItems: [
        "Website Integration",
        "Social Media Tracking",
        "Ad Campaign Integration",
        "Centralized Lead Database",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2024/03/Precise-Source-Tracking.png",
      id: "Lead-Capture"
    },
    {
      title: "Lead Management",
      description:
        "Organize and update all your leads in one place with our intuitive management tools. Easily search, filter, and prioritize your pipeline for maximum efficiency.",
      listItems: [
        "Centralized Dashboard",
        "Quick Lead Search",
        "Custom Filters",
        "Real-Time Updates",
      ],
      imageUrl: "https://www.agentlegend.com/hubfs/Imported_Blog_Media/7-Real-Estate-Lead-Lifecycle-Stages-You-Should-Be-Tracking.png",
      id: "Lead-Management"
    },
    {
      title: "Lead Assignment",
      description:
        "Distribute leads smartly among team members or agents. Ensure fast and effective follow-ups with automated or manual lead assignment based on customizable criteria.",
      listItems: [
        "Smart Lead Distribution",
        "Custom Assignment Rules",
        "Real-Time Notifications",
        "Improved Response Times",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/Intelligent-Lead-assignment-1-768x476.png",
      id: "Lead-Assignment"
    },
    {
      title: "Follow-Up and Nurturing",
      description:
        "Keep your leads engaged with powerful follow-up tools. Reach out via emails, calls, or text messages and schedule reminders to maintain consistent communication.",
      listItems: [
        "Automated Follow-Ups",
        "Multi-Channel Communication",
        "Customizable Templates",
        "Scheduled Reminders",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/feature-omnichannel-768x502.png",
      id: "Follow-Up"
    },
    {
      title: "Analytics and Reporting",
      description:
        "Gain valuable insights into your lead management process with our detailed analytics and reports. Track conversion rates, agent performance, and response times with ease.",
      listItems: [
        "Detailed Reports",
        "Conversion Rate Analysis",
        "Performance Tracking",
        "Customizable Dashboards",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/Actionable-Insights-1-768x526.png",
      id: "Analytics"
    },
    {
      title: "Integration with CRM and Marketing Tools",
      description:
        "Easily sync with your favorite CRM and marketing platforms to streamline your workflows and enhance efficiency.",
      listItems: [
        "CRM Synchronization",
        "Marketing Tool Integration",
        "Streamlined Workflow",
        "Enhanced Collaboration",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/Hyper-Personalized-engagement-768x486.png",
      id: "Integration"
    },
    {
      title: "Automated Notifications",
      description:
        "Stay on top of your leads with instant alerts and reminders. Ensure timely follow-ups and lead updates to never miss an opportunity.",
      listItems: [
        "Instant Alerts",
        "Follow-Up Reminders",
        "Custom Notification Settings",
        "Real-Time Updates",
      ],
      imageUrl: "https://metroguild.com/wp-content/uploads/2023/08/real-estate-Hyper-Presonalized-300x300.png",
      id: "Automated"
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
      id: "Document"
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
      id: "Task"
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
          id={feature.id}
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
