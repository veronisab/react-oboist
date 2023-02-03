import About from './About'

function App() {

  return (
    <div className="container">
      <h1>Veronica Ulrikkeholm</h1>
      <About
        mainText="Norwegian/Danish oboist Veronica Ulrikkeholm is currently based in and around Oslo, Norway"
        moreText={"mer tekst her blablabla"} />
        
      <About
        mainText="Calendar"
        moreText={"26.mars konsert"} />
      
           <About
        mainText="Contact"
        moreText={"mail@veronicaisabelle.com"} />
    </div>
  )
}

export default App
