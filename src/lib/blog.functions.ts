import { createServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";

export const listPosts = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, published_at")
    .order("published_at", { ascending: false })
    .limit(100);
  if (error) throw new Error(error.message);
  return { posts: data ?? [] };
});

export const getPost = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const { data: post, error } = await supabase
      .from("blog_posts")
      .select("slug, title, excerpt, body, published_at")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return { post };
  });
