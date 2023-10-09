import Layout from '@/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fira_Mono, Inter, Press_Start_2P } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})
const press = Press_Start_2P({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-press-start"
});

const fira = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-fira-mono"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${press.variable} ${fira.variable} font-inter`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>

  )
}
