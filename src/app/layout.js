import './globals.css'
import Header from './components/Header'
import Provider from './Provider'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider>
          <Header />
          <Navbar />
          <Searchbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
