import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Adolescents Wellness Africa (AWA) privacy policy to learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "1. Introduction",
    body: `Adolescents Wellness–Africa ("AWA", "we", "us", or "our") is committed to protecting the privacy of everyone who interacts with us — including website visitors, program participants, parents and guardians, school partners, and donors. This Privacy Policy explains what information we collect, how we use it, and the choices you have.`,
  },
  {
    heading: "2. Information We Collect",
    body: `We may collect information you provide directly to us, such as your name, email address, phone number, and organisation, when you contact us, register for a program, or make an enquiry through our website. We may also collect limited technical information automatically, such as browser type and pages visited, to help us improve our website.`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `We use the information we collect to respond to enquiries, coordinate program participation, communicate updates about our work, process partnership or donation requests, and improve our services and website. We do not sell your personal information to third parties.`,
  },
  {
    heading: "4. Information About Adolescents",
    body: `Where our programs involve adolescents, we collect only the information necessary to provide safe and effective counselling, mentorship, or life-skills support, and we handle this information with additional care in line with child-safeguarding best practice. Information shared during counselling sessions is treated as confidential, except where disclosure is required to protect a child from harm or as required by law.`,
  },
  {
    heading: "5. Sharing of Information",
    body: `We may share information with partner schools, government agencies, or collaborating organisations only where necessary to deliver our programs, and always in a manner consistent with this policy. We may also disclose information if required to do so by law or to protect the safety of a participant.`,
  },
  {
    heading: "6. Data Security",
    body: `We take reasonable technical and organisational measures to protect the information we hold against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: "7. Cookies",
    body: `Our website may use cookies and similar technologies to understand how visitors use our site and to improve functionality. You can control cookies through your browser settings.`,
  },
  {
    heading: "8. Your Rights",
    body: `You may request access to, correction of, or deletion of your personal information by contacting us using the details below, subject to any legal or safeguarding obligations that may limit deletion.`,
  },
  {
    heading: "9. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.`,
  },
  {
    heading: "10. Contact Us",
    body: `If you have questions about this Privacy Policy or how we handle your information, please contact us at info@adolescentswellness-africa.org or +254 742 631 201.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-blue-900 py-16 md:py-20 px-6 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Privacy Policy</h1>
        <div className="w-20 h-1 bg-amber-400 mx-auto mb-6" aria-hidden="true" />
        <p className="max-w-2xl mx-auto text-blue-100 text-base md:text-lg">
          How Adolescents Wellness–Africa collects, uses, and protects your information.
        </p>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20 px-6 max-w-3xl mx-auto">
        <p className="text-slate-500 text-sm mb-10">Effective date: January 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{s.heading}</h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500">
          Have questions?{" "}
          <Link href="/contact" className="text-blue-700 font-semibold hover:text-blue-900 transition">
            Get in touch with us
          </Link>
          .
        </div>
      </section>
    </main>
  );
}