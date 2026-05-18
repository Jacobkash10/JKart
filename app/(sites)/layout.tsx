import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
      {children}
    <Footer />
    </>
  );
}
