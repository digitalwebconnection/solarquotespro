import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts, type BlogPost } from "../../../data/blogPosts";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      aria-label={`Read guide: ${post.title}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
    >
      <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-amber-200 group-hover:shadow-xl group-hover:shadow-slate-900/10">
        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-200">
          <img
            src={post.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent" />
          <span
            className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${post.categoryStyle}`}
          >
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <time
            dateTime={post.dateTime}
            className="mb-3 inline-flex items-center gap-1.5 text-xs text-slate-500"
          >
            <Calendar aria-hidden="true" className="h-3.5 w-3.5 text-slate-400" />
            {post.date}
          </time>
          <h3 className="mb-2.5 font-serif text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-amber-700">
            {post.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-600">{post.description}</p>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
            <span className="flex min-w-0 items-center gap-1.5 text-xs text-slate-500">
              <User aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              <span>{post.author}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 transition-colors group-hover:text-amber-800">
              Read Guide
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  return (
    <section
      id="blogs"
      aria-labelledby="blogs-heading"
      className="relative z-2 overflow-hidden bg-slate-50 py-14 text-slate-900 sm:py-16"
    >
      <div aria-hidden="true" className="absolute -left-40 -top-4 z-0 h-150 w-130 rounded-full bg-amber-300/20 blur-[120px]" />
      <div aria-hidden="true" className="absolute -right-10 bottom-0 z-0 h-120 w-150 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-9 max-w-3xl text-center">
          <h2 id="blogs-heading" className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            Guides, Reviews &amp; Energy Insights
          </h2>
          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 sm:text-lg">
            Helpful information to understand, compare and research your home-energy options.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
