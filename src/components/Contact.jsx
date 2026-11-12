import { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { profileData } from '../data/portfolioData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Separator } from './ui/separator';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitted) {
      setSubmitted(false);
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) nextErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) nextErrors.message = 'Please enter your message.';
    return nextErrors;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject.trim() || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hello Sourabh,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    );
    return `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    window.location.href = buildMailtoUrl();
  };

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch {
      // Clipboard fallback
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-gradient-to-br from-[#061224] via-[#0b203f] to-[#122e57] py-12 sm:py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            dark
            eyebrow="Contact"
            title="Get in Touch"
            subtitle="Reach out directly via email or send an inquiry using the form below."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="min-w-0 lg:col-span-5" delay={40}>
            <Card className="h-full rounded-xl border-white/15 bg-white/10 text-white shadow-md backdrop-blur-xs">
              <CardHeader className="p-4 pb-3 sm:p-6 sm:pb-4">
                <CardTitle className="text-base font-semibold text-white sm:text-lg">
                  Direct Email
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Open to Customer Service Executive, Customer Support, International Voice &amp; Chat, and Staffing Coordination roles.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <Separator className="mb-5 bg-white/15" />

                <div className="rounded-lg border border-white/15 bg-black/20 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-300">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="mt-0.5 block break-all text-sm font-semibold text-sky-200 hover:text-white sm:truncate"
                      >
                        {profileData.email}
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(profileData.email, 'email')}
                      aria-label="Copy email address"
                      title="Copy email address"
                      className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      {copiedField === 'email' ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-slate-200" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-white/15 bg-black/20 p-3.5 sm:p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-300">
                    Time-Zone Experience
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-white">
                    EST, CST, and PST
                  </p>
                </div>

                <div className="mt-5">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Open Email App</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-7" delay={80}>
            <Card className="rounded-xl border-blue-200/80 bg-white text-slate-900 shadow-md">
              <CardHeader className="p-4 pb-3 sm:p-6 sm:pb-4">
                <CardTitle className="text-base font-semibold text-navy-950 sm:text-lg">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Complete the fields below to prepare a direct email message.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                <Separator className="mb-5" />

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {submitted && (
                    <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-900">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <div className="min-w-0">
                        <p className="font-medium">Your email draft is ready.</p>
                        <p className="mt-0.5 text-xs text-emerald-800 sm:text-sm">
                          If your email client did not open automatically,{' '}
                          <a
                            href={buildMailtoUrl()}
                            className="inline-flex items-center gap-1 font-semibold underline hover:text-emerald-950"
                          >
                            click here to open it
                            <ExternalLink className="h-3 w-3" />
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-name">Name</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        error={Boolean(errors.name)}
                      />
                      {errors.name && (
                        <p className="text-xs font-medium text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        error={Boolean(errors.email)}
                      />
                      {errors.email && (
                        <p className="text-xs font-medium text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Role opportunity or inquiry subject"
                      error={Boolean(errors.subject)}
                    />
                    {errors.subject && (
                      <p className="text-xs font-medium text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      error={Boolean(errors.message)}
                    />
                    {errors.message && (
                      <p className="text-xs font-medium text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-navy-900 text-white hover:bg-navy-800 sm:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </Button>

                    {submitted && (
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => {
                          setFormData(initialFormState);
                          setSubmitted(false);
                          setErrors({});
                        }}
                        className="self-start text-slate-600 sm:self-auto"
                      >
                        Clear form
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
