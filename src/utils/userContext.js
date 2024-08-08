import { createContext } from "react";

const userContext = createContext({
    loggedInUser : false
});

export default userContext