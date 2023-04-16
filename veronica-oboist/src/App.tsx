import About from './About'
import More from './More'
import Youtube from './Youtube'
import Footer from './Footer'

export default function App() {

  return (
    <div className="container">
      <h1>Veronica Ulrikkeholm</h1>

      <div className="page">
        <About />
        <Youtube />
      </div>
      
      <Footer />
    </div>
  )
}
