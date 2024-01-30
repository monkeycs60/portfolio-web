import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Clément Serizay.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Conception du site :</span> construit avec
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, hébergé sur Vercel.
      </p>
    </footer>
  );
}
