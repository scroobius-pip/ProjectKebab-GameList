import { ApolloClient } from 'apollo-boost'
import { IUpdateUserDescriptionMutationVariables, IUpdateUserDescriptionMutation } from 'generated/apolloComponents'
import updateDescription from 'graphql/mutations/updateDescription'

export default async (description: string, client: ApolloClient<any>): Promise<{ success: Boolean, message?: string }> => {
    if (!description.length) {
        return { success: true }
    }

    try {
        const result = await client.mutate<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables>(
            {
                variables: {
                    description
                },
                mutation: updateDescription
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