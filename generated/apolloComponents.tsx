import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type AddDbGamesInput = {
  name: Scalars['String'],
  consoleType: Scalars['String'],
  imageUrl: Scalars['String'],
  popularity: Scalars['Float'],
};

export type AddDbGamesMutationInput = {
  games: Array<AddDbGamesInput>,
};

export type AddDbGamesMutationResult = {
   __typename?: 'AddDbGamesMutationResult',
  result?: Maybe<Scalars['Boolean']>,
  notAdded?: Maybe<Array<Maybe<AddDbGamesMutationResultNotAdded>>>,
  error?: Maybe<Scalars['String']>,
};

export type AddDbGamesMutationResultNotAdded = {
   __typename?: 'AddDbGamesMutationResultNotAdded',
  name: Scalars['String'],
  consoleType: Scalars['String'],
  imageUrl: Scalars['String'],
  popularity: Scalars['Float'],
};

export type AddGamesInput = {
  gameId: Scalars['ID'],
  details: UserGameDetailsInput,
  customItemDetails?: Maybe<AddGamesInputCustomItemDetails>,
};

export type AddGamesInputCustomItemDetails = {
  name: Scalars['String'],
  consoleType: Scalars['String'],
};

export type AddGamesMutationInput = {
  games: Array<AddGamesInput>,
};

export type AddGamesMutationResult = {
   __typename?: 'AddGamesMutationResult',
  result: Scalars['Boolean'],
  error?: Maybe<Error>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateOfferMutationInput = {
  offer: OfferInput,
};

export type CreateOfferMutationResult = {
   __typename?: 'CreateOfferMutationResult',
  result?: Maybe<Offer>,
  error?: Maybe<Error>,
};

export type Error = {
   __typename?: 'Error',
  id: Scalars['ID'],
  message: Scalars['String'],
  type: Scalars['String'],
};

export type Game = {
   __typename?: 'Game',
  name: Scalars['String'],
  consoleType?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  imageUrl?: Maybe<Scalars['String']>,
};

export type Match = {
   __typename?: 'Match',
  user: User,
  distance: Scalars['Float'],
};

export type MatchQueryInput = {
  sortBy: MatchSortType,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type MatchQueryResult = {
   __typename?: 'MatchQueryResult',
  result?: Maybe<Array<Match>>,
};

export enum MatchSortType {
  Distance = 'distance',
  MatchRate = 'matchRate'
}

export type Mutation = {
   __typename?: 'Mutation',
  addUserGames?: Maybe<AddGamesMutationResult>,
  removeUserGames?: Maybe<RemoveGamesMutationResult>,
  updateUserGames?: Maybe<UpdateGamesMutationResult>,
  addDbGames?: Maybe<AddDbGamesMutationResult>,
  updateOffer?: Maybe<UpdateOfferMutationResult>,
  createOffer?: Maybe<CreateOfferMutationResult>,
  updateUserInfo?: Maybe<UpdateUserInfoMutationResult>,
};


export type MutationAddUserGamesArgs = {
  input: AddGamesMutationInput
};


export type MutationRemoveUserGamesArgs = {
  input: RemoveGamesMutationInput
};


export type MutationUpdateUserGamesArgs = {
  input: UpdateGamesMutationInput
};


export type MutationAddDbGamesArgs = {
  input: AddDbGamesMutationInput
};


export type MutationUpdateOfferArgs = {
  input?: Maybe<UpdateOfferMutationInput>
};


export type MutationCreateOfferArgs = {
  input?: Maybe<CreateOfferMutationInput>
};


export type MutationUpdateUserInfoArgs = {
  input: UpdateUserInfoMutationInput
};

export type Offer = {
   __typename?: 'Offer',
  offerId: Scalars['ID'],
  senderGames: Array<UserGame>,
  receiverGames: Array<UserGame>,
  receiverId: Scalars['ID'],
  senderId: Scalars['ID'],
  epochTimeCreated: Scalars['String'],
  status: OfferStatus,
  receiverStatus: OfferStatus,
  senderStatus: OfferStatus,
};

export type OfferInput = {
  myGames: Array<UserGameInput>,
  otherGames: Array<UserGameInput>,
  otherId: Scalars['ID'],
};

export type OfferQueryInput = {
  status: OfferStatus,
  pagination?: Maybe<PaginationInput>,
};

export type OfferQueryResult = {
   __typename?: 'OfferQueryResult',
  result?: Maybe<Array<Offer>>,
  pageInfo?: Maybe<PageInfo>,
};

export enum OfferStatus {
  Pending = 'pending',
  Ongoing = 'ongoing',
  Completed = 'completed',
  Cancelled = 'cancelled',
  Declined = 'declined'
}

export type PageInfo = {
   __typename?: 'PageInfo',
  noOfItems: Scalars['Int'],
};

export type PaginationInput = {
  offset: Scalars['Int'],
  limit: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  searchGames: SearchGamesQueryResult,
  matches: MatchQueryResult,
  offers: OfferQueryResult,
  me?: Maybe<User>,
  user?: Maybe<User>,
};


export type QuerySearchGamesArgs = {
  input: SearchGamesQueryInput
};


export type QueryMatchesArgs = {
  input: MatchQueryInput
};


export type QueryOffersArgs = {
  input: OfferQueryInput
};


export type QueryUserArgs = {
  input: UserQueryInput
};

export type RemoveGamesInput = {
  id: Scalars['ID'],
};

export type RemoveGamesMutationInput = {
  games: Array<RemoveGamesInput>,
};

export type RemoveGamesMutationResult = {
   __typename?: 'RemoveGamesMutationResult',
  result: Scalars['Boolean'],
};

export type SearchGamesQueryInput = {
  searchText: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
};

export type SearchGamesQueryResult = {
   __typename?: 'SearchGamesQueryResult',
  result?: Maybe<Array<Game>>,
};

export type UpdateGamesInput = {
  id: Scalars['ID'],
  details: UpdateGamesInputDetails,
};

export type UpdateGamesInputDetails = {
  description: Scalars['String'],
  status: UserGameDetailsStatus,
  tradeType: UserGameDetailsTradeType,
};

export type UpdateGamesMutationInput = {
  games: Array<UpdateGamesInput>,
};

export type UpdateGamesMutationResult = {
   __typename?: 'UpdateGamesMutationResult',
  result: Scalars['Boolean'],
};

export type UpdateOfferMutationInput = {
  offerId: Scalars['ID'],
  type: UpdateOfferMutationInputType,
};

export enum UpdateOfferMutationInputType {
  Complete = 'complete',
  Accept = 'accept',
  Decline = 'decline',
  Cancel = 'cancel'
}

export type UpdateOfferMutationResult = {
   __typename?: 'UpdateOfferMutationResult',
  result?: Maybe<Offer>,
};

export type UpdateUserInfoMutationInput = {
  info: UserInfoInput,
};

export type UpdateUserInfoMutationResult = {
   __typename?: 'UpdateUserInfoMutationResult',
  result?: Maybe<UserInfo>,
  error?: Maybe<Error>,
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  info: UserInfo,
  wantedGames?: Maybe<Array<UserGame>>,
  hasGames?: Maybe<Array<UserGame>>,
};

export type UserGame = {
   __typename?: 'UserGame',
  id: Scalars['ID'],
  details: UserGameDetails,
  game: Game,
};

export type UserGameDetails = {
   __typename?: 'UserGameDetails',
  description: Scalars['String'],
  status: UserGameDetailsStatus,
  tradeType: UserGameDetailsTradeType,
};

export type UserGameDetailsInput = {
  description: Scalars['String'],
  status?: Maybe<UserGameDetailsStatus>,
  tradeType: UserGameDetailsTradeType,
};

export enum UserGameDetailsStatus {
  Has = 'has',
  Want = 'want'
}

export enum UserGameDetailsTradeType {
  Swap = 'swap',
  Sale = 'sale'
}

export type UserGameInput = {
  details: UserGameDetailsInput,
  gameId: Scalars['ID'],
};

export type UserInfo = {
   __typename?: 'UserInfo',
  email?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isPro?: Maybe<Scalars['Boolean']>,
  epochTimeCreated?: Maybe<Scalars['String']>,
  location?: Maybe<UserInfoLocation>,
  noOfSuccessfulExchanges?: Maybe<Scalars['Int']>,
  rating?: Maybe<UserInfoRating>,
  userImageUrl?: Maybe<Scalars['String']>,
  userName?: Maybe<Scalars['String']>,
  isBanned?: Maybe<Scalars['Boolean']>,
  setting_matchNotifications?: Maybe<Scalars['Boolean']>,
};

export type UserInfoInput = {
  email?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isPro?: Maybe<Scalars['Boolean']>,
  location?: Maybe<UserInfoLocationInput>,
  userImageUrl?: Maybe<Scalars['String']>,
  userName?: Maybe<Scalars['String']>,
  isBanned?: Maybe<Scalars['Boolean']>,
  setting_matchNotifications?: Maybe<Scalars['Boolean']>,
};

export type UserInfoLocation = {
   __typename?: 'UserInfoLocation',
  city: Scalars['String'],
  state: Scalars['String'],
};

export type UserInfoLocationInput = {
  longitude: Scalars['Float'],
  latitude: Scalars['Float'],
};

export type UserInfoRating = {
   __typename?: 'UserInfoRating',
  negative?: Maybe<Scalars['Int']>,
  positive?: Maybe<Scalars['Int']>,
};

export type UserQueryInput = {
  by: UserQueryType,
  value: Scalars['String'],
};

export enum UserQueryType {
  Id = 'id',
  Username = 'username'
}

export type GamesQueryVariables = {
  input: SearchGamesQueryInput
};


export type GamesQuery = (
  { __typename?: 'Query' }
  & { searchGames: (
    { __typename?: 'SearchGamesQueryResult' }
    & { result: Maybe<Array<(
      { __typename?: 'Game' }
      & Pick<Game, 'consoleType' | 'id' | 'imageUrl' | 'name'>
    )>> }
  ) }
);


export const GamesDocument = gql`
    query Games($input: SearchGamesQueryInput!) {
  searchGames(input: $input) {
    result {
      consoleType
      id
      imageUrl
      name
    }
  }
}
    `;
export type GamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GamesQuery, GamesQueryVariables>, 'query'> & ({ variables: GamesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GamesComponent = (props: GamesComponentProps) => (
      <ApolloReactComponents.Query<GamesQuery, GamesQueryVariables> query={GamesDocument} {...props} />
    );
    
export type GamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GamesQuery, GamesQueryVariables> & TChildProps;
export function withGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GamesQuery,
  GamesQueryVariables,
  GamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GamesQuery, GamesQueryVariables, GamesProps<TChildProps>>(GamesDocument, {
      alias: 'games',
      ...operationOptions
    });
};

/**
 * __useGamesQuery__
 *
 * To run a query within a React component, call `useGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGamesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GamesQuery, GamesQueryVariables>) {
        return ApolloReactHooks.useQuery<GamesQuery, GamesQueryVariables>(GamesDocument, baseOptions);
      }
export function useGamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GamesQuery, GamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GamesQuery, GamesQueryVariables>(GamesDocument, baseOptions);
        }
export type GamesQueryHookResult = ReturnType<typeof useGamesQuery>;
export type GamesLazyQueryHookResult = ReturnType<typeof useGamesLazyQuery>;
export type GamesQueryResult = ApolloReactCommon.QueryResult<GamesQuery, GamesQueryVariables>;