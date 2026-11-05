import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KenyaMatch - Location-Based Dating for Kenya",
  description: "Connect with people nearby in Kenya. Profiles, GPS matching, county filters, chat, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 font-sans antialiased">
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <a href="/" className="text-2xl font-bold text-rose-600">
                KenyaMatch
              </a>
              <div className="flex gap-4">
                <a href="/discover" className="text-gray-700 hover:text-rose-600">Discover</a>
                <a href="/profile" className="text-gray-700 hover:text-rose-600">Profile</a>
                <a href="/login" className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-700">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t bg-white/50 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} KenyaMatch. Connect safely in Kenya.
        </footer>
      </body>
    </html>
  );
}
