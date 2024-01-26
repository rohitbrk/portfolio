import SocialLinks from "./common/SocialLinks";

const GetToKnowMe = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-6">
      <h1 className="text-center text-2xl font-bold mb-2">Get to know me!</h1>
      <div className="flex flex-row justify-center">
        <h2 className="text-l font-bold mb-2 flex flex-row">Interests</h2>
        &nbsp;-&nbsp;
        <p>Yoga, Trekking </p>
      </div>
      <SocialLinks size={40} />
    </div>
  );
};

export default GetToKnowMe;
