import Header from "../Components/Header";
import HomePageLayout from "../Components/HomePageLayout";
import TicketInformation from "../Components/TicketInformation";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="_container">
        <HomePageLayout />
        <TicketInformation />
        <Footer />
      </main>
    </>
  );
};

export default Home;
