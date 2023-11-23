const TechCard = ({ item }: { item: string }) => {
  return (
    <p
      key={item}
      className="px-4 py-2 mr-2 mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      {item}
    </p>
  );
};

export default TechCard;
