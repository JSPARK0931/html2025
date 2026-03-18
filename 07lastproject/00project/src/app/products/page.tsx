import { Card } from "@/components/ui/Card";
import styles from "../sharedPage.module.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.container}>
        <Card title="제품" description="제품 목록/카탈로그 페이지 (샘플)">
          <div className={styles.bodyText}>
            여기에 제품 카드 그리드, 필터, 상세 진입 등을 추가하면 됩니다.
          </div>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}

