import HomePageLayout from "../Components/HomePageLayout";
import TicketInformation from "../Components/TicketInformation";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <main className="_container">
        <HomePageLayout />
        <TicketInformation />
      </main>
    </>
  );
};

export default Home;
