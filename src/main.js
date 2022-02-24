import  Header  from './components/layout/Header';
import './App.css';
import Banner from './components/Frontend/Banner';
import Help from './components/Frontend/Help'
import Specialize from './components/Frontend/Specialize';
import Include from './components/Frontend/Include';
import Different from './components/Frontend/Different';
import Madison from './components/Frontend/Madison';
import Contact from './components/Frontend/Contact';
import Newsletter from './components/Frontend/Newsletter';
import Footer from './components/Footer/Footer';
import Contact_form from './components/Frontend/Contact_form';
import Work_slider from './components/Frontend/Work_slider';
import Client from './components/Frontend/Client';
import Vertical_slider from './components/Frontend/Vertical_slider';

function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <Help />
      <Vertical_slider />
      <Specialize />
      <Contact_form />
      <Different />
      <Include />
      <Work_slider />
      <Madison />
      <Client />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Main;
