import { ApolloClient } from 'apollo-boost';
import { AddUserGamesMutationOptions, IAddUserGamesMutation, IAddUserGamesMutationVariables, IAddGamesInput, IUserGameDetailsStatus, IUserGameDetailsTradeType } from 'generated/apolloComponents';
import { UserGame } from '@components/UserList/UserList';
import addGames from 'graphql/mutations/addGames';


export default (status: IUserGameDetailsStatus) => async (games: UserGame[], client: ApolloClient<any>): Promise<{ success: Boolean, message?: string }> => {
    if (!games.length) {
        return { success: true }
    }

    console.log(games)

    try {
        const results = await client.mutate<IAddUserGamesMutation, IAddUserGamesMutationVariables>({
            variables: {
                games: games.map(game => ({
                    gameId: game.id,

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
            mutation: addGames
        })

        return {
            success: results.data.addUserGames.result
        }

    } catch (error) {
        console.log(error)
        return { success: false, message: error.message }
    }
}

