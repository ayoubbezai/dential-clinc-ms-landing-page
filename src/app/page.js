import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WhyUs from "./components/whyUs";
import AboutUs from "./components/aboutUs";
import MobileApp from "./components/mobileApp";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: " Chebaani Clinic Dental Clinic",
              image: "https://www. Chebaani Clinicclinic.com/logo.png",
              "@id": "https://www. Chebaani Clinicclinic.com",
              url: "https://www. Chebaani Clinicclinic.com",
              telephone: "+213-123-456-789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Rue de la Santé",
                addressLocality: "Batna",
                addressRegion: "Batna",
                postalCode: "05000",
                addressCountry: "DZ",
              },
              openingHours: "Mo-Fr 09:00-17:00",
              sameAs: [
                "https://facebook.com/ Chebaani Clinicbatna",
                "https://instagram.com/ Chebaani Clinicbatna",
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation - Modern sticky header */}
        <Navbar />
        <Hero />
        <AboutUs />
        <WhyUs />
        <MobileApp />

        {/* Map Section */}
        <section className="h-96 w-full relative">
          <div className="absolute inset-0 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3252.340667346576!2d6.092906087552529!3d35.53617152302581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sdz!4v1748885891393!5m2!1sen!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="filter grayscale(50%) contrast(1.2)"
            ></iframe>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Footer - Modern with multiple columns */}
        <Footer />
      </div>
    </>
  );
}
