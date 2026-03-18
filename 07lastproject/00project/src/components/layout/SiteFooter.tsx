import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <div className={styles.logo} aria-hidden />
              <div className={styles.title}>TEST Design System</div>
            </div>
            <div className={styles.desc}>
              디자인 토큰(JSON) → 컴포넌트 → 페이지로 이어지는 구조를 기준으로, 유지보수 가능한 UI를 만드는 것을
              목표로 합니다.
            </div>
          </div>

          <div className={styles.cols}>
            <div>
              <div className={styles.colTitle}>메뉴</div>
              <div className={styles.linkList}>
                <Link className={styles.link} href="/about">
                  회사소개
                </Link>
                <Link className={styles.link} href="/products">
                  제품
                </Link>
                <Link className={styles.link} href="/board">
                  게시판
                </Link>
              </div>
            </div>

            <div>
              <div className={styles.colTitle}>리소스</div>
              <div className={styles.linkList}>
                <Link className={styles.link} href="/stylecomp">
                  StyleComp
                </Link>
                <a className={styles.link} href="/api/hello">
                  API 예시
                </a>
              </div>
            </div>

            <div>
              <div className={styles.colTitle}>소스</div>
              <div className={styles.linkList}>
                <a className={styles.link} href="https://test.com" target="_blank" rel="noreferrer">
                  https://test.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© {new Date().getFullYear()} TEST. All rights reserved.</div>
          <div>Extracted: 2026-03-18</div>
        </div>
      </div>
    </footer>
  );
}

