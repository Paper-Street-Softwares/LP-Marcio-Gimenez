import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.jsx'
import CardsRota from './components/cards/CardsRota.jsx'
import ScrollToTop from './pages/ScrollToTop.jsx'

import './index.css'
import './styles/backgrounds.css'
import './styles/shapeDivs.css'
import Lp01 from './pages/Lp01.jsx'
import Lp02 from './pages/Lp02.jsx'
import Lp03 from './pages/Lp03.jsx'
import WhatsAppLinks from './components/interactives/WhatsappLinks.jsx'
import Privacy from './pages/Privacy.jsx'
import Form from './pages/Form.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ArticlesPage from './pages/ArticlesPage.jsx'
import Trajetoria from './pages/Trajetória.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="privacidade" element={<Privacy />} />
      <Route path="formulario" element={<Form />} />
      <Route path="servicos" element={<ServicesPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="artigos" element={<ArticlesPage />} />
      <Route path="trajetoria" element={<Trajetoria />} />

      <Route path="/:cardSlug" element={<CardsRota colorMode="light" />} />

      {/* <Route path="/" element={<Lp01 />} /> */}
      {/* <Route path="/whatsapp" element={<WhatsAppLinks />} /> */}

      {/* <Route path="/lp02" element={<Lp02 />} /> */}
      {/* <Route path="/lp03" element={<Lp03 />} /> */}
      {/* <Route path="/whatsapp" element={<WhatsAppLinks form={true} />} /> */}
    </Routes>
  </Router>,
)
