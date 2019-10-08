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


export type IAddDbGamesInput = {
  name: Scalars['String'],
  consoleType: Scalars['String'],
  imageUrl: Scalars['String'],
  popularity: Scalars['Float'],
};

export type IAddDbGamesMutationInput = {
  games: Array<IAddDbGamesInput>,
};

export type IAddDbGamesMutationResult = {
   __typename?: 'AddDbGamesMutationResult',
  result?: Maybe<Scalars['Boolean']>,
  notAdded?: Maybe<Array<Maybe<IAddDbGamesMutationResultNotAdded>>>,
  error?: Maybe<Scalars['String']>,
};

export type IAddDbGamesMutationResultNotAdded = {
   __typename?: 'AddDbGamesMutationResultNotAdded',
  name: Scalars['String'],
  consoleType: Scalars['String'],
  imageUrl: Scalars['String'],
  popularity: Scalars['Float'],
};

export type IAddGamesInput = {
  gameId: Scalars['ID'],
  details: IUserGameDetailsInput,
  customItemDetails?: Maybe<IAddGamesInputCustomItemDetails>,
};

export type IAddGamesInputCustomItemDetails = {
  name: Scalars['String'],
  consoleType: Scalars['String'],
};

export type IAddGamesMutationInput = {
  games: Array<IAddGamesInput>,
};

export type IAddGamesMutationResult = {
   __typename?: 'AddGamesMutationResult',
  result: Scalars['Boolean'],
  error?: Maybe<IError>,
};

export enum ICacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ICreateOfferMutationInput = {
  offer: IOfferInput,
};

export type ICreateOfferMutationResult = {
   __typename?: 'CreateOfferMutationResult',
  result?: Maybe<IOffer>,
  error?: Maybe<IError>,
};

export type IError = {
   __typename?: 'Error',
  id: Scalars['ID'],
  message: Scalars['String'],
  type: Scalars['String'],
};

export type IGame = {
   __typename?: 'Game',
  name: Scalars['String'],
  consoleType?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  imageUrl?: Maybe<Scalars['String']>,
};

export type IMatch = {
   __typename?: 'Match',
  user: IUser,
  distance: Scalars['Float'],
};

export type IMatchQueryInput = {
  sortBy: IMatchSortType,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type IMatchQueryResult = {
   __typename?: 'MatchQueryResult',
  result?: Maybe<Array<IMatch>>,
};

export enum IMatchSortType {
  Distance = 'distance',
  MatchRate = 'matchRate'
}

export type IMutation = {
   __typename?: 'Mutation',
  addUserGames?: Maybe<IAddGamesMutationResult>,
  removeUserGames?: Maybe<IRemoveGamesMutationResult>,
  updateUserGames?: Maybe<IUpdateGamesMutationResult>,
  addDbGames?: Maybe<IAddDbGamesMutationResult>,
  updateOffer?: Maybe<IUpdateOfferMutationResult>,
  createOffer?: Maybe<ICreateOfferMutationResult>,
  updateUserInfo?: Maybe<IUpdateUserInfoMutationResult>,
};


export type IMutationAddUserGamesArgs = {
  input: IAddGamesMutationInput
};


export type IMutationRemoveUserGamesArgs = {
  input: IRemoveGamesMutationInput
};


export type IMutationUpdateUserGamesArgs = {
  input: IUpdateGamesMutationInput
};


export type IMutationAddDbGamesArgs = {
  input: IAddDbGamesMutationInput
};


export type IMutationUpdateOfferArgs = {
  input?: Maybe<IUpdateOfferMutationInput>
};


export type IMutationCreateOfferArgs = {
  input?: Maybe<ICreateOfferMutationInput>
};


export type IMutationUpdateUserInfoArgs = {
  input: IUpdateUserInfoMutationInput
};

export type IOffer = {
   __typename?: 'Offer',
  offerId: Scalars['ID'],
  senderGames: Array<IUserGame>,
  receiverGames: Array<IUserGame>,
  receiverId: Scalars['ID'],
  senderId: Scalars['ID'],
  epochTimeCreated: Scalars['String'],
  status: IOfferStatus,
  receiverStatus: IOfferStatus,
  senderStatus: IOfferStatus,
};

export type IOfferInput = {
  myGames: Array<IUserGameInput>,
  otherGames: Array<IUserGameInput>,
  otherId: Scalars['ID'],
};

export type IOfferQueryInput = {
  status: IOfferStatus,
  pagination?: Maybe<IPaginationInput>,
};

export type IOfferQueryResult = {
   __typename?: 'OfferQueryResult',
  result?: Maybe<Array<IOffer>>,
  pageInfo?: Maybe<IPageInfo>,
};

export enum IOfferStatus {
  Pending = 'pending',
  Ongoing = 'ongoing',
  Completed = 'completed',
  Cancelled = 'cancelled',
  Declined = 'declined'
}

export type IPageInfo = {
   __typename?: 'PageInfo',
  noOfItems: Scalars['Int'],
};

export type IPaginationInput = {
  offset: Scalars['Int'],
  limit: Scalars['Int'],
};

export type IQuery = {
   __typename?: 'Query',
  searchGames: ISearchGamesQueryResult,
  matches: IMatchQueryResult,
  offers: IOfferQueryResult,
  me?: Maybe<IUser>,
  user?: Maybe<IUser>,
};


export type IQuerySearchGamesArgs = {
  input: ISearchGamesQueryInput
};


export type IQueryMatchesArgs = {
  input: IMatchQueryInput
};


export type IQueryOffersArgs = {
  input: IOfferQueryInput
};


export type IQueryUserArgs = {
  input: IUserQueryInput
};

export type IRemoveGamesInput = {
  id: Scalars['ID'],
};

export type IRemoveGamesMutationInput = {
  games: Array<IRemoveGamesInput>,
};

export type IRemoveGamesMutationResult = {
   __typename?: 'RemoveGamesMutationResult',
  result: Scalars['Boolean'],
};

export type ISearchGamesQueryInput = {
  searchText: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
};

export type ISearchGamesQueryResult = {
   __typename?: 'SearchGamesQueryResult',
  result?: Maybe<Array<IGame>>,
};

export type IUpdateGamesInput = {
  id: Scalars['ID'],
  details: IUpdateGamesInputDetails,
};

export type IUpdateGamesInputDetails = {
  description: Scalars['String'],
  status: IUserGameDetailsStatus,
  tradeType: IUserGameDetailsTradeType,
};

export type IUpdateGamesMutationInput = {
  games: Array<IUpdateGamesInput>,
};

export type IUpdateGamesMutationResult = {
   __typename?: 'UpdateGamesMutationResult',
  result: Scalars['Boolean'],
};

export type IUpdateOfferMutationInput = {
  offerId: Scalars['ID'],
  type: IUpdateOfferMutationInputType,
};

export enum IUpdateOfferMutationInputType {
  Complete = 'complete',
  Accept = 'accept',
  Decline = 'decline',
  Cancel = 'cancel'
}

export type IUpdateOfferMutationResult = {
   __typename?: 'UpdateOfferMutationResult',
  result?: Maybe<IOffer>,
};

export type IUpdateUserInfoMutationInput = {
  info: IUserInfoInput,
};

export type IUpdateUserInfoMutationResult = {
   __typename?: 'UpdateUserInfoMutationResult',
  result?: Maybe<IUserInfo>,
  error?: Maybe<IError>,
};


export type IUser = {
   __typename?: 'User',
  id: Scalars['ID'],
  info: IUserInfo,
  wantedGames?: Maybe<Array<IUserGame>>,
  hasGames?: Maybe<Array<IUserGame>>,
};

export type IUserGame = {
   __typename?: 'UserGame',
  id: Scalars['ID'],
  details: IUserGameDetails,
  game: IGame,
};

export type IUserGameDetails = {
   __typename?: 'UserGameDetails',
  description: Scalars['String'],
  status: IUserGameDetailsStatus,
  tradeType: IUserGameDetailsTradeType,
};

export type IUserGameDetailsInput = {
  description: Scalars['String'],
  status?: Maybe<IUserGameDetailsStatus>,
  tradeType: IUserGameDetailsTradeType,
};

export enum IUserGameDetailsStatus {
  Has = 'has',
  Want = 'want'
}

export enum IUserGameDetailsTradeType {
  Swap = 'swap',
  Sale = 'sale'
}

export type IUserGameInput = {
  details: IUserGameDetailsInput,
  gameId: Scalars['ID'],
};

export type IUserInfo = {
   __typename?: 'UserInfo',
  email?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isPro?: Maybe<Scalars['Boolean']>,
  epochTimeCreated?: Maybe<Scalars['String']>,
  location?: Maybe<IUserInfoLocation>,
  noOfSuccessfulExchanges?: Maybe<Scalars['Int']>,
  rating?: Maybe<IUserInfoRating>,
  userImageUrl?: Maybe<Scalars['String']>,
  userName?: Maybe<Scalars['String']>,
  isBanned?: Maybe<Scalars['Boolean']>,
  setting_matchNotifications?: Maybe<Scalars['Boolean']>,
};

export type IUserInfoInput = {
  email?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isPro?: Maybe<Scalars['Boolean']>,
  location?: Maybe<IUserInfoLocationInput>,
  userImageUrl?: Maybe<Scalars['String']>,
  userName?: Maybe<Scalars['String']>,
  isBanned?: Maybe<Scalars['Boolean']>,
  setting_matchNotifications?: Maybe<Scalars['Boolean']>,
};

export type IUserInfoLocation = {
   __typename?: 'UserInfoLocation',
  city: Scalars['String'],
  state: Scalars['String'],
};

export type IUserInfoLocationInput = {
  longitude: Scalars['Float'],
  latitude: Scalars['Float'],
};

export type IUserInfoRating = {
   __typename?: 'UserInfoRating',
  negative?: Maybe<Scalars['Int']>,
  positive?: Maybe<Scalars['Int']>,
};

export type IUserQueryInput = {
  by: IUserQueryType,
  value: Scalars['String'],
};

export enum IUserQueryType {
  Id = 'id',
  Username = 'username'
}

export type ISearchGamesQueryVariables = {
  input: ISearchGamesQueryInput
};


export type ISearchGamesQuery = { __typename?: 'Query', searchGames: { __typename?: 'SearchGamesQueryResult', result: Maybe<Array<{ __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string }>> } };


export const SearchGamesDocument = gql`
    query searchGames($input: SearchGamesQueryInput!) {
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
export type SearchGamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ISearchGamesQuery, ISearchGamesQueryVariables>, 'query'> & ({ variables: ISearchGamesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SearchGamesComponent = (props: SearchGamesComponentProps) => (
      <ApolloReactComponents.Query<ISearchGamesQuery, ISearchGamesQueryVariables> query={SearchGamesDocument} {...props} />
    );
    
export type ISearchGamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<ISearchGamesQuery, ISearchGamesQueryVariables> & TChildProps;
export function withSearchGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ISearchGamesQuery,
  ISearchGamesQueryVariables,
  ISearchGamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ISearchGamesQuery, ISearchGamesQueryVariables, ISearchGamesProps<TChildProps>>(SearchGamesDocument, {
      alias: 'searchGames',
      ...operationOptions
    });
};

/**
 * __useSearchGamesQuery__
 *
 * To run a query within a React component, call `useSearchGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGamesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchGamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ISearchGamesQuery, ISearchGamesQueryVariables>) {
        return ApolloReactHooks.useQuery<ISearchGamesQuery, ISearchGamesQueryVariables>(SearchGamesDocument, baseOptions);
      }
export function useSearchGamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ISearchGamesQuery, ISearchGamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ISearchGamesQuery, ISearchGamesQueryVariables>(SearchGamesDocument, baseOptions);
        }
export type SearchGamesQueryHookResult = ReturnType<typeof useSearchGamesQuery>;
export type SearchGamesLazyQueryHookResult = ReturnType<typeof useSearchGamesLazyQuery>;
export type SearchGamesQueryResult = ApolloReactCommon.QueryResult<ISearchGamesQuery, ISearchGamesQueryVariables>;