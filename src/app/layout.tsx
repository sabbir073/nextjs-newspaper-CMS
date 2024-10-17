import Footer from '@/components/layout/Footer';
import './globals.css';
import Header from '@/components/layout/Header';
import localFont from 'next/font/local';

const solaiman = localFont({
  src: [
    {
      path: "./fonts/SolaimanLipi.ttf",
      weight: "400",
    },
  ],
  variable: "--solaiman",
});

export const metadata = {
  title: "এই মাত্র | বাংলা নিউজ পেপার",
  description: '',
};

// Define props for RootLayout
interface RootLayoutProps {
  children: React.ReactNode; // Specify that children can be any React node
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${solaiman.variable} font-solaiman`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
