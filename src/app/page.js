import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Hero from "./components/hero";

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
        <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center text-[#022057]"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#022057] to-[#00ABC6] flex items-center justify-center mr-3">
                <Image
                  src="/tooth-icon-white.svg"
                  alt="Chebaani Dental Logo"
                  width={20}
                  height={20}
                />
              </div>
              Chebaani Clinic
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              <Link
                href="#about"
                className="text-gray-600 hover:text-[#00ABC6] transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-gray-600 hover:text-[#00ABC6] transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="#dentists"
                className="text-gray-600 hover:text-[#00ABC6] transition-colors font-medium"
              >
                Our Dentists
              </Link>
              <Link
                href="#why-us"
                className="text-gray-600 hover:text-[#00ABC6] transition-colors font-medium"
              >
                Why Choose Us
              </Link>
              <a
                href="https://ayoubbezai.site/login"
                className="bg-gradient-to-r from-[#022057] to-[#00ABC6] hover:from-[#011842] hover:to-[#0294b0] text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                Admin Panel
              </a>
            </div>

            <button className="md:hidden text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        <Hero />

        {/* About Us Section - Modern with floating stats */}
        <section id="about" className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/dentist-team.jpg"
                    alt="Our Dental Team"
                    width={600}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-[#022057] text-white p-6 rounded-xl shadow-xl w-64">
                  <p className="text-3xl font-bold mb-2">15+</p>
                  <p className="text-[#00ABC6] font-medium">
                    Years of Experience
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-[#00ABC6] font-semibold tracking-wider">
                  ABOUT OUR CLINIC
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#022057] mt-2 mb-6 leading-tight">
                  Compassionate Care with Cutting-Edge Technology
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  At BrightSmile Dental, we blend modern dental technology with
                  a warm, patient-centered approach. Our team of board-certified
                  dentists and hygienists are dedicated to providing
                  personalized care in a comfortable environment.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: "👨‍⚕️",
                      title: "Expert Dentists",
                      description:
                        "Board-certified professionals with specialized training",
                    },
                    {
                      icon: "🏥",
                      title: "Modern Facility",
                      description:
                        "State-of-the-art equipment for precise diagnostics",
                    },
                    {
                      icon: "💳",
                      title: "Flexible Payments",
                      description: "Multiple financing options available",
                    },
                    {
                      icon: "🚗",
                      title: "Easy Parking",
                      description: "Free dedicated parking for all patients",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <span className="text-2xl mb-2 block">{item.icon}</span>
                      <h4 className="font-bold text-[#022057]">{item.title}</h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="#about"
                  className="inline-flex items-center text-[#00ABC6] font-medium hover:text-[#0294b0] group transition-colors"
                >
                  Learn more about our practice
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Unique value proposition */}
        <section id="why-us" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[#00ABC6] font-semibold tracking-wider">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#022057] mt-2 mb-6">
                The BrightSmile Difference
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                What sets us apart from other dental practices in the area
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  title: "Same-Day Emergency Care",
                  description:
                    "We reserve time each day for emergency appointments so you're never left waiting in pain.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Pain-Free Procedures",
                  description:
                    "Our gentle techniques and advanced anesthesia ensure your comfort throughout treatment.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  ),
                  title: "Sterilization Excellence",
                  description:
                    "We exceed CDC standards for instrument sterilization and office cleanliness.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  ),
                  title: "Flexible Financing",
                  description:
                    "Multiple payment options including interest-free plans for qualified patients.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: "Convenient Scheduling",
                  description:
                    "Early morning, evening and weekend appointments to fit your busy schedule.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  ),
                  title: "Digital Records",
                  description:
                    "Paperless system for faster service and easy access to your dental history.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-2"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-[#022057] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Modern cards with hover effects */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[#00ABC6] font-semibold tracking-wider">
                OUR SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#022057] mt-2 mb-6">
                Comprehensive Dental Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                From routine checkups to complex procedures, we've got you
                covered
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Preventive Care",
                  description:
                    "Keep your smile healthy with regular checkups and cleanings",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  items: [
                    "Dental Exams",
                    "Professional Cleanings",
                    "Fluoride Treatments",
                    "Sealants",
                    "Oral Cancer Screenings",
                  ],
                  color: "from-blue-50 to-white",
                },
                {
                  title: "Cosmetic Dentistry",
                  description:
                    "Enhance your smile's appearance and boost your confidence",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  items: [
                    "Teeth Whitening",
                    "Porcelain Veneers",
                    "Composite Bonding",
                    "Gum Contouring",
                    "Smile Makeovers",
                  ],
                  color: "from-teal-50 to-white",
                },
                {
                  title: "Restorative Dentistry",
                  description:
                    "Repair damaged teeth and restore full functionality",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  ),
                  items: [
                    "Dental Crowns",
                    "Tooth-Colored Fillings",
                    "Dental Bridges",
                    "Dentures",
                    "Dental Implants",
                  ],
                  color: "from-indigo-50 to-white",
                },
                {
                  title: "Orthodontics",
                  description:
                    "Straighten teeth and correct bite issues for all ages",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  ),
                  items: [
                    "Traditional Braces",
                    "Invisalign Clear Aligners",
                    "Retainers",
                    "Space Maintainers",
                    "Early Interception",
                  ],
                  color: "from-purple-50 to-white",
                },
                {
                  title: "Pediatric Dentistry",
                  description: "Specialized care for our youngest patients",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                  items: [
                    "Child Exams",
                    "Preventive Care",
                    "Habit Counseling",
                    "Emergency Care",
                    "Sedation Options",
                  ],
                  color: "from-cyan-50 to-white",
                },
                {
                  title: "Emergency Care",
                  description: "Immediate attention for urgent dental needs",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#00ABC6]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  items: [
                    "Toothache Relief",
                    "Broken Tooth Repair",
                    "Knocked-Out Tooth",
                    "Abscess Treatment",
                    "Lost Filling/Crown",
                  ],
                  color: "from-blue-50 to-white",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-b ${service.color} p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-2`}
                >
                  <div className="flex items-start mb-6">
                    <div className="bg-white p-3 rounded-lg shadow-md mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#022057]">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <ul className="text-gray-600 space-y-2 pl-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-[#00ABC6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="mt-6 inline-block text-[#00ABC6] font-medium hover:underline"
                  >
                    Book this service →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dentists Section - Enhanced with interactive elements */}
        <section id="dentists" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[#00ABC6] font-semibold tracking-wider">
                MEET OUR TEAM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#022057] mt-2 mb-6">
                Expert Dental Professionals
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our compassionate team is dedicated to your oral health and
                comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  specialty: "General & Family Dentistry",
                  image: "/dentist-1.jpg",
                  bio: "With over 12 years of experience, Dr. Johnson focuses on preventive care and patient education.",
                  schedule: "Mon, Wed, Fri",
                  education: "DDS, University of California",
                },
                {
                  name: "Dr. Michael Chen",
                  specialty: "Orthodontics & Invisalign",
                  image: "/dentist-2.jpg",
                  bio: "Specializing in Invisalign and traditional braces, Dr. Chen creates beautiful, functional smiles.",
                  schedule: "Tue, Thu, Sat",
                  education: "DMD, Harvard School of Dental Medicine",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  specialty: "Pediatric Dentistry",
                  image: "/dentist-3.jpg",
                  bio: "Known for her gentle approach, making dental visits fun and stress-free for children.",
                  schedule: "Mon, Tue, Thu",
                  education: "DDS, University of Michigan",
                },
                {
                  name: "Dr. James Wilson",
                  specialty: "Cosmetic & Restorative",
                  image: "/dentist-4.jpg",
                  bio: "Aesthetic specialist transforming smiles with veneers, crowns, and smile makeovers.",
                  schedule: "Wed, Fri, Sat",
                  education: "DMD, University of Pennsylvania",
                },
              ].map((dentist, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={dentist.image}
                      alt={dentist.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div>
                        <p className="text-white text-sm mb-1">
                          Available: {dentist.schedule}
                        </p>
                        <p className="text-white text-sm">
                          {dentist.education}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#022057] group-hover:text-[#00ABC6] transition-colors">
                      {dentist.name}
                    </h3>
                    <p className="text-[#00ABC6] font-medium mb-3">
                      {dentist.specialty}
                    </p>
                    <p className="text-gray-600 mb-4">{dentist.bio}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-[#00ABC6] font-medium text-sm hover:underline group"
                    >
                      View full profile
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Section - Modern with floating phone mockup */}
        <section
          id="app"
          className="py-24 bg-gradient-to-br from-[#022057] to-[#006D90] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-grid.svg')]"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
                <span className="text-[#00ABC6] font-semibold tracking-wider">
                  OUR MOBILE APP
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight">
                  Dental Care at Your Fingertips
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Take control of your dental health with our feature-packed
                  mobile application. Available for both iOS and Android
                  devices.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: (
                        <svg
                          className="w-8 h-8 text-[#00ABC6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      ),
                      title: "Easy Appointment Booking",
                      description:
                        "Schedule, reschedule or cancel appointments in seconds",
                    },
                    {
                      icon: (
                        <svg
                          className="w-8 h-8 text-[#00ABC6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ),
                      title: "Automated Reminders",
                      description:
                        "Never miss an appointment with push notifications",
                    },
                    {
                      icon: (
                        <svg
                          className="w-8 h-8 text-[#00ABC6]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      ),
                      title: "Secure Messaging",
                      description:
                        "Chat directly with your dentist for quick advice",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-white/10 p-2 rounded-lg mr-4 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#"
                    className="flex items-center justify-center bg-white hover:bg-gray-100 text-[#022057] font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                  >
                    <Image
                      src="/app-store.svg"
                      alt="App Store"
                      width={120}
                      height={40}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center bg-white hover:bg-gray-100 text-[#022057] font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                  >
                    <Image
                      src="/play-store.svg"
                      alt="Play Store"
                      width={120}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12 relative mt-12 lg:mt-0">
                <div className="relative mx-auto" style={{ maxWidth: "300px" }}>
                  <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#00ABC6] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#022057] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20"></div>
                    <Image
                      src="/app-screenshot.png"
                      alt="BrightSmile Dental App"
                      width={300}
                      height={600}
                      className="relative rounded-2xl w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Modern with floating cards */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[#00ABC6] font-semibold tracking-wider">
                PATIENT TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#022057] mt-2 mb-6">
                What Our Patients Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Don't just take our word for it - hear from our happy patients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "After avoiding dentists for years due to anxiety, BrightSmile changed everything. The team was so understanding and gentle. Now I actually look forward to my checkups!",
                  name: "Jessica T.",
                  role: "Patient since 2018",
                  rating: 5,
                  image: "/patient-jessica.jpg",
                },
                {
                  quote:
                    "Dr. Chen transformed my smile with Invisalign. The entire process was smooth and the results exceeded my expectations. I can't stop smiling now!",
                  name: "Michael R.",
                  role: "Invisalign Patient",
                  rating: 5,
                  image: "/patient-michael.jpg",
                },
                {
                  quote:
                    "I brought my 5-year-old who was terrified of dentists. Dr. Emily was amazing with her - now she asks when she can go back! The office is so kid-friendly.",
                  name: "Sarah K.",
                  role: "Parent",
                  rating: 5,
                  image: "/patient-sarah.jpg",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-all transform hover:-translate-y-2"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-[#022057] font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-[#00ABC6] text-sm">
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Appointment Section - Modern form with map */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
                <span className="text-[#00ABC6] font-semibold tracking-wider">
                  CONTACT US
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#022057] mt-2 mb-6">
                  Schedule Your Visit
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Ready to experience exceptional dental care? Fill out the form
                  or give us a call to book your appointment.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-[#00ABC6] p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#022057] mb-1">
                        Our Location
                      </h4>
                      <p className="text-gray-600">
                        123 Dental Avenue, Suite 400
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#00ABC6] p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#022057] mb-1">
                        Phone Number
                      </h4>
                      <p className="text-gray-600">
                        <Link
                          href="tel:+15551234567"
                          className="hover:text-[#00ABC6] transition-colors"
                        >
                          (555) 123-4567
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#00ABC6] p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#022057] mb-1">
                        Email Address
                      </h4>
                      <p className="text-gray-600">
                        <Link
                          href="mailto:hello@brightsmile.com"
                          className="hover:text-[#00ABC6] transition-colors"
                        >
                          hello@brightsmile.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#00ABC6] p-2 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#022057] mb-1">
                        Office Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 7:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg text-[#022057] mb-4">
                    Emergency Care
                  </h4>
                  <p className="text-gray-600 mb-4">
                    For dental emergencies outside regular hours, please call
                    our emergency line:
                  </p>
                  <Link
                    href="tel:+15551234567"
                    className="inline-flex items-center text-[#00ABC6] font-medium hover:underline group"
                  >
                    (555) 987-6543 (Emergency Only)
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#022057] mb-6">
                    Book an Appointment
                  </h3>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ABC6] focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ABC6] focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ABC6] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ABC6] focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ABC6] focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="cleaning">Routine Cleaning</option>
                          <option value="whitening">Teeth Whitening</option>
                          <option value="filling">Filling</option>
                          <option value="crown">Crown</option>
                          <option value="emergency">Emergency Care</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="preferred-dentist"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Preferred Dentist
                        </label>
                        <select
                          id="preferred-dentist"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ABC6] focus:border-transparent"
                        >
                          <option value="">No preference</option>
                          <option value="dr-johnson">Dr. Sarah Johnson</option>
                          <option value="dr-chen">Dr. Michael Chen</option>
                          <option value="dr-rodriguez">
                            Dr. Emily Rodriguez
                          </option>
                          <option value="dr-wilson">Dr. James Wilson</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ABC6] focus:border-transparent"
                        placeholder="Any specific concerns or requests..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#022057] to-[#00ABC6] hover:from-[#011842] hover:to-[#0294b0] text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      Request Appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full relative">
          <div className="absolute inset-0 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538331288888!2d-122.4194156846822!3d37.77492997975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
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
        <footer className="bg-[#022057] text-white pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="text-2xl font-bold flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#022057] to-[#00ABC6] flex items-center justify-center mr-3">
                    <Image
                      src="/tooth-icon-white.svg"
                      alt="BrightSmile Dental Logo"
                      width={20}
                      height={20}
                    />
                  </div>
                  BrightSmile
                </div>
                <p className="text-gray-300 mb-6">
                  Providing exceptional dental care with compassion and
                  cutting-edge technology since 2008.
                </p>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social) => (
                      <Link
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        <Image
                          src={`/${social}-icon.svg`}
                          alt={social}
                          width={16}
                          height={16}
                        />
                      </Link>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { name: "About Us", href: "#about" },
                    { name: "Services", href: "#services" },
                    { name: "Our Dentists", href: "#dentists" },
                    { name: "Why Choose Us", href: "#why-us" },
                    { name: "Patient Reviews", href: "#testimonials" },
                    { name: "Contact Us", href: "#contact" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-[#00ABC6] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                <ul className="space-y-3">
                  {[
                    "Preventive Care",
                    "Cosmetic Dentistry",
                    "Restorative Dentistry",
                    "Orthodontics",
                    "Pediatric Dentistry",
                    "Emergency Care",
                  ].map((service, index) => (
                    <li key={index}>
                      <Link
                        href="#services"
                        className="text-gray-300 hover:text-[#00ABC6] transition-colors"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
                <p className="text-gray-300 mb-4">
                  Subscribe to our newsletter for dental tips and special
                  offers.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-3 rounded-l-lg w-full text-gray-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#00ABC6] hover:bg-[#0294b0] px-4 rounded-r-lg transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </form>
                <div className="mt-6 flex items-center">
                  <svg
                    className="w-6 h-6 text-[#00ABC6] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <Link
                    href="tel:+15551234567"
                    className="font-medium hover:underline"
                  >
                    (555) 123-4567
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} BrightSmile Dental. All rights
                reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
