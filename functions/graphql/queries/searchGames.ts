import { ISearchGamesQuery, ISearchGamesQueryVariables } from 'generated/apolloComponents';
import { ApolloClient } from 'apollo-boost';
import searchGames from 'graphql/queries/searchGames';
import { Game } from '@components/SearchBox';

export default async (searchText: string, client: ApolloClient<any>): Promise<Game[]> => {

    const results = await client.query<ISearchGamesQuery, ISearchGamesQueryVariables>({
        variables: { input: { limit: 5, searchText } },
        query: searchGames
    })
    const games = results.data.searchGames.result || []
    return games
}