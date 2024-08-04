import { createContext } from "react";

const userContext = createContext({
    loggedInUser : ""
});

export default userContext