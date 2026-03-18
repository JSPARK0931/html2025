"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import styles from "./SiteHeader.module.css";

type NavItem = { href: string; label: string };

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { href: "/about", label: "회사소개" },
      { href: "/products", label: "제품" },
      { href: "/board", label: "게시판" },
    ],
    [],
  );

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/" aria-label="홈으로 이동">
            <div className={styles.logo} aria-hidden />
            <div className={styles.brandText}>
              <div className={styles.brandTitle}>TEST Design System</div>
              <div className={styles.brandDesc}>컴포넌트 기반 페이지 구조</div>
            </div>
          </Link>

          <nav className={styles.nav} aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(styles.navLink, pathname === item.href && "text-white")}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/stylecomp" className={styles.navLink}>
              StyleComp
            </Link>
          </nav>

          <div className={styles.right}>
            <button
              type="button"
              className={styles.hamburger}
              aria-label="메뉴 열기"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              onClick={() => setIsOpen(true)}
            >
              <span className={styles.hamburgerBars} aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div className={styles.overlay} onClick={() => setIsOpen(false)} aria-hidden />
            <aside id="mobile-drawer" className={styles.drawer} aria-label="모바일 메뉴">
              <div className={styles.drawerHeader}>
                <div className={styles.drawerTitle}>메뉴</div>
                <button type="button" className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="닫기">
                  ✕
                </button>
              </div>

              <div className={styles.drawerBody}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.drawerLink}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/stylecomp" className={styles.drawerLink}>
                  StyleComp
                </Link>
              </div>

              <div className={styles.drawerFooter}>Esc 키로 닫을 수 있어요.</div>
            </aside>
          </>
        )}
      </header>
      <div className={styles.spacer} aria-hidden />
    </>
  );
}

