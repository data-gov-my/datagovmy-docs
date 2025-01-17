"use client";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const features = [
  {
    title: "Subject Matter Expertise",
    description:
      "Deep dive into the Malaysian public sector data ecosystem, and deeply understand agencies' core business.",
  },
  {
    title: "Data Engineering",
    description:
      "Build robust data pipelines to automate the publication of high-impact data at high speed and high granularity.",
  },
  {
    title: "Data Analytics",
    description:
      "Analyse data to uncover and present meaningful insights, making data.gov.my a valuable resource for the public.",
  },
  {
    title: "Data Science",
    description:
      "Apply statistical / ML techniques to solve operational problems in the handling of public sector data.",
  },
  {
    title: "DevOps",
    description:
      "Deploy and maintain scalable data infrastructure using modern cloud technologies and automation practices.",
  },
  {
    title: "Strategic Communications",
    description:
      "Effectively communicate data insights to stakeholders and the public through clear dataviz and compelling narratives.",
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        {/* Dark mode gradients */}
        <div className="absolute inset-0 bg-black dark:block hidden" />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[600px] bg-purple-500/30 blur-[100px] opacity-30 dark:block hidden" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[600px] bg-blue-500/30 blur-[100px] opacity-30 dark:block hidden" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] opacity-30 dark:block hidden" />

        {/* Light mode gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:hidden" />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[600px] bg-blue-100/50 blur-[100px] dark:hidden" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[600px] bg-indigo-100/50 blur-[100px] dark:hidden" />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <motion.div
          className="max-w-screen-xl mx-auto px-4 pt-24 pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-medium tracking-tight max-w-[800px] mb-6 bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-white dark:to-white/70 from-gray-900 via-gray-800 to-gray-900 leading-[1.1] pb-2">
            Become a full-fledged
            <br />
            open data engineer
          </h1>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-[600px]">
            Data engineering. Data analytics. Data science. All built on a deep
            understanding of Malaysian public sector data. These docs will help
            you shape public sector open data, hands-on!
          </p>

          <div className="flex gap-4 mt-8">
            <motion.a
              href="/docs"
              className="bg-black dark:bg-white dark:text-black text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="p-6 rounded-xl shadow-md 
                dark:border-white/[0.1] dark:bg-white/[0.05] dark:hover:border-white/[0.15] dark:hover:bg-white/[0.1]
                border-black/[0.1] bg-white/70 hover:border-black/[0.15] hover:bg-white/90
                border transition-all duration-300
                hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-white/10"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="dark:text-gray-400 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
