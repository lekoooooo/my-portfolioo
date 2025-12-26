import AboutComponent from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Repositories from "@/app/components/Repositories";
import ContactForm from "@/app/components/ContactForm";

export default function AboutPage() {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 lg:py-20 text-white space-y-16 lg:space-y-32">
      <AboutComponent /> {/* without  showMoreLink  */}
      <div className="border-t border-[#333] pt-4 lg:pt-2"></div>
      <section>
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-4 lg:mb-6">MY EXPERIENCE</h2>
        <Experience />
      </section>
      <div className="border-t border-[#333] pt-4 lg:pt-2"></div>
      <Repositories />
      <div className="border-t border-[#333] pt-4 lg:pt-2"></div>
      <section>
        <ContactForm />
      </section>
    </main>
  );
}
