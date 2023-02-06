import Navbar from './NavBar';
import Footer from './Footer';

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
