import { IUserGameDetailsStatus, IUserGameDetailsTradeType } from 'generated/apolloComponents';
import { UserGame } from '@components/UserList/UserList';

function mapToUserGame(): (value: { __typename?: "UserGame"; id: string; details: { __typename?: "UserGameDetails"; description: string; status: IUserGameDetailsStatus; tradeType: IUserGameDetailsTradeType; }; game: { __typename?: "Game"; consoleType: string; id: string; imageUrl: string; name: string; }; }, index: number, array: { __typename?: "UserGame"; id: string; details: { __typename?: "UserGameDetails"; description: string; status: import("c:/Users/sim04/OneDrive/Documents/Programming/ProjectKebab-GameList/generated/apolloComponents").IUserGameDetailsStatus; tradeType: IUserGameDetailsTradeType; }; game: { __typename?: "Game"; consoleType: string; id: string; imageUrl: string; name: string; }; }[]) => UserGame {
    return (usergame): UserGame => ({
        consoleType: usergame['game'].consoleType,
        description: usergame['details'].description,
        id: usergame.id,
        imageUrl: '',
        name: usergame['game'].name,
        tradeType: usergame['details'].tradeType === IUserGameDetailsTradeType.Sale ? 'Sale' : 'Swap'
    });
}

export default mapToUserGame