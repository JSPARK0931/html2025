import { Card } from "@/components/ui/Card";
import styles from "../sharedPage.module.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.container}>
        <Card title="회사소개" description="소개 페이지 (샘플)">
          <div className={styles.bodyText}>여기에 회사 소개 콘텐츠를 구성하면 됩니다.</div>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}
