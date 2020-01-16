import { ApolloClient } from 'apollo-boost'
import { IUpdateMatchNotificationsMutationVariables, IUpdateMatchNotificationsMutation, IErrorType } from 'generated/apolloComponents'
import updateMatchNotifications from 'graphql/mutations/updateMatchNotifications'

export default async (status: boolean, client: ApolloClient<any>): Promise<{
    error?: {
        type: IErrorType
    }
}> => {
    try {
        const result = await client.mutate<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables>({
            variables: {
                status
            },
            mutation: updateMatchNotifications
        })

        return {
            error: {
                type: result.data.updateUserInfo.error.type
            }
        }
    } catch (error) {
        console.error(error)
        return {}
    }
}