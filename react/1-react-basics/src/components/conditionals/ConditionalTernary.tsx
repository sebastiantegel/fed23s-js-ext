export const ConditionalTernary = () => {
  const show = true;

  return <>{show ? <div>Loading 3...</div> : <span>Got data 3</span>}</>;
};
