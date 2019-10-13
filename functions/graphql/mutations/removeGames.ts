import { ApolloClient } from 'apollo-boost';
import { IRemoveUserGamesMutationVariables, IRemoveGamesInput, IRemoveUserGamesMutation } from 'generated/apolloComponents';
import removeGames from 'graphql/mutations/removeGames';

export default async (games: IRemoveGamesInput[], client: ApolloClient<any>): Promise<{ success: Boolean, message?: string }> => {
    if (!games.length) {
        return { success: true }
    }

    try {

        const result = await client.mutate<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables>(
            {
                variables: {
                    games
                },
                mutation: removeGames

            }
        )

        return {
            success: result.data.removeUserGames.result
        }

    } catch (error) {
        console.log(error)
        return { success: false, message: error.message }
    }
}