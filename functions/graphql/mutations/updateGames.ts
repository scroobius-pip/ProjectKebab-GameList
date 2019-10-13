import { IUpdateGamesInput, IUpdateUserGamesMutationVariables, IUpdateUserGamesMutation, IUserGameDetailsStatus, IUserGameDetailsTradeType } from 'generated/apolloComponents'
import { ApolloClient } from 'apollo-boost'
import updateGames from 'graphql/mutations/updateGames'
import { UserGame } from '@components/UserList/UserList'

export default (status: IUserGameDetailsStatus) => async (games: UserGame[], client: ApolloClient<any>): Promise<{ success: Boolean, message?: string }> => {
    if (!games.length) {
        return { success: true }
    }

    try {

        const result = await client.mutate<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables>(
            {
                variables: {
                    games: games.map(game => ({

                        id: game.id,
                        details: {
                            description: game.description,
                            status,
                            tradeType: game.tradeType === 'Sale' ? IUserGameDetailsTradeType.Sale : IUserGameDetailsTradeType.Swap
                        },
                        ...(game.custom ? {
                            customItemDetails: { name: game.name, consoleType: game.consoleType }
                        } : {}
                        )
                    }))
                },
                mutation: updateGames

            }
        )

        return {
            success: result.data.updateUserGames.result
        }

    } catch (error) {
        console.log(error)
        return { success: false, message: error.message }
    }
}