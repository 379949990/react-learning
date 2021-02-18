import React, { useContext } from "react";

// import { UserContext, TokenContext } from "../App";
import useUserContext from "./hooks/user-hook";

export default function CustomizedHookDemo_2() {
  // const user = useContext(UserContext);
  // const token = useContext(TokenContext);
  const [user, token] = useUserContext();

  return <div>
    <h3>CustomizedHookDemo_2</h3>
    <h4>user: {JSON.stringify(user)}</h4>
    <h4>token: {JSON.stringify(token)}</h4>
  </div>;
}
