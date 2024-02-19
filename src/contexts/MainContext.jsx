/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext();

const MainContext = ({ children }) => {
  const [dialog, setDialog] = useState(false);
  const [leaveCV, setLeaveCV] = useState(false);
  const [job, setJob] = useState(false);
  const [article, setArticle] = useState(false);

  const info = {
    dialog,
    setDialog,
    leaveCV,
    setLeaveCV,
    job,
    setJob,
    article,
    setArticle,
  };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
};

export default MainContext;
