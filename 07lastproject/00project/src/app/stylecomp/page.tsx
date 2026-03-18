import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge, StatusDot } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const COLOR_SWATCHES: Array<{ name: string; value: string }> = [
  { name: "brand/blurple", value: "var(--ds-brand-blurple)" },
  { name: "brand/blurple-hover", value: "var(--ds-brand-blurple-hover)" },
  { name: "semantic/info", value: "var(--ds-semantic-info)" },
  { name: "semantic/success", value: "var(--ds-semantic-success)" },
  { name: "semantic/warning", value: "var(--ds-semantic-warning)" },
  { name: "semantic/danger", value: "var(--ds-semantic-danger)" },
  { name: "bg/primary", value: "var(--ds-bg-primary)" },
  { name: "bg/secondary", value: "var(--ds-bg-secondary)" },
];

export default function StyleCompPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <div className={styles.container}>
        <div className={styles.nav}>
          <Link className={styles.navLink} href="/">
            ← 메인으로
          </Link>
          <a className={styles.navLink} href="/api/hello">
            /api/hello
          </a>
        </div>

        <header className={styles.hero}>
          <div className={styles.kicker}>TEST 디자인 시스템</div>
          <div className={styles.h1}>Style Components</div>
          <p className={styles.subtitle}>
            추출한 JSON 토큰을 기반으로 만든 기본 UI 컴포넌트 모음입니다. 이 페이지를
            “컴포넌트 카탈로그”로 쓰고, 메인 페이지는 여기 컴포넌트로 조합합니다.
          </p>
          <div className={styles.row}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button pill variant="primary">
              Pill
            </Button>
          </div>
        </header>

        <div className={styles.grid2}>
          <Card
            title="Inputs"
            description="기본 입력, 힌트/에러 상태, 사이즈 토큰 적용"
            footer={
              <div className={styles.row}>
                <Button size="sm" variant="secondary">
                  Cancel
                </Button>
                <Button size="sm">Save</Button>
              </div>
            }
          >
            <div className="grid gap-4">
              <Input label="이메일" placeholder="name@test.com" hint="로그인에 사용됩니다." />
              <Input label="비밀번호" type="password" placeholder="••••••••" />
              <Input label="닉네임" placeholder="예: spark" error="이미 사용 중인 닉네임입니다." />
              <Input size="sm" placeholder="Small input" />
              <Input size="form" placeholder="Form input (44px)" />
            </div>
          </Card>

          <Card title="Badges" description="상태/톤에 따른 배지 표현">
            <div className={styles.row}>
              <Badge left={<StatusDot color="var(--ds-status-online)" />}>Online</Badge>
              <Badge left={<StatusDot color="var(--ds-status-idle)" />}>Idle</Badge>
              <Badge left={<StatusDot color="var(--ds-status-dnd)" />}>DND</Badge>
              <Badge left={<StatusDot color="var(--ds-status-offline)" />}>Offline</Badge>
            </div>
            <div className={styles.row} style={{ marginTop: "var(--ds-space-12)" }}>
              <Badge tone="info">Info</Badge>
              <Badge tone="success">Success</Badge>
              <Badge tone="warning">Warning</Badge>
              <Badge tone="danger">Danger</Badge>
            </div>
          </Card>
        </div>

        <Card title="Color tokens" description="대표 토큰 몇 개를 스와치로 확인">
          <div className={styles.tokens}>
            {COLOR_SWATCHES.map((c) => (
              <div key={c.name} className={styles.swatch}>
                <div className={styles.swatchColor} style={{ background: c.value }} />
                <div className={styles.swatchMeta}>
                  <div className={styles.swatchName}>{c.name}</div>
                  <div className={styles.swatchValue}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <SiteFooter />
    </div>
  );
}

