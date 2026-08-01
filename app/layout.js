import "./globals.css";
import AmbientFX from "@/components/AmbientFX";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import SiteScripts from "@/components/SiteScripts";

export const metadata = {
  title: "UnityESS — Energy, when you need it | Battery Energy Storage, India",
  description:
    "Unity ESS — battery energy storage built for India's grid by Ornate Solar and Inverted Energy. Commissioned in under 48 hours, monitored 24/7, from 1 kWh homes to 6.60 MWh utility systems.",
  icons: { icon: "/assets/img/favicon.webp" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AmbientFX />
        <Nav />
        {children}
        <Footer />

        <SiteScripts />
        <SiteEffects />
      </body>
    </html>
  );
}
