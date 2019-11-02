import { ApolloClient } from 'apollo-boost';
// import { ISettingsQuery, ISettingsQueryVariables } from 'generated/apolloComponents';
import getMeSettings from 'graphql/queries/getMeSettings';

export default async (client: ApolloClient<any>) => {
    console.log(client)
    try {
        // const result = await client.query<ISettingsQuery, ISettingsQueryVariables>({
        //     query: getMeSettings,

        // },

        // )
        // console.log(result)
        // return result.data.me.info
    } catch (error) {
        console.log(error)
    }
}