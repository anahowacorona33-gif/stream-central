import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "./blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const p = posts.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.title ?? "Artikel"} | IPTVs-Anbieter Blog` },
        { name: "description", content: p?.excerpt ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const p = posts.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Artikel nicht gefunden</h1>
      <Link to="/blog" className="mt-4 inline-flex text-primary hover:underline">Zurück zum Blog</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Fehler</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded bg-primary px-4 py-2 text-sm text-primary-foreground">Erneut versuchen</button>
    </div>
  ),
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Zurück zum Blog
      </Link>
      <div className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
        {new Date(post.date).toLocaleDateString("de-DE")}
      </div>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">{post.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="prose prose-invert mt-8 max-w-none whitespace-pre-line text-foreground/90">
        {post.body}
      </div>
    </article>
  );
}
