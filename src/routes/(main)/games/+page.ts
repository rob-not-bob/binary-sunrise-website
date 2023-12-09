import type { PageLoad } from './$types';
import { format, parse } from 'date-fns';
import { games } from './[game]/games';

const getGameListings = async () => {
  return (
    await Promise.all(
      games.map(async (game) => {
        return {
          ...game,
          heroImageUrl: typeof game.heroImageUrl === 'string' ? game.heroImageUrl : (await game.heroImageUrl).default,
          date: format(parse(game.date, 'MM-dd-yyyy', new Date()), 'MMM d, yyyy'),
        };
      }),
    )
  ).sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
};

export const load = (async () => {
  const gameListings = await getGameListings();
  return { gameListings };
}) satisfies PageLoad;
