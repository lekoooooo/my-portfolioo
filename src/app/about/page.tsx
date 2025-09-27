import AboutPage from "@/app/components/About";
import Experience from "@/app/components/Experience";
import ContactForm from "@/app/components/ContactForm";

export default function About() {
  return (
    <main className="px-8 md:px-16 lg:px-32 py-20 text-white space-y-32">
      <AboutPage />

      <div className="border-t border-[#333] pt-2"></div>
      <section>
        <h2 className="text-[28px] font-bold mb-6">MY EXPERIENCE</h2>
        <Experience />
      </section>
      <div className="border-t border-[#333] pt-2"></div>

      <section>
        <ContactForm />
      </section>
    </main>
  );
}
