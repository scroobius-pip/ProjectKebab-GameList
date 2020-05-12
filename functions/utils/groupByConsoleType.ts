import { Game } from '../../components/SearchBox/index';
import { UserGames } from '@components/UserList';
import { UserGame } from '@components/UserList/UserList';

interface Item {
    consoleType: string
    [key: string]: any
}

export const groupByConsoleType = <T>(item: Item[]): GroupedItems<T> => {
    return item.reduce((r, a) => {
        r[a.consoleType] = r[a.consoleType] || [];
        r[a.consoleType].push(a);
        return r;
    }, Object.create(null));
}

export interface GroupedItems<G> {
    [consoleType: string]: G[]
}
