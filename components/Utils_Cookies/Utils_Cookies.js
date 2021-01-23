import React from "react";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

export default {
  bake_cookie,
  read_cookie: (str) => {
    const value = read_cookie(str);
    return value.length > 0 ? value : null;
  },
  delete_cookie,
};
