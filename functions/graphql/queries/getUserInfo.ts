import { ApolloClient } from 'apollo-boost';
import User from 'types/IUser';
import { IGetUserInfoQuery, IGetUserInfoQueryVariables } from 'generated/apolloComponents';
import getUserInfo from 'graphql/queries/getUserInfo';

export default async (client: ApolloClient<any>): Promise<User> => {
    if (!client) return null
    try {
        const result = await client.query<IGetUserInfoQuery, IGetUserInfoQueryVariables>({
            query: getUserInfo
        })

        if (result.data) return result.data.me
        return null

    } catch (error) {
        console.log(error)
    }
}