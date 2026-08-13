import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "永铭官网管理后台",
  description: "永铭官网内容、产品、应用与服务一站式管理平台",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "永铭官网管理后台", description: "内容 · 产品 · 服务一站式管理", images: [{ url: "/og.png", width: 1536, height: 1024 }] },
  twitter: { card: "summary_large_image", title: "永铭官网管理后台", description: "内容 · 产品 · 服务一站式管理", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
