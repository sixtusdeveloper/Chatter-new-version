// THis is working well without the customizations
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatter",
  description: "A dynamic and innovative platform designed to cater to the needs of traditional bookworms and modern content creators alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { 
          colorPrimary: "#3371FF", 
          fontSize: '14px' 
        },
        elements: {
          button: {
            padding: '10px 2px', 
          },
          formFieldInput: {
            borderRadius: '6px !important',  
            borderColor: '#333 !important',   
            padding: '10px !important',       
            backgroundColor: '#ffffff !important',
            color: '#333 !important',        
          },
        },
      }}
    >
      <html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}















// // Updated code for font
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "./provider";
// import { ClerkProvider } from "@clerk/nextjs";
// import Head from 'next/head';
// // import { dark } from "@/next/themes";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Chatter Application",
//   description: "A dynamic and innovative platform designed to cater to the needs of traditional bookworms and modern content creators alike.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider
//       appearance={{
//         variables: { 
//           colorPrimary: "#3371FF", 
//           fontSize: '14px' 
//         },
//         elements: {
//           button: {
//             padding: '10px 2px', 
//           },
//           formFieldInput: {
//             borderRadius: '6px !important',  
//             borderColor: '#333 !important',   
//             padding: '10px !important',       
//             backgroundColor: '#ffffff !important',
//             color: '#333 !important',        
//           },
//         },
//       }}
//     >
//       <html lang="en">
//         <Head>
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body className={inter.className}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }


