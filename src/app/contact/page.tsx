import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | KC Shinde & Associates",
  description: "Get in touch with KC Shinde & Associates. Primary CTA: WhatsApp.",
};


export default function ContactPage() {
  return <ContactClient />;
}

