import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Challenges } from "./components/challenges"; // Renamed from PainPoints
import { Plans } from "./components/plans"; // Renamed from Services
import { BusinessEnglish } from "./components/business-english"; // Renamed from BusinessSkills
import { GlobalReach } from "./components/global-reach"; // Renamed from GlobalMap
import { Testimonials } from "./components/testimonials"; // Renamed from SocialProof
import { Footer } from "./components/footer";
import { FAQ } from "./components/faq";
import { AboutMe } from "./components/about-me";
import { InstagramFeed } from "./components/instagram-feed";
import { Methodology } from "./components/methodology";
import { Translation } from "./components/translation";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue overflow-x-hidden selection:bg-brand-yellow/30">
      <Navbar />
      <main className="pt-20 lg:pt-8">
        <section id="home">
          <Hero />
        </section>

        <InstagramFeed />

        <section id="about">
          <AboutMe />
        </section>

        

        <section id="challenges">
          <Challenges />
        </section>

        <section id="methodology">
          <Methodology />
        </section>

        <section id="business">
          <BusinessEnglish />
        </section>

        <GlobalReach />

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="plans">
          <Plans />
        </section>

        <section id="translation">
          <Translation />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
