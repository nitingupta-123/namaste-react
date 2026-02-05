const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-4 justify-center p-4">
      {[...Array(18)].map((_, index) => (
        <div key={index} className="shimmer-card m-5 w-64 h-96 bg-gray-200 rounded-lg animate-pulse"></div>
      ))}
    </div>
  );
};

export default Shimmer;
