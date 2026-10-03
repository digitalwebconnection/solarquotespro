import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const accents = {
    amber: { text: "text-amber-500/80", border: "border-amber-400", iconBorder: "border-amber-400/40", bgColor: "bg-amber-300", },
    emerald: { text: "text-emerald-300", border: "border-emerald-400", iconBorder: "border-emerald-400/40", bgColor: "bg-emerald-500" },
    sky: { text: "text-sky-300", border: "border-sky-400", iconBorder: "border-sky-400/40", bgColor: "bg-sky-500" },
    orange: { text: "text-orange-600", border: "border-orange-400", iconBorder: "border-orange-400/40", bgColor: "bg-orange-400" },
} as const;

export type Accent = keyof typeof accents;

export interface JourneyStep {
    year: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    color: Accent;
}

interface CardProps extends JourneyStep {
    index: number;
    total: number;
}

const Card = ({ year, title, desc, icon: Icon, color, index, total }: CardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const a = accents[color];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(cardRef.current, {
                scale: 1 - (total - index) * 0.05,
                transformOrigin: "center top",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, [index, total]);

    return (
        <div ref={containerRef} className="sticky top-22 flex h-screen items-center justify-center">

            <div
                ref={cardRef}
                className={`relative flex h-[350px] w-[92%] flex-col justify-center gap-4 rounded-3xl border-2 mt-4 ${a.bgColor} p-8 shadow-xl sm:h-[420px] sm:p-12 md:w-[70%] ${a.border}`}
                style={{ top: `calc(-5vh + ${index * 30}px)` }}
            >
                <div className="flex items-center justify-between">
                    <span className={`text-4xl font-black sm:text-6xl ${a.text}`}>{year}</span>
                    <div className={`rounded-xl border bg-slate-900 p-4 ${a.iconBorder} ${a.text}`}>
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">{title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">{desc}</p>
            </div>
        </div>
    );
};

export function StackedJourney({ steps }: { steps: JourneyStep[] }) {
    return (
        <div className="relative">
            <div className="sticky top-50 pointer-events-none">
                <span className="absolute left-30 h-3 w-3 rounded-full bg-amber-400 opacity-75 animate-ping" />
            </div>
            {steps.map((s, i) => (
                <Card key={s.year} {...s} index={i} total={steps.length} />
            ))}
        </div>
    );
}