export const ConditionalRenderingBasicTwo = () => {
  const show = true;

  let html = <span>Got data 2</span>;

  if (show) {
    html = <div className="spinner">Loading 2...</div>;
  }

  return <>{html}</>;
};
