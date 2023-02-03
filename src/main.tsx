import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Subscription } from './pages/subscription'
import { Payment } from './pages/payment'
import { PickAdds } from './pages/pickadds'
import { Summary } from './pages/summary'
import { Finished } from './pages/finished'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Subscription />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/pick-add-on" element={<PickAdds />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/finished" element={<Finished />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
