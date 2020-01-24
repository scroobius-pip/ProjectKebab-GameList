import { ApolloClient } from 'apollo-boost';
import getUserCount from 'graphql/queries/getUserCount';
import { IGetUserCountQuery } from 'generated/apolloComponents';

export default async (client: ApolloClient<any>) => {

    try {
        const result = await client.query<IGetUserCountQuery>({
            query: getUserCount
        })
        return result.data.count
    } catch (error) {
        console.log(error)
        return null
    }
}