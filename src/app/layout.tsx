import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Fitmee Fitness - Forge Your Best Self | Premium Gym Alwar',
  description: 'Join Fitmee Fitness in Alwar for elite coaching, diverse programs, and a supportive community. Start your free trial today and achieve your fitness goals.',
  keywords: ["gym Alwar, fitness Alwar, personal training, CrossFit Alwar, yoga classes, weight training, membership plans, transformation gym"],
  openGraph: {
    "title": "Fitmee Fitness - Forge Your Best Self | Premium Gym Alwar",
    "description": "Join Fitmee Fitness in Alwar for elite coaching, diverse programs, and a supportive community. Start your free trial today and achieve your fitness goals.",
    "url": "https://www.fitmeefitness.com",
    "siteName": "Fitmee Fitness",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/fitness-girl-gym_1157-15944.jpg",
        "alt": "Athlete training in a gym"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Fitmee Fitness - Forge Your Best Self | Premium Gym Alwar",
    "description": "Join Fitmee Fitness in Alwar for elite coaching, diverse programs, and a supportive community. Start your free trial today and achieve your fitness goals.",
    "images": [
      "http://img.b2bpic.net/free-photo/fitness-girl-gym_1157-15944.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
