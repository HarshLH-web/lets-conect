import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Let&apos;s Conect</title>
        <meta
          name="description"
          content="Learn how Let&apos;s Conect protects your data and keeps it safe while using the top live streaming platforms."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.letsconect.com/privacy-policy"
        />
      </Head>
      <Header />
      <section className="bg-[#F8ECEE] pt-12 pb-12 lg:pt-20 lg:pb-20">
        <div className="w-[90%] max-w-7xl mx-auto bg-[#F8ECEE]">
          <h1 className="text-2xl lg:text-4xl text-left text-[#383838] pt-2 lg:pt-4 font-bold">
            Privacy Policy for Let&apos;s Conect
          </h1>

          <p className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 font-semibold">
            Effective Date: May 24, 2026
          </p>

          <div className="text-lg lg:text-xl text-left text-[#383838] pt-4 lg:pt-6 space-y-4">
            <p>
              <span className="font-semibold">1. Introduction</span> Welcome to
              Let&apos;s Conect (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). We operate the website www.letsconect.com. We
              are an independent talent management company and act as a
              third-party partner to help users navigate and onboard with
              various official live-streaming application agency programs
              (including but not limited to Chamet, Poppo, Niki, and others).
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or fill out
              our contact forms.
            </p>
            <p>
              <span className="font-semibold">2. Information We Collect</span>{" "}
              We may collect personal and non-personal information from you when
              you interact with our website:
            </p>
            <p>
              <span className="font-semibold">Personal Data:</span> When you
              voluntarily submit a contact form or click our WhatsApp support
              links to inquire about agency registration, we may collect your
              Name, Email Address, and Phone/WhatsApp Number.
            </p>
            <p>
              <span className="font-semibold">Tracking &amp; Usage Data:</span>{" "}
              We use Google Ads and Google Tag Manager to track website
              performance. This automatically collects non-personally
              identifiable information such as your IP address, browser type,
              operating system, and the pages you view on our site.
            </p>
            <p>
              <span className="font-semibold">
                3. How We Use Your Information
              </span>{" "}
              We use the information we collect strictly for professional B2B
              communication and website optimization. Specifically, we use your
              data to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Respond to your inquiries and provide onboarding support via
                email or WhatsApp.
              </li>
              <li>
                Guide you through the official agency registration processes for
                your chosen partner platforms.
              </li>
              <li>
                Monitor and analyze our advertising campaigns and website
                traffic to improve user experience.
              </li>
              <li>
                Ensure compliance with our Terms &amp; Conditions and Google Ads
                policies.
              </li>
            </ul>
            <p>
              <span className="font-semibold">4. Sharing Your Information</span>{" "}
              We respect your privacy. We do not sell, rent, or trade your
              personal information to outside marketers. We only share
              information in the following limited situations:
            </p>
            <p>
              <span className="font-semibold">With Partner Platforms:</span> If
              you choose to officially register as an agency, you will submit
              your information directly to the respective official platforms
              (e.g., Chamet, Poppo, Niki, etc.). We do not control their data
              practices, and we strongly encourage you to read the official
              privacy policies of any platform you register with.
            </p>
            <p>
              <span className="font-semibold">Legal Obligations:</span> We may
              disclose your data if required by law or in response to valid
              requests by public authorities.
            </p>
            <p>
              <span className="font-semibold">
                5. Cookies and Tracking Technologies
              </span>{" "}
              Our website uses cookies and similar tracking tags (such as Google
              Ads Conversion Tracking) to understand how users interact with our
              site and to measure the success of our advertising. You can
              instruct your browser to refuse all cookies, but this may limit
              some website functionality.
            </p>
            <p>
              <span className="font-semibold">6. Data Security</span> We use
              standard administrative and technical security measures, including
              SSL encryption, to protect your personal information. However, no
              data transmission over the internet or wireless network is 100%
              secure, and we cannot guarantee absolute security.
            </p>
            <p>
              <span className="font-semibold">7. Your Privacy Rights</span> You
              have the right to request access to the personal data we hold
              about you, and to ask that your personal data be corrected,
              updated, or deleted. To exercise these rights, or to opt out of
              future WhatsApp/email communications, simply contact us using the
              information below.
            </p>
            <p>
              <span className="font-semibold">8. Contact Us</span> If you have
              any questions or concerns about this Privacy Policy, please
              contact us at:
            </p>
            <p>Company: Let&apos;s Conect</p>
            <p>Address: IFZA Business Park, Building A1, Dubai Silicon Oasis, Dubai, UAE</p>
            <a
              href="mailto:letsconecttech@gmail.com"
              className="text-blue-600 underline"
            >
              Email: letsconecttech@gmail.com
            </a>{" "}
            <br />
            <p
              className="text-blue-600 underline"
            >
              Contact Number: +971568803758
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
