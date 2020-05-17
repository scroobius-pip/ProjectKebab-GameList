import { GetMatchesQueryResult } from 'generated/apolloComponents';

const mockMatches: GetMatchesQueryResult['data']['matches']['result'] = [

    {
        country: 'US',
        hasGameNames: ['Doom 2016', 'The Division', 'Hollow Knight', 'Doom Eternal', 'Animal Crossing: New Horizons'],
        wantedGameNames: ['Terrarria', 'Darksiders II: Deathinitive Edition', 'Control'],
        id: 'user1',
        matchRate: 40,
        state: 'TX',
        userImageUrl: 'https://styles.redditmedia.com/t5_2727ka/styles/profileIcon_4ezdlso695u31.jpeg?width=256&height=256&crop=256:256,smart&s=d64c5957c9884b80cabea1c83ed80219fbf79aa4',
        userName: 'celeryman747',
    },

    {
        country: 'CA',
        hasGameNames: ['Control', 'Hollow Knight', 'Doom Eternal',],
        wantedGameNames: ['Animal Crossing: New Horizons', 'Control', 'Doom 2016', 'Darksiders II: Deathinitive Edition',],
        id: 'user1',
        matchRate: 40,
        state: 'ON',
        userImageUrl: 'https://www.redditstatic.com/avatars/avatar_default_15_FF8717.png',
        userName: 'Galaha1',
    },
]


export default mockMatches