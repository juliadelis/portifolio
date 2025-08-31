import HeroSectionNew from "../components/HeroSectionNew.jsx";
import Navbar from "../components/Navbar.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import EmailSection from "../components/EmailSection.jsx";
import Footer from "../components/Footer.jsx";
import AchievementsSection from "../components/AchievementsSection.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto py-4">
        <HeroSectionNew />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
