import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials.js';

const CARD = 320;
const STEP = CARD / 1.2;

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const total = testimonials.length;

    const go = (dir: 1 | -1) => setActive((a) => (a + dir + total) % total);

    const btn =
        'flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-300 bg-white text-slate-700 transition-colors hover:border-blue-950 hover:bg-blue-950 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950';

    return (
        <section className="relative z-4 overflow-hidden bg-white py-10 sm:py-14">
            <div className="pointer-events-none absolute top-20 -left-15 h-150 w-170 rounded-full bg-amber-300/15 blur-[120px] z-0" />
            <div className="pointer-events-none absolute top-20 -right-15 h-150 w-170 rounded-full bg-emerald-600/15 blur-[120px] z-0" />

            <div className="relative mx-auto max-w-7xl px-8 z-10">
                <div className="max-w-2xl mx-auto mb-6 text-center">
                    <h2 className="font-serif text-5xl font-extrabold text-slate-900 leading-14">Homeowners Who Compared and Saved </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
                        Hear from our satisfied customers who have experienced the benefits of our solar solutions.
                    </p>
                </div>
            </div>
            <div
                aria-label="Customer testimonials, use the arrow keys to navigate"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') go(1);
                    if (e.key === 'ArrowLeft') go(-1);
                }}
                className="relative h-110 w-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-blue-950 sm:h-120"
            >
                {testimonials.map((t, i) => {
                    let offset = i - active;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;

                    const abs = Math.abs(offset);
                    const isCenter = offset === 0;
                    const odd = abs % 2 === 1;

                    return (
                        <div
                            key={t.id}
                            onClick={() => setActive(i)}
                            className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-5 transition-all duration-500 ease-in-out sm:p-7 ${isCenter
                                ? 'z-10 border-blue-950 bg-linear-to-br from-blue-950 to-blue-900 text-white'
                                : 'z-0 border-slate-200 bg-white text-slate-700 hover:border-blue-900 '
                                }`}
                            style={{
                                width: CARD,
                                height: CARD,
                                opacity: abs <= 2 ? 1 : 0,
                                pointerEvents: abs <= 2 ? 'auto' : 'none',
                                clipPath:
                                    'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)',
                                transform: `translate(-50%, -50%) translateX(${STEP * offset}px) translateY(${isCenter ? -40 : odd ? 15 : -15
                                    }px) rotate(${isCenter ? 0 : odd ? 2.5 : -2.5}deg)`,
                                boxShadow: isCenter ? '0px 8px 0px 4px #cbd5e1' : 'none',
                            }}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${isCenter ? 'bg-white text-emerald-700' : 'bg-sky-100 text-sky-700'
                                        }`}
                                >
                                    {t.initials}
                                </div>
                                <div className="flex" aria-label={`${t.rating} out of 5 stars`}>
                                    {[0, 1, 2, 3, 4].map((s) => (
                                        <Star
                                            key={s}
                                            aria-hidden="true"
                                            className={`h-4 w-4 ${s < t.rating
                                                ? 'fill-amber-400 text-amber-400'
                                                : isCenter
                                                    ? 'text-white/40'
                                                    : 'text-slate-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className={`mb-2 text-[11px] font-bold uppercase tracking-wide 
                            ${isCenter ? 'text-emerald-400' : 'text-emerald-700'
                                }`} >
                                {t.service}
                            </p>
                            <p className="text-sm leading-relaxed">“{t.quote}”</p>
                            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                                <p className={`text-sm font-semibold ${isCenter ? 'text-white' : 'text-slate-900'}`}>
                                    {t.name}
                                </p>
                                <p className={`text-xs ${isCenter ? 'text-white/80' : 'text-slate-500'}`}>
                                    {t.role} - {t.location}
                                </p>
                            </div>
                        </div>
                    );
                })}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className={btn}>
                        <ChevronLeft aria-hidden="true" />
                    </button>
                    <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={btn}>
                        <ChevronRight aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}