import Link from "next/link";
import styles from "./home.module.css";
import { Button } from "@/components/ui/Button";
import { Badge, StatusDot } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSlider } from "@/components/home/HeroSlider";

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <HeroSlider />

      <div className={styles.container}>
        <section className={styles.features}>
          <Card
            title="구성 원칙"
            description="유지보수성을 우선해서 최소한의 기본 컴포넌트부터"
          >
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureTitle}>토큰 단일 소스</div>
                <div className={styles.featureDesc}>
                  색/타이포/스페이싱/라디우스/섀도우를 CSS 변수로 통일
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureTitle}>컴포넌트 재사용</div>
                <div className={styles.featureDesc}>
                  `Button`, `Input`, `Card`, `Badge` 중심으로 화면을 조립
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureTitle}>쇼케이스 페이지</div>
                <div className={styles.featureDesc}>
                  `app/stylecomp/page.tsx`가 스펙 문서 역할
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
