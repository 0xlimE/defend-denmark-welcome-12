import { useEffect } from "react";

interface ExternalRedirectProps {
  to: string;
}

export const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
};
