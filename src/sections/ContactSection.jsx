import { useMemo, useState } from "react";
import { Mail, Send, Phone   } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import { profile } from "../data/portfolioData";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(
    () => ({
      name: form.name.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
      message: form.message.trim().length < 10
    }),
    [form]
  );

  const inputClass = (key) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm outline-none transition ${
      touched[key] && errors[key]
        ? "border-rose-400/60 shadow-[0_0_0_3px_rgba(251,113,133,0.2)]"
        : "border-white/15 focus:border-neon/60 focus:shadow-[0_0_0_3px_rgba(82,247,212,0.2)]"
    }`;

  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) {
      setStatus({ type: "error", text: "Please fix validation errors before sending." });
      return;
    }

    try {
      setSubmitting(true);
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
        if (!response.ok) throw new Error("Submit failed");
        setStatus({ type: "success", text: "Message sent successfully. I will get back soon." });
      } else {
        window.location.href = `mailto:${profile.email}?subject=Project%20Inquiry%20from%20Portfolio&body=${encodeURIComponent(
          `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
        )}`;
        setStatus({ type: "success", text: "Mail client opened. You can send your message directly." });
      }
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    } catch (error) {
      setStatus({ type: "error", text: "Could not send right now. Please email directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="snap-section container-pad mt-24 pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Glassmorphic form with real-time validation and direct contact links."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <aside className="terminal-card rounded-2xl p-6">
          <p className="text-sm text-white/75">Available for frontend and MERN opportunities.</p>
          <a className="mt-4 inline-flex items-center gap-2 text-neon" href={`mailto:${profile.email}`}>
            <Mail size={16} />
            {profile.email}
          </a>
          <a className="mt-4 inline-flex items-center gap-2 text-neon" href={`mailto:${profile.phone}`}>
            <Phone size={16} />
            {profile.phone}
          </a>
        </aside>
        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="terminal-card rounded-2xl p-6"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className={inputClass("name")}
              placeholder="Your name"
              value={form.name}
              onBlur={() => setTouched((p) => ({ ...p, name: true }))}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            />
            <input
              className={inputClass("email")}
              placeholder="you@company.com"
              value={form.email}
              onBlur={() => setTouched((p) => ({ ...p, email: true }))}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            />
          </div>
          <textarea
            rows={5}
            className={`${inputClass("message")} mt-4`}
            placeholder="Tell me about your project..."
            value={form.message}
            onBlur={() => setTouched((p) => ({ ...p, message: true }))}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          />
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-neon/40 bg-neon/15 px-5 py-2.5 text-sm font-medium text-neon hover:shadow-neon"
          >
            <Send size={15} />
            {submitting ? "Sending..." : "Send Message"}
          </button>
          {status.text ? (
            <p className={`mt-3 text-xs ${status.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>{status.text}</p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
