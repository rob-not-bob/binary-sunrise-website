import type { PageLoad } from './$types';
import { parse, format } from 'date-fns';
import { games } from './games';
import type { SvelteComponent } from 'svelte';

interface PostMetadata {
  title: string;
  author: string;
  date: string;
  lead: string;
  heroImageUrl: string;
}

interface Post {
  default: SvelteComponent;
  metadata: PostMetadata;
}

export const load = (async ({ params }) => {
  // NOTE: Workaround to issue with dynamic imports and paths with () in them
  const modules = import.meta.glob(`./**/post.svx`);
  const post = (await modules[`./${params.game}/post.svx`]()) as Post;
  // const post = await import(`./${params.post}/post.svx`);

  const postEntry = games.find(({ href }) => href === `/games/${params.game}`);

  // Calculate imageUrl from imports
  const imageImport = postEntry?.heroImageUrl;
  let imageUrl: any = '/';
  if (imageImport && typeof imageImport !== 'string') {
    imageUrl = (await imageImport).default;
  }

  return {
    component: post.default,
    ...post.metadata,
    date: format(parse(post.metadata.date, 'MM-dd-yyyy', new Date()), 'MMMM do, yyyy'),
    heroImageUrl: imageUrl,
    description: postEntry?.description,
  };
}) satisfies PageLoad;
