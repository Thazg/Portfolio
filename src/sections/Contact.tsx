"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-32 w-full max-w-[1000px] px-6 md:px-12 mx-auto">
      <Reveal>
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            Get in Touch
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Have a question or want to work together? Leave a message below and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2} width="100%">
        <div className="p-8 md:p-12 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border/50 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          {errorMsg && (
            <Alert variant="destructive" className="mb-8 rounded-xl bg-destructive/10 text-destructive border-destructive/20">
              <AlertCircle className="h-5 w-5" />
              <AlertDescription className="text-base ml-2">
                {errorMsg}
              </AlertDescription>
            </Alert>
          )}

          {isSuccess && (
            <Alert className="mb-8 rounded-xl bg-green-500/10 text-green-500 border-green-500/20">
              <CheckCircle2 className="h-5 w-5" />
              <AlertDescription className="text-base ml-2">
                Your message has been sent successfully. I will get back to you soon!
              </AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Alan Turing" className="bg-background/50 border-border/50 focus-visible:ring-primary h-14 rounded-xl text-lg px-5 shadow-sm" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="alan@turing.com" className="bg-background/50 border-border/50 focus-visible:ring-primary h-14 rounded-xl text-lg px-5 shadow-sm" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium text-foreground">Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Inquiry" className="bg-background/50 border-border/50 focus-visible:ring-primary h-14 rounded-xl text-lg px-5 shadow-sm" {...field} />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium text-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Hi, I'd like to talk about..." 
                        className="bg-background/50 border-border/50 focus-visible:ring-primary min-h-[200px] resize-none rounded-xl text-lg p-5 shadow-sm" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full h-16 rounded-xl text-xl font-bold relative overflow-hidden group shadow-lg"
                disabled={isSubmitting || isSuccess}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : isSuccess ? (
                    "Message Sent Successfully!"
                  ) : (
                    <>
                      Send Message <Send className="w-6 h-6 ml-3" />
                    </>
                  )}
                </span>
              </Button>
            </form>
          </Form>
        </div>
      </Reveal>
    </section>
  );
}
