"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge, StatusDot } from "@/components/ui/Badge";
import styles from "./HeroSlider.module.css";

type Slide = {
  id: string;
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  ctas: Array<
    | { type: "link"; href: string; label: string; variant?: "primary" | "secondary" | "ghost" }
    | { type: "button"; label: string; variant?: "primary" | "secondary" | "ghost" }
  >;
};

function clampIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export function HeroSlider() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        id: "s1",
        title: "토큰 기반 UI, 한 번에 정리",
        subtitle:
          "추출한 JSON 디자인 토큰을 CSS 변수로 매핑하고, 재사용 가능한 컴포넌트로 페이지를 빠르게 조립합니다.",
        backgroundImageUrl: "https://picsum.photos/id/1018/1920/1080",
        ctas: [
          { type: "link", href: "/stylecomp", label: "StyleComp 보기", variant: "primary" },
          { type: "link", href: "/products", label: "제품", variant: "secondary" },
        ],
      },
      {
        id: "s2",
        title: "컴포넌트 중심으로 확장",
        subtitle:
          "헤더/푸터/카드/버튼/인풋을 기준으로 화면을 구성해 유지보수 비용을 낮추고 일관된 UX를 제공합니다.",
        backgroundImageUrl: "https://picsum.photos/id/1015/1920/1080",
        ctas: [
          { type: "link", href: "/about", label: "회사소개", variant: "primary" },
          { type: "link", href: "/board", label: "게시판", variant: "ghost" },
        ],
      },
      {
        id: "s3",
        title: "모바일까지 자연스럽게",
        subtitle:
          "햄버거 메뉴 드로어 + 터치 스와이프 + 자동 재생까지 포함한 100vh 히어로 슬라이더입니다.",
        backgroundImageUrl: "https://picsum.photos/id/1005/1920/1080",
        ctas: [
          { type: "link", href: "/stylecomp", label: "컴포넌트 카탈로그", variant: "secondary" },
          { type: "button", label: "가이드 다운로드", variant: "ghost" },
        ],
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const goTo = (nextIndex: number) => setActiveIndex(clampIndex(nextIndex, slides.length));
  const goNext = () => goTo(activeIndex + 1);
  const goPrev = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => goNext(), 5000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, activeIndex, slides.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <section
      ref={sliderRef}
      className={styles.root}
      aria-label="메인 히어로 슬라이더"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
        touchDeltaX.current = 0;
      }}
      onTouchMove={(e) => {
        if (touchStartX.current == null) return;
        const x = e.touches[0]?.clientX ?? touchStartX.current;
        touchDeltaX.current = x - touchStartX.current;
      }}
      onTouchEnd={() => {
        const dx = touchDeltaX.current;
        touchStartX.current = null;
        touchDeltaX.current = 0;
        if (Math.abs(dx) < 48) return;
        if (dx > 0) goPrev();
        else goNext();
      }}
    >
      <div className={styles.track} style={{ transform: `translateX(${-100 * activeIndex}%)` }}>
        {slides.map((slide, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={slide.id}
              className={styles.slide}
              data-active={isActive ? "true" : "false"}
              aria-hidden={!isActive}
            >
              <div className={styles.bg} style={{ backgroundImage: `url("${slide.backgroundImageUrl}")` }} />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <div className={styles.kicker}>
                <Badge tone="info" left={<StatusDot color="var(--ds-semantic-info)" />}>
                  100vh swiper • 3 slides
                </Badge>
              </div>
              <h1 className={styles.h1}>{slide.title}</h1>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <div className={styles.actions}>
                {slide.ctas.map((cta, idx) => {
                  const variant = cta.variant ?? "primary";
                  if (cta.type === "link") {
                    return (
                      <Link key={`${slide.id}-${idx}`} href={cta.href}>
                        <Button variant={variant}>{cta.label}</Button>
                      </Link>
                    );
                  }
                  return (
                    <Button
                      key={`${slide.id}-${idx}`}
                      variant={variant}
                      onClick={() => {
                        // demo action (no-op)
                      }}
                    >
                      {cta.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={goPrev} aria-label="이전 슬라이드">
          ‹
        </button>
        <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={goNext} aria-label="다음 슬라이드">
          ›
        </button>

        <div className={styles.dots} role="tablist" aria-label="슬라이드 선택">
          {slides.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={s.id}
                type="button"
                className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`${i + 1}번 슬라이드`}
                aria-current={isActive ? "true" : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

