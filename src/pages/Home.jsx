import Header from "../Components/Header";
import HomePageLayout from "../Components/HomePageLayout";
import TicketInformation from "../Components/TicketInformation";

const Home = () => {
  return (
    <>
      <Header />
      <main className="_container">
        <HomePageLayout />
        <TicketInformation />
      </main>
    </>
  );
};

export default Home;
