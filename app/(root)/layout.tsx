import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
      </>
  );
}
