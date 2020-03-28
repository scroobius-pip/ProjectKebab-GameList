import { useState, useContext, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import MatchItem from '@components/MatchItem'
import { Match } from '@components/MatchItem/MatchItem';
import { useGetMatchesQuery, IMatchSortType, IErrorType, useGetUserInfoQuery, useUpdateLocationMutation } from 'generated/apolloComponents';
import { useRouter } from 'next/router'
import SettingsSection from '@components/SettingsSection';
import Switch from '@components/Switch';
import SocialShare from '@components/SocialShare';
import { getApolloContext } from 'react-apollo';
import { UpdateLocation } from 'functions/UpdateLocation';
import updateNotifications from 'functions/graphql/mutations/updateNotifications';

interface SharedProps {
    openPremium: () => any

}
interface Props {
    matchType: IMatchSortType

}

export default ({ openPremium }: SharedProps) => ({ matchType }: Props) => {
    const { data: matchData, loading: matchLoading } = useGetMatchesQuery({ variables: { input: { sortBy: matchType } } })
    const { data: userData, loading: userLoading } = useGetUserInfoQuery()
    const apolloClient = useContext(getApolloContext()).client
    const { unsetLocation, setLocation } = UpdateLocation(apolloClient)
    const router = useRouter()


    const toggleNotifications = async (initialState: boolean) => {
        if (!initialState) {
            const status = await Notification.requestPermission()
            if (status !== 'granted')
                throw new Error('Rejected Notification')
            const result = await updateNotifications(true, apolloClient)
            if (result.error && result.error.type === IErrorType.UpgradeMembership) {
                openPremium()
                throw new Error(result.error.type)
            }
            document.location.reload()
        } else {
            await updateNotifications(false, apolloClient)
            document.location.reload()
        }
    }

    const handleMatchItemClicked = (userName: string) => {
        (userName[userName.length - 1] === '*') ? openPremium() : router.push('/profile/' + userName)
    }

    const handleLocationToggle = async (value: boolean) => {
        await (value ? unsetLocation : setLocation)()
        document.location.reload()

    }



    const renderMatches = () => {

        if (!matchData.matches.result.length) {
            return <div >
                <div style={{ textAlign: 'center' }}>
                    {/* <img src='' style={{ width: 200, height: 100 }} /> */}
                    <h2 >No matches found...yet.</h2>
                    <h5 >Here's what you could do:</h5>
                </div>
                <div>
                    <SettingsSection
                        sections={[
                            {
                                title: '',
                                subsections: [{
                                    title: 'Enable Match Notifications',
                                    description: "You'll be notified once we've found matches",
                                    Input: () => {
                                        return userLoading ? <Spinner variant='light' animation='grow' style={{ textAlign: 'center' }} /> : <Switch id={'notification' + matchType} initialState={userData.me.info.setting_matchNotifications} handleToggle={toggleNotifications} />
                                    }
                                }, {
                                    title: 'Invite Others Over',
                                    description: "Spread the word - the more the merrier.",
                                    Input: () => <SocialShare />


                                }]
                            }
                        ]}
                    />
                </div>
            </div>
        }


        return matchData.matches.result.map((match, i) => {
            const parsedMatch: Match = {
                matchedGames: {
                    hasGameNames: match.hasGameNames,
                    wantGameNames: match.wantedGameNames
                },
                userImage: match.userImageUrl,
                username: match.userName,
                location: {
                    city: match.state || '',
                    country: match.country || ''
                },
            }

            return <MatchItem onClick={handleMatchItemClicked} key={i} match={parsedMatch} />
        }
        )
    }

    const renderError = (errorType: IErrorType) => {
        switch (errorType) {
            case IErrorType.LocationNotSet:
                return <SettingsSection
                    sections={[
                        {
                            title: '',
                            subsections: [{
                                title: 'Enable Location',
                                description: "Enable location to find gamers based on your location",
                                Input: () => <Switch id='location-match' initialState={false} handleToggle={handleLocationToggle} />
                            }]
                        }
                    ]}
                />
                break;

            default:
                break;
        }

    }

    return <div style={{ width: '100%', maxWidth: 500, margin: 'auto', marginTop: 20, }}>
        {matchLoading ? <Spinner variant='light' animation='grow' style={{
            width: '3em',
            height: '3em',
            textAlign: 'center'
        }} /> : <>{

            matchData.matches.error ? renderError(matchData.matches.error.type) : renderMatches()
        }</>}
    </div>
}