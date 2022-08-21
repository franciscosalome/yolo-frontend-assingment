import { Container } from "./style";
import CryptoSearchForm from "../../components/molecules/CryptoSearchForm";
import LeftContent from "../../components/organisms/LeftContent";
import Footer from "../../components/molecules/Footer";
import Header from "../../components/molecules/Header";
import RightContent from "../../components/organisms/RightContent";

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <LeftContent />
        <RightContent/>
      </main>
      <Footer />
    </Container>

  )
}