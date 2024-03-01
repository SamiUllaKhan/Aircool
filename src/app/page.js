import Image from 'next/image';
import {
  BsList,
  BsFacebook,
  BsInstagram,
  BsCheck2Circle,
  BsFillTelephoneFill,
  BsWhatsapp,
  BsEnvelopeAtFill,
} from 'react-icons/bs';

const brands = [
  { name: 'AUX', ImagePath: '/Images/brands/AUX1.jpg' },
  { name: 'BlueStar', ImagePath: '/Images/brands/BlueStar.jpg' },
  { name: 'Carrier', ImagePath: '/Images/brands/Carrier.jpg' },
  { name: 'Daikin', ImagePath: '/Images/brands/Daikin.jpg' },
  { name: 'General', ImagePath: '/Images/brands/General.jpg' },
  { name: 'Godrej', ImagePath: '/Images/brands/Godrej.jpg' },
  { name: 'Haier', ImagePath: '/Images/brands/Haier.jpg' },
  { name: 'Hitachi', ImagePath: '/Images/brands/Hitachi.jpg' },
  { name: 'IFB', ImagePath: '/Images/brands/IFB.jpg' },
  { name: 'LG', ImagePath: '/Images/brands/LG.jpg' },
  { name: 'lloyd', ImagePath: '/Images/brands/lloyd.jpg' },
  { name: 'Mitsubishi', ImagePath: '/Images/brands/Mitsubishi.jpg' },
  { name: 'Onida', ImagePath: '/Images/brands/Onida.jpg' },
  { name: 'Samsung', ImagePath: '/Images/brands/Samsung.jpg' },
  { name: 'Toshiba', ImagePath: '/Images/brands/TOshiba.jpg' },
  { name: 'Videocon', ImagePath: '/Images/brands/Videocon.jpg' },
  { name: 'Voltas', ImagePath: '/Images/brands/Voltas.jpg' },
  { name: 'Whirlpool', ImagePath: '/Images/brands/Whirlpool.jpg' },
];

export default function Home() {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="/" className="logo">
            <Image
              src="/Images/logo.png"
              alt="Vercel Logo"
              className="logo"
              width={100}
              height={60}
              priority
            />
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>

              <li>
                <a className="getstarted scrollto" href="tel:+919380245419">
                  Call Now!
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle">
              <BsList />
            </i>
          </nav>
        </div>
      </header>

      <section id="hero" className="align-items-center">
        <Image
          src="/Images/Banner.png"
          className="w-full"
          alt="Banner"
          data-aos="zoom-in"
          data-aos-delay="150"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div className="content col-xl-12 ">
                <div className="content">
                  <h3>
                    Welcome to Aircool Refrigeration Your Trusted Home Appliance
                    Service Provider
                  </h3>
                  <p>
                    At Aircool Refrigeration, we understand the importance of a
                    well-functioning home. That&apos;s why we are dedicated to
                    providing top-notch home appliance services to ensure your
                    appliances run smoothly, adding convenience to your daily
                    life.
                  </p>
                  <a href="#" className="about-btn">
                    Know More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-7" data-aos="fade-left"></div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients container-fluid">
          <div className="row" style={{ margin: '20px' }}>
            {brands.map((item) => (
              <div key={item.name} className="col-4 col-sm-2 col-md-2 mt-4 ">
                <Image
                  src={item.ImagePath}
                  className="w-full"
                  alt={item.name}
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  width={200}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="features" data-aos="fade-up">
          <div className="container">
            <div className="section-title">
              <h2>Professional Service In</h2>
              <p>Complete Home Appliance Services for a Hassle-Free Living</p>
            </div>

            <div className="row content">
              <div
                className="col-md-5"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <Image
                  src="/Images/AC.png"
                  className="w-full"
                  alt="AC"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  width={200}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div
                className="col-md-7 pt-4"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3>
                  Professional Air Conditioner Services for a Cool and
                  Comfortable Home
                </h3>
                <p className="fst-italic">
                  Where we specialize in providing top-notch air conditioner
                  services to ensure your home stays cool and comfortable,
                  especially during the sweltering months. Our skilled
                  technicians are dedicated to keeping your air conditioning
                  system running efficiently, providing repairs, maintenance,
                  and installation services.
                </p>
                <ul>
                  <li>
                    <BsCheck2Circle /> Experienced Technicians.
                  </li>
                  <li>
                    <BsCheck2Circle /> Prompt and Reliable Service.
                  </li>
                  <li>
                    <BsCheck2Circle /> Customer Satisfaction Guarantee.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row content">
              <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                <Image
                  src="/Images/washingmachine.png"
                  className="w-full"
                  alt="Washing Machine"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  width={200}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div
                className="col-md-7 pt-5 order-2 order-md-1"
                data-aos="fade-right"
              >
                <h3>
                  Professional Washing Machine Services for Spotless Laundry
                  Every Time
                </h3>
                <p className="fst-italic">
                  Your trusted partner for comprehensive washing machine
                  services. We understand the importance of a reliable washing
                  machine in maintaining a clean and organized home. Our expert
                  technicians are here to ensure your washing machine operates
                  efficiently, offering repair, maintenance, and installation
                  services.
                </p>
                <ul>
                  <li>
                    <BsCheck2Circle /> Washing Machine Repair.
                  </li>
                  <li>
                    <BsCheck2Circle /> Washing Machine Maintenance.
                  </li>
                  <li>
                    <BsCheck2Circle /> Washing Machine Installation.
                  </li>
                  <li>
                    <BsCheck2Circle /> Drum Cleaning and Odor Removal.
                  </li>
                  <li>
                    <BsCheck2Circle /> Emergency Washing Machine Services.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row content">
              <div className="col-md-5" data-aos="fade-right">
                <Image
                  src="/Images/refrigerator.png"
                  className="w-full"
                  alt="Washing Machine"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  width={200}
                  height={100}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="col-md-7 pt-5" data-aos="fade-left">
                <h3>
                  Expert Refrigerator Services for a Cool and Fresh Kitchen
                </h3>
                <p>
                  Your go-to solution for comprehensive refrigerator services. A
                  functional refrigerator is the heart of any kitchen, and we
                  are dedicated to ensuring yours runs efficiently. Our skilled
                  technicians provide a range of services, including repair,
                  maintenance, and installation, to keep your refrigerator in
                  top-notch condition.
                </p>
                <ul>
                  <li>
                    <BsCheck2Circle /> Refrigerator Repair.
                  </li>
                  <li>
                    <BsCheck2Circle /> Refrigerator Maintenance.
                  </li>
                  <li>
                    <BsCheck2Circle /> Refrigerator Installation.
                  </li>
                  <li>
                    <BsCheck2Circle /> Freezer Defrosting and Cleaning.
                  </li>
                  <li>
                    <BsCheck2Circle /> Emergency Refrigerator Services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="steps">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
            </div>
            <div className="row no-gutters" data-aos="fade-up">
              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span>01</span>
                <h4>Appliance Repair</h4>
                <p>
                  Is your refrigerator not cooling, or is your washing machine
                  acting up? Our team of skilled technicians is here to diagnose
                  and fix all your appliance issues promptly. We specialize in
                  repairing a wide range of appliances, including refrigerators,
                  washing machines, dishwashers, ovens, and more.
                </p>
              </div>

              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span>02</span>
                <h4>Maintenance Services</h4>
                <p>
                  Preventive maintenance is key to extending the lifespan of
                  your appliances. Our maintenance services are designed to keep
                  your appliances in optimal condition, saving you money on
                  costly repairs in the long run. Schedule regular maintenance
                  with us and enjoy worry-free operation.
                </p>
              </div>

              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span>03</span>
                <h4> Installation</h4>
                <p>
                  Whether you&apos;ve purchased a new appliance or need help
                  installing an existing one, our technicians are trained to
                  handle installations efficiently and safely. We ensure that
                  your appliances are set up correctly, so you can start using
                  them hassle-free.
                </p>
              </div>

              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span>04</span>
                <h4>Appliance Inspection</h4>
                <p>
                  Are you considering purchasing a new home? Our appliance
                  inspection services help you evaluate the condition of
                  existing appliances. We provide detailed reports on their
                  functionality, helping you make informed decisions during the
                  home-buying process.
                </p>
              </div>
            </div>

            <div className="row content">
              <div className="section-title">
                <h2>Why Choose Us?</h2>
              </div>
              <div
                className="col-md-12 pt-5 order-2 order-md-1"
                data-aos="fade-right"
              >
                <p>
                  Experienced Technicians: Our team consists of highly skilled
                  and experienced technicians who are experts in their field.
                </p>
                <p>
                  Prompt Service: We understand the inconvenience a
                  malfunctioning appliance can cause. That&apos;s why we strive
                  to provide prompt and efficient service to get your appliances
                  back on track quickly.
                </p>
                <p>
                  Affordable Pricing: We believe in transparent and fair
                  pricing. Our competitive rates ensure you get the best value
                  for your money.
                </p>
                <p>
                  Customer Satisfaction: Our commitment to customer satisfaction
                  is unparalleled. We prioritize your needs and work towards
                  exceeding your expectations with every service.
                </p>
                <p>
                  Wide Service Area: We serve a broad area, ensuring that our
                  reliable services are accessible to a large community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services2" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Range of Services</h2>
              <p>
                where we offer a one-stop solution for all your home appliance
                service needs. Our skilled technicians specialize in air
                conditioner, washing machine, and refrigerator services,
                ensuring that your essential home appliances run efficiently and
                reliably.
              </p>
              <a href="tel:+919380245419" className="about-btn">
                <BsFillTelephoneFill /> Call Now
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions (FAQs)</h2>
            </div>

            <ul className="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  className="collapsed question"
                  href="#faq1"
                >
                  1. What services do you offer?{' '}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    We offer a range of services, including appliance repair,
                    maintenance, installation, and inspection. Our skilled
                    technicians are equipped to handle various home appliances
                    such as refrigerators, washing machines, dishwashers, ovens,
                    and more.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  className="collapsed question"
                >
                  2. How do I schedule a service appointment?
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Scheduling a service appointment is easy. You can call us at
                    +91 93802 45419 or use our online booking system on the
                    website. Provide your details, and our team will get in
                    touch with you to confirm the appointment.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  className="collapsed question"
                >
                  3. What areas do you serve?{' '}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    We serve a wide area to ensure our services are accessible
                    to a large community. Please check our service area map on
                    the website or contact us for specific location inquiries.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  className="collapsed question"
                >
                  4. Do you offer emergency services?{' '}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Yes, we understand that appliance issues can occur at any
                    time. We offer emergency services for urgent situations.
                    Contact us, and we&apos;ll do our best to address your needs
                    promptly.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  className="collapsed question"
                >
                  6. What brands do you service?{' '}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    We specialize in repairing appliances from various brands.
                    Our technicians are trained to work with a wide range of
                    manufacturers, ensuring comprehensive service for our
                    customers.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  className="collapsed question"
                >
                  7. Is it more cost-effective to repair or replace my
                  appliance? <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Our technicians will assess the condition of your appliance
                    and provide an honest recommendation. In some cases, repair
                    may be more cost-effective, while in others, replacement
                    might be the better option. We&apos;ll help you make an
                    informed decision.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq7"
                  className="collapsed question"
                >
                  8. Do you only install new appliances, or can you install
                  existing ones too?{' '}
                  <i className="bi bi-chevron-down icon-show"></i>
                  <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq7" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    We provide installation services for both new and existing
                    appliances. If you&apos;ve purchased a new appliance or need
                    help reinstalling an existing one, our technicians are here
                    to assist.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="contact section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Don&apos;t let appliance issues disrupt your daily routine.
                Contact Aircool Refrigeration for reliable and professional home
                appliance services. Schedule an appointment today and experience
                the convenience of hassle-free appliance operation.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <h3>Service Available</h3>
                      <p>
                        All Over Davanagere District, <br /> Conact Us For More
                        Information.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <BsEnvelopeAtFill />
                      <h3>Email Us</h3>
                      <p>Aircoolrefrigeration12@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <BsFillTelephoneFill />
                      <h3>Call Us</h3>
                      <p>+91 93802 45419</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="info-box mt-4">
                      <BsWhatsapp />
                      <h3>WhatsApp Us</h3>
                      <p>+91 93802 45419</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61816.02296700519!2d75.9162998!3d14.455871850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba25726a6222e5%3A0x4a120de147c6d472!2sDavanagere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709286939278!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="me-md-auto text-center text-md-center pt-3">
            <div className="copyright">
              &copy; Copyright{' '}
              <strong>
                <span>Aircool Refrigeration</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">Designed by SandDevelopers</div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-3">
            <a
              href="https://www.facebook.com/profile.php?id=61554255780705"
              target="_blank"
              className="facebook"
            >
              <BsFacebook />
            </a>
            {/* <a href="#" className="instagram">
              <BsInstagram />
            </a> */}
          </div>
        </div>
      </footer>
    </>
  );
}
