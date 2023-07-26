import Button from "../Buttons/Button";

const Card = ({ title, content, buttonText }) => {
  return (
    <div className="servicesCard whitespace-pre-line max-w-sm rounded shadow-lg w-64 h-96 space-y-24 snap-center">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-white">{title}</div>
        <p className="text-white text-base">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button content={buttonText || "View More"} to="#" />
      </div>
    </div>
  );
};

export default Card;
