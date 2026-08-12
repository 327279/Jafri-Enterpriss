import { redirect } from "next/navigation";

/**
 * /about → redirects to /company (canonical About Us page)
 */
export default function AboutPage() {
  redirect("/company");
}
