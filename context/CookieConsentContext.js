"use client";

import React, { createContext, useState, useEffect } from "react";
import { hasConsentedCookies } from "@/lib/cookies";

export const CookieConsentContext = createContext({
  consented: false,
  setConsented: () => {},
});

export const CookieConsentProvider = ({ children }) => {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasConsentedCookies());
  }, []);

  return (
    <CookieConsentContext.Provider value={{ consented, setConsented }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
