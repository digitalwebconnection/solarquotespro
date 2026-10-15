import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../../../data/blogPosts";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-14 text-center">
        <h1 className="font-serif text-3xl font-bold text-slate-900">Guide not found</h1>
        <p className="mt-3 text-slate-600">The guide may have moved or the link may be incorrect.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to all guides
        </Link>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="bg-white">
      <article>
        <header className="relative isolate overflow-hidden bg-slate-950 min-h-70 sm:min-h-80">
          <img
            src={post.image}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-slate-950/55"
          />
          <div className="relative z-20 mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-amber-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                All guides
              </Link>

              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            <div className="mt-5">
              <h1 className="mx-auto mt-3 max-w-4xl font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {post.title}
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-200">
                <time dateTime={post.dateTime} className="inline-flex items-center gap-2">
                  <Calendar aria-hidden="true" className="h-4 w-4 text-amber-300" />
                  {post.date}
                </time>
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16 lg:px-8">
          <div className="min-w-0">
            <div className="space-y-10 sm:space-y-12">
              {post.sections.map((section, index) => (
                <section
                  key={section.heading}
                  id={`guide-section-${index + 1}`}
                  className="scroll-mt-28"
                >
                  <h2 className="font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.points && (
                    <ul className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-5 sm:p-6">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3 text-base leading-7 text-slate-700">
                          <span
                            aria-hidden="true"
                            className="mt-3 h-2 w-2 shrink-0 rounded-full bg-amber-500"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <p className="mt-10 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-500">
              Information in this guide is general only. Check current requirements and seek advice
              from an appropriately qualified professional for your situation.
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition hover:text-amber-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to all guides
            </Link>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">

            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Keep exploring
              </p>
              <h2 className="mt-2 font-serif text-xl font-bold text-slate-900">
                More energy guides
              </h2>
              <ul className="mt-4 divide-y divide-amber-200/70">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.slug} className="py-3 first:pt-0 last:pb-0">
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="group flex items-start justify-between gap-3 text-sm font-semibold leading-5 text-slate-700 transition hover:text-amber-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                    >
                      <span>{relatedPost.title}</span>
                      <ArrowRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/blog"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-500 transition hover:text-amber-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
              >
                View all guides
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
