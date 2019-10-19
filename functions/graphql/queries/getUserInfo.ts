import { ApolloClient } from 'apollo-boost';
import User from 'types/IUser';
import { IGetUserInfoQuery, IGetUserInfoQueryVariables } from 'generated/apolloComponents';
import getUserInfo from 'graphql/queries/getUserInfo';

export default async (client: ApolloClient<any>): Promise<User> => {
    try {
        const result = await client.query<IGetUserInfoQuery, IGetUserInfoQueryVariables>({
            query: getUserInfo
        })

        return result.data.me

    } catch (error) {
        console.log(error)
    }
}