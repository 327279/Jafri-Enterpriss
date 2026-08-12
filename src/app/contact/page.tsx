import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Jafri Enterprises for leather manufacturing inquiries. Head office in Gulistan-E-Jauhar and factory in Korangi Industrial Area, Karachi. Email: info@jafrienterprises.biz",
};

export default function ContactPage() {
  return <ContactClient />;
}
