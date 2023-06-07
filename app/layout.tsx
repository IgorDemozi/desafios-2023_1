import './globals.css'

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" className="theme-azul">
         <body className="min-h-screen bg-myTheme-Body p-4">
            <div className="rounded bg-myTheme-Container p-4">{children}</div>
         </body>
      </html>
   )
}
