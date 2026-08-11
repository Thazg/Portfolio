"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Send,
} from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const fieldClassName =
  "h-14 rounded-xl border-border/70 bg-background/60 px-5 text-base shadow-inner shadow-black/10 placeholder:text-muted-foreground/70 transition-[border-color,box-shadow,background-color] focus-visible:border-primary focus-visible:bg-background/80 focus-visible:ring-2 focus-visible:ring-primary/20";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/Thazg",
    href: "https://github.com/Thazg",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thangnguyen0512",
    href: "https://www.linkedin.com/in/thangnguyen0512/",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    value: "facebook.com/ntt0512",
    href: "https://www.facebook.com/ntt0512/",
    icon: FaFacebook,
  },
] as const;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    setErrorMsg("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 w-full max-w-[1200px] px-5 md:px-12 mx-auto">
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <Reveal width="100%">
          <div className="flex h-full flex-col">
            <h2 className="w-fit bg-gradient-to-r from-primary to-accent bg-clip-text font-heading text-2xl font-bold text-transparent md:text-3xl">
              Get in Touch
            </h2>
            <div className="mt-4 h-1.5 w-20 rounded-full bg-primary" />
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Have a question or want to work together? Send a message and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-3 lg:mt-auto lg:pt-10">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-card/40 p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/70 text-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                      <span className="mt-1 block truncate text-sm text-muted-foreground">{item.value}</span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} width="100%">
          <div className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card/40 p-2 shadow-[0_28px_80px_-54px_rgba(59,130,246,0.55)]">
            {errorMsg && (
              <Alert variant="destructive" className="m-2 mb-3 rounded-xl bg-destructive/10 text-destructive border-destructive/20">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription className="ml-2 text-base">
                  {errorMsg}
                </AlertDescription>
              </Alert>
            )}

            {isSuccess && (
              <Alert className="m-2 mb-3 rounded-xl bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                <CheckCircle2 className="h-5 w-5" />
                <AlertDescription className="ml-2 text-base">
                  Your message has been sent successfully. I will get back to you soon!
                </AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-1 flex-col gap-2">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  {...form.register("website")}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="sr-only">Name</FormLabel>
                      <FormControl>
                        <Input autoComplete="name" placeholder="Name" className={fieldClassName} {...field} />
                      </FormControl>
                      <FormMessage className="px-2 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input type="email" autoComplete="email" inputMode="email" placeholder="Email" className={fieldClassName} {...field} />
                      </FormControl>
                      <FormMessage className="px-2 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="sr-only">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" className={fieldClassName} {...field} />
                      </FormControl>
                      <FormMessage className="px-2 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex flex-1 flex-col space-y-1">
                      <FormLabel className="sr-only">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          className="min-h-[210px] resize-none rounded-xl border-border/70 bg-background/60 px-5 py-4 text-base shadow-inner shadow-black/10 placeholder:text-muted-foreground/70 transition-[border-color,box-shadow,background-color] focus-visible:border-primary focus-visible:bg-background/80 focus-visible:ring-2 focus-visible:ring-primary/20 lg:flex-1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="px-2 text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="group h-14 w-full rounded-xl bg-foreground text-sm font-semibold text-background hover:bg-foreground/90"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : isSuccess ? (
                    "Message Sent"
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
