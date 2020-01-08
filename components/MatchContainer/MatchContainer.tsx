import { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import MatchItem from '@components/MatchItem'
import { Match } from '@components/MatchItem/MatchItem';
import { useGetMatchesQuery, IMatchSortType } from 'generated/apolloComponents';
import { useRouter } from 'next/router'

interface Props {
    matchType: IMatchSortType
    openPremium: () => any

}

export default ({ matchType, openPremium }: Props) => {
    const { data: { matches: { result: matches } }, loading, error } = useGetMatchesQuery({ variables: { input: { sortBy: matchType } } })
    const router = useRouter()

    const handleMatchItemClicked = (userName: string) => {
        (userName.substring(0, 3) === 'XXX') ? openPremium() : router.push('/profile/' + userName)
    }

    return <div style={{ width: '100%', maxWidth: 500, margin: 'auto', marginTop: 20, textAlign: 'center' }}>
        {loading ? <Spinner variant='light' animation='grow' style={{
            width: '3em',
            height: '3em'
        }} /> : <>{
            matches.map((match, i) => {
                const parsedMatch: Match = {
                    matchedGames: {
                        hasGameNames: match.hasGameNames,
                        wantGameNames: match.wantedGameNames
                    },
                    userImage: match.userImageUrl,
                    username: match.userName,
                    location: {
                        city: match.state,
                        country: match.country
                    },
                }

                return <MatchItem onClick={handleMatchItemClicked} key={i} match={parsedMatch} />
            }

            )}</>}



    </div>
}