"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const target = `/admin.html${window.location.hash || ""}`;
    window.location.replace(target);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "#31527a",
        background: "#eef4fb",
      }}
    >
      正在进入永铭官网管理后台…
    </main>
  );
}
