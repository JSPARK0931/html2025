import Link from "next/link";
import styles from "../authPage.module.css";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.left} aria-label="로그인 안내">
          <div className={styles.kicker}>TEST • AUTH</div>
          <div className={styles.title}>로그인</div>
          <p className={styles.desc}>
            헤더/푸터 없이 인증 화면만 단독으로 렌더링합니다. 실제 연동 시에는 이 폼을 기준으로 API 호출만
            붙이면 됩니다.
          </p>
          <div className={styles.helper}>
            계정이 없으신가요? <Link className={styles.mutedLink} href="/signup">회원가입</Link>
          </div>
        </section>

        <section className={styles.right} aria-label="로그인 폼">
          <Card
            className={styles.formCard}
            title="계정으로 로그인"
            description="이메일과 비밀번호를 입력하세요."
            footer={
              <div className={styles.formRow}>
                <Link className={styles.mutedLink} href="/">
                  ← 홈으로
                </Link>
                <Link className={styles.mutedLink} href="/signup">
                  회원가입 →
                </Link>
              </div>
            }
          >
            <form className={styles.form} method="post" action="#">
              <Input label="이메일" type="email" placeholder="name@test.com" autoComplete="email" required />
              <Input label="비밀번호" type="password" placeholder="••••••••" autoComplete="current-password" required />

              <div className={styles.actions}>
                <Button type="submit">로그인</Button>
                <Button type="button" variant="secondary">
                  Google로 계속하기
                </Button>
              </div>

              <div className={styles.divider} />
              <div className={styles.formRow}>
                <span className={styles.helper}>비밀번호를 잊으셨나요?</span>
                <button type="button" className={styles.mutedLink}>
                  재설정
                </button>
              </div>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
}

