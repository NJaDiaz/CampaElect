"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { useContext } from "react";
import { CookieConsentContext } from "@/context/CookieConsentContext"; // ajusta la ruta

export default function CookiesBanner() {
  const { setConsented } = useContext(CookieConsentContext);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      cookieName="mi_consentimiento_cookie"
      style={{ background: "#2B373B", fontSize: "14px" }}
      buttonStyle={{ backgroundColor: "#4CAF50", color: "#fff", fontSize: "14px" }}
      declineButtonStyle={{ backgroundColor: "#f44336", color: "#fff", fontSize: "14px" }}
      expires={365}
      onAccept={() => setConsented(true)}
      onDecline={() => setConsented(false)}
    >
      Usamos cookies para mejorar tu experiencia.{" "}
      <Link href="/politica-cookies" className="underline text-blue-300">
        Leer más
      </Link>
    </CookieConsent>
    
  );
}
