import { ApolloClient } from 'apollo-boost'
import { IUpdateLocationMutation, IUpdateLocationMutationVariables, IUserInfoLocationInput } from 'generated/apolloComponents'
import updateLocation from 'graphql/mutations/updateLocation'

export default async (location: IUserInfoLocationInput, client: ApolloClient<any>): Promise<{ success: Boolean, message?: string }> => {

    try {
        const result = await client.mutate<IUpdateLocationMutation, IUpdateLocationMutationVariables>(
            {
                variables: {
                    location
                },
                mutation: updateLocation
            }
        )

        return {
            success: !result.data.updateUserInfo.error
        }

    } catch (error) {
        console.log(error)
        return { success: false, message: error.message }
    }
}