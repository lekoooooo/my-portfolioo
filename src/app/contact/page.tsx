import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
          Contact
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 lg:mb-12">
          This page is a placeholder for the Contact content.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
