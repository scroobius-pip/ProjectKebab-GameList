import { IMatchSortType, IGetMatchesQuery, IGetMatchesQueryVariables } from 'generated/apolloComponents';
import { ApolloClient } from 'apollo-boost';
import getMatches from 'graphql/queries/getMatches';

export default async (type: IMatchSortType, client: ApolloClient<any>) => {
    try {
        const results = await client.query<IGetMatchesQuery, IGetMatchesQueryVariables>({
            variables: { input: { sortBy: type } },
            query: getMatches
        })
        return results.data.matches.result || []
    } catch (error) {
        console.log(error)
        return []
    }
}