import { Suspense, lazy } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";
import { SectionSkeleton } from "./components/ui/section-skeleton";

// Lazy Load Heavy Components (Handling Named Exports)
const Plans = lazy(() => import("./components/plans").then(module => ({ default: module.Plans })));
const BusinessEnglish = lazy(() => import("./components/business-english").then(module => ({ default: module.BusinessEnglish })));
const Testimonials = lazy(() => import("./components/Testimonials").then(module => ({ default: module.Testimonials })));
const FAQ = lazy(() => import("./components/faq").then(module => ({ default: module.FAQ })));
const AboutMe = lazy(() => import("./components/about-me").then(module => ({ default: module.AboutMe })));
const InstagramFeed = lazy(() => import("./components/instagram-feed").then(module => ({ default: module.InstagramFeed })));
const Methodology = lazy(() => import("./components/methodology").then(module => ({ default: module.Methodology })));
const Translation = lazy(() => import("./components/translation").then(module => ({ default: module.Translation })));

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue overflow-x-hidden selection:bg-brand-yellow/30">
      <Navbar />
      <main className="pt-20 lg:pt-8">
        <section id="home">
          <Hero />
        </section>

        <Suspense fallback={<SectionSkeleton />}>
          <InstagramFeed />
        </Suspense>

        <section id="about">
          <Suspense fallback={<SectionSkeleton />}>
            <AboutMe />
          </Suspense>
        </section>

        <section id="methodology">
          <Suspense fallback={<SectionSkeleton />}>
            <Methodology />
          </Suspense>
        </section>

        <section id="business">
          <Suspense fallback={<SectionSkeleton />}>
            <BusinessEnglish />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials />
          </Suspense>
        </section>

        <section id="plans">
          <Suspense fallback={<SectionSkeleton />}>
            <Plans />
          </Suspense>
        </section>

        <section id="translation">
          <Suspense fallback={<SectionSkeleton />}>
            <Translation />
          </Suspense>
        </section>

        <section id="faq">
          <Suspense fallback={<SectionSkeleton />}>
            <FAQ />
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
