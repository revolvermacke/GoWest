import HelpCard from "../Components/HelpCard";

const Help = () => {
  const helpData = [
  {
    icon: "fa-regular fa-clock",
    title: "How long is my ticket valid?",
    text: "Your ticket is valid from the moment of purchase. A 30-minute ticket lasts 30 minutes and a 60-minute ticket lasts 60 minutes."
  },
  {
    icon: "fa-solid fa-qrcode",
    title: "How do I show my ticket?",
    text: "After purchasing, a QR code will appear on your screen. Show this QR code to the bus driver or ticket inspector when boarding."
  },
  {
    icon: "fa-regular fa-credit-card",
    title: "What payment methods are accepted?",
    text: "We accept all major credit and debit cards, Swish, and Apple Pay / Google Pay."
  },
  {
    icon: "fa-solid fa-phone",
    title: "What if my phone dies?",
    text: "Unfortunately, the ticket is only valid while displayed on your device. We recommend keeping your phone charged before travel."
  },
  {
    icon: "fa-regular fa-circle-question",
    title: "Need more help?",
    text: "Contact us at support@noexisting.se or call a friend? :-)"
  }
];

  return (
    <div className="_container">
      <div className="_helpTop">
        <h3>Help</h3>
        <p>Frequently asked questions</p>
      </div>

      {helpData.map((item, index) => (
        <HelpCard
          key={index}
          icon={item.icon}
          title={item.title}
          text={item.text}
          isLast={index === helpData.length - 1}
        />
      ))}
    </div>
  );
};

export default Help;