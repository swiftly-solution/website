import '@/app/global.css';
import TypesenseSearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ defaultTheme: "dark", enableSystem: true }} search={{
          options: {
            type: 'fetch',
            delayMs: 200,
          },
          SearchDialog: TypesenseSearchDialog
        }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
