"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  const projects = [
    {
      title: "时光不老，一杯到底",
      category: "海报/易拉宝",
      image: "/images/project-1.png",
      link: "https://uxdesign.qingteng.cn/team/lxcdlrlsnd",
    },
    {
      title: "甜品海报",
      category: "海报/易拉宝",
      image: "/images/project-2.jpg",
      link: "https://uxdesign.qingteng.cn/team/lxcdlrlsnd",
    },
    {
      title: "夏天",
      category: "小红书",
      image: "/images/project-3.png",
      link: "https://uxdesign.qingteng.cn/team/lxcdlrlsnd",
    },
    {
      title: "猫咪",
      category: "图像",
      image: "/images/project-4.jpg",
      link: "https://uxdesign.qingteng.cn/team/lxcdlrlsnd",
    },
  ];

  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-24 pb-20 overflow-x-hidden">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[56px] px-6 md:px-12 border-b border-black/5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <span className="text-xl font-bold text-apple-dark tracking-tight">xxcts.</span>
        <div className="flex gap-8 text-sm text-apple-gray">
          <a href="#" className="hover:text-apple-dark transition-colors">作品</a>
          <a href="#" className="hover:text-apple-dark transition-colors">关于</a>
          <a href="#" className="hover:text-apple-dark transition-colors">联系</a>
        </div>
      </motion.nav>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 md:pt-48 max-w-7xl mx-auto"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 mb-32">
          <div className="flex-1 space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
              <span className="text-xs font-medium text-apple-dark">✨ AI生图作品</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-apple-dark leading-[1.1] tracking-tighter">
              轩轩吃甜食的<br />AI作品展示
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-apple-blue"></div>
              <div className="w-16 h-[1px] bg-gray-200"></div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-apple-gray font-medium max-w-md">
              追求像素级的完美数字体验。
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-apple-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
            >
              查看作品 <ArrowRight size={18} />
            </motion.button>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex-1 w-full max-w-[600px] aspect-square relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/50 mix-blend-overlay z-10 pointer-events-none"></div>
            <Image
              src="/images/hero-image.png"
              alt="Abstract Architecture"
              fill
              className="object-cover mix-blend-multiply opacity-90"
              priority
            />
          </motion.div>
        </div>

        <div className="space-y-12">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-apple-dark">精选作品</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-2 px-2">
                    <h3 className="text-2xl font-bold text-apple-dark group-hover:text-apple-blue transition-colors">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-apple-gray font-medium">{project.category}</p>
                      <ArrowRight className="text-apple-blue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
