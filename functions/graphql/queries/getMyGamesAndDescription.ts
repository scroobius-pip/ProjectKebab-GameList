import { ApolloClient } from 'apollo-boost';
import User from 'types/IUser';
import { IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables } from 'generated/apolloComponents';
import getGamesAndDescription from 'graphql/queries/getGamesAndDescription';

export default async (client: ApolloClient<any>) => {
    try {
        const result = await client.query<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables>({
            query: getGamesAndDescription,

        },

        )
        console.log(result)
        return result.data.me
    } catch (error) {
        console.log(error)
    }
}