export const ConditionalBasicOne = () => {
  const show = true;

  if (show) {
    return <div className="spinner">Loading...</div>;
  }

  return <span>Got data</span>;
};
