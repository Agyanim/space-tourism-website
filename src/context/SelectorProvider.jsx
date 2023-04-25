import React, { createContext, useState } from "react";

export const TechnologyContext = createContext();

const MyProvider = ({Children}) => {
  const [technologySelector, setTechnologySelector] = useState(0);

  return (
    <TechnologyContext.Provider
      value={[technologySelector,setTechnologySelector]}
    >
      {Children}
    </TechnologyContext.Provider>
  );
};
export default MyProvider;
