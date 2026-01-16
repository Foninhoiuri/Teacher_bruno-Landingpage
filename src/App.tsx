import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { PainPoints } from "./components/pain-points";
import { Services } from "./components/services";
import { BusinessSkills } from "./components/business-skills";
import { GlobalMap } from "./components/global-map";
import { SocialProof } from "./components/social-proof";
import { Footer } from "./components/footer";
import { FAQ } from "./components/faq";
import { AboutMe } from "./components/about-me";
import { InstagramFeed } from "./components/instagram-feed";
import { Methodology } from "./components/methodology";
import { Translation } from "./components/translation";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-brand-yellow/30">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <InstagramFeed />
        <AboutMe />
        <GlobalMap />
        <PainPoints />
        <Methodology />
        <BusinessSkills />
        

        <SocialProof />
        <Services />
        <Translation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
