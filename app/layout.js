import Nav from '@components/Nav';
import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Provider from "@components/Provider";

export const metadata = {
    title: "PromptTopia",
    description:"Discover and share AI prompts" 
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
                <Analytics />
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout