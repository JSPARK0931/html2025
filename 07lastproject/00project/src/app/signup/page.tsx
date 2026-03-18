import Link from "next/link";
import styles from "../authPage.module.css";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SignupPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.left} aria-label="회원가입 안내">
          <div className={styles.kicker}>TEST • AUTH</div>
          <div className={styles.title}>회원가입</div>
          <p className={styles.desc}>
            최소 필드로 시작하는 가입 페이지입니다. 추후 약관 동의, 이메일 인증, 프로필 설정 단계를 추가해도
            구조가 무너지지 않게 만들었습니다.
          </p>
          <div className={styles.helper}>
            이미 계정이 있으신가요? <Link className={styles.mutedLink} href="/login">로그인</Link>
          </div>
        </section>

        <section className={styles.right} aria-label="회원가입 폼">
          <Card
            className={styles.formCard}
            title="새 계정 만들기"
            description="기본 정보를 입력하세요."
            footer={
              <div className={styles.formRow}>
                <Link className={styles.mutedLink} href="/">
                  ← 홈으로
                </Link>
                <Link className={styles.mutedLink} href="/login">
                  로그인 →
                </Link>
              </div>
            }
          >
            <form className={styles.form} method="post" action="#">
              <Input label="이메일" type="email" placeholder="name@test.com" autoComplete="email" required />
              <Input label="닉네임" placeholder="spark" autoComplete="nickname" required />
              <Input label="비밀번호" type="password" placeholder="8자 이상" autoComplete="new-password" required />
              <Input
                label="비밀번호 확인"
                type="password"
                placeholder="비밀번호 다시 입력"
                autoComplete="new-password"
                required
              />

              <div className={styles.actions}>
                <Button type="submit">회원가입</Button>
                <Button type="button" variant="ghost" pill>
                  약관 보기
                </Button>
              </div>

              <div className={styles.divider} />
              <div className={styles.helper}>
                가입을 진행하면 서비스 이용약관 및 개인정보처리방침에 동의한 것으로 간주됩니다.
              </div>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
}

