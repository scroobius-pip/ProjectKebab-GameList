import { ApolloClient } from 'apollo-boost';
import { IGetUserQuery, IGetUserQueryVariables } from 'generated/apolloComponents';
import getUser from 'graphql/queries/getUserFromUsername';

export default async (client: ApolloClient<any>, username: string) => {
    try {
        const result = await client.query<IGetUserQuery, IGetUserQueryVariables>({
            query: getUser,
            variables:{
                username
            }
        })

        if (result.data) return result.data.user
        return null

    } catch (error) {
        console.log(error)
    }
}