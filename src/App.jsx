import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3800);
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Minimal Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Contact onNotify={showNotification} />
      </main>

      {/* Complete Editorial Footer */}
      <Footer />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
