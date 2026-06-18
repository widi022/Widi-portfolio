"use client";

import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

import MessageStatus from "@/components/MessageStatus";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error">(
    "success",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await Promise.resolve();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }

    setIsOpen(true);
  }

  return (
    <Section id="contact" background="bars" className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8 xl:px-5">
        <form onSubmit={handleSubmit} className="border border-white/15 bg-black p-6">
          <h2 className="text-4xl font-semibold leading-tight">
            Let&apos;s <span className="text-[#20a4b8]">Build Something</span>
            <br />
            Great
          </h2>
          <p className="mt-6 leading-7 text-zinc-400">
            Got an idea, a project, or just want to connect? I&apos;m always
            open to new conversations.
          </p>
          <div className="mt-9 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" placeholder="Enter your name" required className="h-12 rounded-none border-white/15 bg-black" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" placeholder="Enter your email" required className="h-12 rounded-none border-white/15 bg-black" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" placeholder="Enter your message" required className="min-h-32 rounded-none border-white/15 bg-black" />
            </div>
            <Button type="submit" className="h-14 rounded-none bg-white text-black hover:bg-zinc-200">
              <Mail />
              Send Message
            </Button>
          </div>
        </form>

        <div className="flex flex-col">
          <div className="space-y-6">
            <div className="border-b border-white/15 pb-6">
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="mt-5 text-zinc-400">Jakarta, Indonesia</p>
            </div>
            <div className="border-b border-white/15 pb-6">
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="mt-5 text-zinc-400">(+62) 1234567890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Social Media</h3>
              <div className="mt-5 flex gap-3">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok].map(
                  (Icon, index) => (
                    <a key={index} href="#" aria-label="Social profile" className="grid size-10 place-items-center rounded-full border border-white/20">
                      <Icon className="size-4" />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
          <p className="mt-auto pt-16 text-5xl font-bold lg:text-6xl">
            GET IN TOUCH
          </p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="overflow-hidden rounded-none border-white/15 bg-black p-0 text-white sm:max-w-lg">
          <MessageStatus
            status={submitStatus}
            onAction={() =>
              submitStatus === "success"
                ? setIsOpen(false)
                : setIsOpen(false)
            }
          />
        </DialogContent>
      </Dialog>
    </Section>
  );
}
