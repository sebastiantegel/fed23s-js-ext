import { ConditionalAnd } from "./ConditionalAnd";
import { ConditionalBasicOne } from "./ConditionalBasicOne";
import { ConditionalRenderingBasicTwo } from "./ConditionalRenderingBasicTwo";
import { ConditionalTernary } from "./ConditionalTernary";

export const ConditionalRender = () => {
  return (
    <>
      <h3>Conditional rendering:</h3>
      <ConditionalBasicOne />
      <ConditionalRenderingBasicTwo />
      <ConditionalTernary />
      <ConditionalAnd />
    </>
  );
};
