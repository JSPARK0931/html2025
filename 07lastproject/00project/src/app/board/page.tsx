import { Card } from "@/components/ui/Card";
import styles from "../sharedPage.module.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function BoardPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.container}>
        <Card title="게시판" description="공지/게시글 목록 페이지 (샘플)">
          <div className={styles.bodyText}>
            여기에 게시글 리스트, 검색, 페이지네이션 등을 추가하면 됩니다.
          </div>
        </Card>
      </main>
      <SiteFooter />
    </div>
  );
}

