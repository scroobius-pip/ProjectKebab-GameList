import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
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
  type: IErrorType,
};

export enum IErrorType {
  UpgradeMembership = 'UPGRADE_MEMBERSHIP',
  AuthError = 'AUTH_ERROR',
  LocationNotSet = 'LOCATION_NOT_SET'
}

export type IGame = {
   __typename?: 'Game',
  name: Scalars['String'],
  consoleType?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  imageUrl?: Maybe<Scalars['String']>,
};

export type IMatch = {
   __typename?: 'Match',
  id: Scalars['ID'],
  userImageUrl: Scalars['String'],
  userName: Scalars['String'],
  matchRate?: Maybe<Scalars['Float']>,
  wantedGameNames?: Maybe<Array<Scalars['String']>>,
  hasGameNames?: Maybe<Array<Scalars['String']>>,
  state?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
};

export type IMatchQueryInput = {
  sortBy: IMatchSortType,
};

export type IMatchQueryResult = {
   __typename?: 'MatchQueryResult',
  result?: Maybe<Array<IMatch>>,
  error?: Maybe<IError>,
};

export enum IMatchSortType {
  Location = 'location',
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
  count?: Maybe<Scalars['Int']>,
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
  country: Scalars['String'],
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

export type IAddUserGamesMutationVariables = {
  games: Array<IAddGamesInput>
};


export type IAddUserGamesMutation = { __typename?: 'Mutation', addUserGames: Maybe<{ __typename?: 'AddGamesMutationResult', result: boolean, error: Maybe<{ __typename?: 'Error', message: string, type: IErrorType, id: string }> }> };

export type IRemoveUserGamesMutationVariables = {
  games: Array<IRemoveGamesInput>
};


export type IRemoveUserGamesMutation = { __typename?: 'Mutation', removeUserGames: Maybe<{ __typename?: 'RemoveGamesMutationResult', result: boolean }> };

export type IUpdateUserDescriptionMutationVariables = {
  description: Scalars['String']
};


export type IUpdateUserDescriptionMutation = { __typename?: 'Mutation', updateUserInfo: Maybe<{ __typename?: 'UpdateUserInfoMutationResult', result: Maybe<{ __typename?: 'UserInfo', description: Maybe<string> }>, error: Maybe<{ __typename?: 'Error', message: string, type: IErrorType, id: string }> }> };

export type IUpdateUserGamesMutationVariables = {
  games: Array<IUpdateGamesInput>
};


export type IUpdateUserGamesMutation = { __typename?: 'Mutation', updateUserGames: Maybe<{ __typename?: 'UpdateGamesMutationResult', result: boolean }> };

export type IUpdateLocationMutationVariables = {
  location: IUserInfoLocationInput
};


export type IUpdateLocationMutation = { __typename?: 'Mutation', updateUserInfo: Maybe<{ __typename?: 'UpdateUserInfoMutationResult', result: Maybe<{ __typename?: 'UserInfo', location: Maybe<{ __typename?: 'UserInfoLocation', country: string, state: string }> }>, error: Maybe<{ __typename?: 'Error', message: string, type: IErrorType, id: string }> }> };

export type IUpdateMatchNotificationsMutationVariables = {
  status: Scalars['Boolean']
};


export type IUpdateMatchNotificationsMutation = { __typename?: 'Mutation', updateUserInfo: Maybe<{ __typename?: 'UpdateUserInfoMutationResult', result: Maybe<{ __typename?: 'UserInfo', setting_matchNotifications: Maybe<boolean> }>, error: Maybe<{ __typename?: 'Error', message: string, type: IErrorType }> }> };

export type IGetMyDescriptionAndGamesQueryVariables = {};


export type IGetMyDescriptionAndGamesQuery = { __typename?: 'Query', me: Maybe<{ __typename?: 'User', id: string, info: { __typename?: 'UserInfo', description: Maybe<string> }, hasGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string } }>>, wantedGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string } }>> }> };

export type IGetMatchesQueryVariables = {
  input: IMatchQueryInput
};


export type IGetMatchesQuery = { __typename?: 'Query', matches: { __typename?: 'MatchQueryResult', result: Maybe<Array<{ __typename?: 'Match', id: string, userImageUrl: string, userName: string, matchRate: Maybe<number>, wantedGameNames: Maybe<Array<string>>, hasGameNames: Maybe<Array<string>>, state: Maybe<string>, country: Maybe<string> }>>, error: Maybe<{ __typename?: 'Error', type: IErrorType }> } };

export type IUserGameQueryVariables = {};


export type IUserGameQuery = { __typename?: 'Query', me: Maybe<{ __typename?: 'User', id: string, hasGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string } }>>, wantedGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string } }>> }> };

export type IGetUserCountQueryVariables = {};


export type IGetUserCountQuery = { __typename?: 'Query', count: Maybe<number> };

export type IGetUserQueryVariables = {
  username: Scalars['String']
};


export type IGetUserQuery = { __typename?: 'Query', user: Maybe<{ __typename?: 'User', id: string, info: { __typename?: 'UserInfo', email: Maybe<string>, description: Maybe<string>, noOfSuccessfulExchanges: Maybe<number>, epochTimeCreated: Maybe<string>, userName: Maybe<string>, isPro: Maybe<boolean>, isBanned: Maybe<boolean>, userImageUrl: Maybe<string>, setting_matchNotifications: Maybe<boolean>, location: Maybe<{ __typename?: 'UserInfoLocation', country: string, state: string }> }, hasGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', id: string, name: string, consoleType: Maybe<string>, imageUrl: Maybe<string> } }>>, wantedGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', id: string, name: string, consoleType: Maybe<string>, imageUrl: Maybe<string> } }>> }> };

export type IGetUserInfoQueryVariables = {};


export type IGetUserInfoQuery = { __typename?: 'Query', me: Maybe<{ __typename?: 'User', id: string, info: { __typename?: 'UserInfo', userName: Maybe<string>, email: Maybe<string>, userImageUrl: Maybe<string>, description: Maybe<string>, isPro: Maybe<boolean>, isBanned: Maybe<boolean>, setting_matchNotifications: Maybe<boolean>, epochTimeCreated: Maybe<string>, location: Maybe<{ __typename?: 'UserInfoLocation', country: string, state: string }> } }> };

export type ISearchGamesQueryVariables = {
  input: ISearchGamesQueryInput
};


export type ISearchGamesQuery = { __typename?: 'Query', searchGames: { __typename?: 'SearchGamesQueryResult', result: Maybe<Array<{ __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string }>> } };


export const AddUserGamesDocument = gql`
    mutation addUserGames($games: [AddGamesInput!]!) {
  addUserGames(input: {games: $games}) {
    result
    error {
      message
      type
      id
    }
  }
}
    `;
export type IAddUserGamesMutationFn = ApolloReactCommon.MutationFunction<IAddUserGamesMutation, IAddUserGamesMutationVariables>;
export type AddUserGamesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IAddUserGamesMutation, IAddUserGamesMutationVariables>, 'mutation'>;

    export const AddUserGamesComponent = (props: AddUserGamesComponentProps) => (
      <ApolloReactComponents.Mutation<IAddUserGamesMutation, IAddUserGamesMutationVariables> mutation={AddUserGamesDocument} {...props} />
    );
    
export type IAddUserGamesProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IAddUserGamesMutation, IAddUserGamesMutationVariables> & TChildProps;
export function withAddUserGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IAddUserGamesMutation,
  IAddUserGamesMutationVariables,
  IAddUserGamesProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IAddUserGamesMutation, IAddUserGamesMutationVariables, IAddUserGamesProps<TChildProps>>(AddUserGamesDocument, {
      alias: 'addUserGames',
      ...operationOptions
    });
};

/**
 * __useAddUserGamesMutation__
 *
 * To run a mutation, you first call `useAddUserGamesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserGamesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserGamesMutation, { data, loading, error }] = useAddUserGamesMutation({
 *   variables: {
 *      games: // value for 'games'
 *   },
 * });
 */
export function useAddUserGamesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IAddUserGamesMutation, IAddUserGamesMutationVariables>) {
        return ApolloReactHooks.useMutation<IAddUserGamesMutation, IAddUserGamesMutationVariables>(AddUserGamesDocument, baseOptions);
      }
export type AddUserGamesMutationHookResult = ReturnType<typeof useAddUserGamesMutation>;
export type AddUserGamesMutationResult = ApolloReactCommon.MutationResult<IAddUserGamesMutation>;
export type AddUserGamesMutationOptions = ApolloReactCommon.BaseMutationOptions<IAddUserGamesMutation, IAddUserGamesMutationVariables>;
export const RemoveUserGamesDocument = gql`
    mutation removeUserGames($games: [RemoveGamesInput!]!) {
  removeUserGames(input: {games: $games}) {
    result
  }
}
    `;
export type IRemoveUserGamesMutationFn = ApolloReactCommon.MutationFunction<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables>;
export type RemoveUserGamesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables>, 'mutation'>;

    export const RemoveUserGamesComponent = (props: RemoveUserGamesComponentProps) => (
      <ApolloReactComponents.Mutation<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables> mutation={RemoveUserGamesDocument} {...props} />
    );
    
export type IRemoveUserGamesProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables> & TChildProps;
export function withRemoveUserGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IRemoveUserGamesMutation,
  IRemoveUserGamesMutationVariables,
  IRemoveUserGamesProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables, IRemoveUserGamesProps<TChildProps>>(RemoveUserGamesDocument, {
      alias: 'removeUserGames',
      ...operationOptions
    });
};

/**
 * __useRemoveUserGamesMutation__
 *
 * To run a mutation, you first call `useRemoveUserGamesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserGamesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserGamesMutation, { data, loading, error }] = useRemoveUserGamesMutation({
 *   variables: {
 *      games: // value for 'games'
 *   },
 * });
 */
export function useRemoveUserGamesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables>) {
        return ApolloReactHooks.useMutation<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables>(RemoveUserGamesDocument, baseOptions);
      }
export type RemoveUserGamesMutationHookResult = ReturnType<typeof useRemoveUserGamesMutation>;
export type RemoveUserGamesMutationResult = ApolloReactCommon.MutationResult<IRemoveUserGamesMutation>;
export type RemoveUserGamesMutationOptions = ApolloReactCommon.BaseMutationOptions<IRemoveUserGamesMutation, IRemoveUserGamesMutationVariables>;
export const UpdateUserDescriptionDocument = gql`
    mutation updateUserDescription($description: String!) {
  updateUserInfo(input: {info: {description: $description}}) {
    result {
      description
    }
    error {
      message
      type
      id
    }
  }
}
    `;
export type IUpdateUserDescriptionMutationFn = ApolloReactCommon.MutationFunction<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables>;
export type UpdateUserDescriptionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables>, 'mutation'>;

    export const UpdateUserDescriptionComponent = (props: UpdateUserDescriptionComponentProps) => (
      <ApolloReactComponents.Mutation<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables> mutation={UpdateUserDescriptionDocument} {...props} />
    );
    
export type IUpdateUserDescriptionProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables> & TChildProps;
export function withUpdateUserDescription<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IUpdateUserDescriptionMutation,
  IUpdateUserDescriptionMutationVariables,
  IUpdateUserDescriptionProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables, IUpdateUserDescriptionProps<TChildProps>>(UpdateUserDescriptionDocument, {
      alias: 'updateUserDescription',
      ...operationOptions
    });
};

/**
 * __useUpdateUserDescriptionMutation__
 *
 * To run a mutation, you first call `useUpdateUserDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserDescriptionMutation, { data, loading, error }] = useUpdateUserDescriptionMutation({
 *   variables: {
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateUserDescriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables>(UpdateUserDescriptionDocument, baseOptions);
      }
export type UpdateUserDescriptionMutationHookResult = ReturnType<typeof useUpdateUserDescriptionMutation>;
export type UpdateUserDescriptionMutationResult = ApolloReactCommon.MutationResult<IUpdateUserDescriptionMutation>;
export type UpdateUserDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<IUpdateUserDescriptionMutation, IUpdateUserDescriptionMutationVariables>;
export const UpdateUserGamesDocument = gql`
    mutation updateUserGames($games: [UpdateGamesInput!]!) {
  updateUserGames(input: {games: $games}) {
    result
  }
}
    `;
export type IUpdateUserGamesMutationFn = ApolloReactCommon.MutationFunction<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables>;
export type UpdateUserGamesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables>, 'mutation'>;

    export const UpdateUserGamesComponent = (props: UpdateUserGamesComponentProps) => (
      <ApolloReactComponents.Mutation<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables> mutation={UpdateUserGamesDocument} {...props} />
    );
    
export type IUpdateUserGamesProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables> & TChildProps;
export function withUpdateUserGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IUpdateUserGamesMutation,
  IUpdateUserGamesMutationVariables,
  IUpdateUserGamesProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables, IUpdateUserGamesProps<TChildProps>>(UpdateUserGamesDocument, {
      alias: 'updateUserGames',
      ...operationOptions
    });
};

/**
 * __useUpdateUserGamesMutation__
 *
 * To run a mutation, you first call `useUpdateUserGamesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserGamesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserGamesMutation, { data, loading, error }] = useUpdateUserGamesMutation({
 *   variables: {
 *      games: // value for 'games'
 *   },
 * });
 */
export function useUpdateUserGamesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables>) {
        return ApolloReactHooks.useMutation<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables>(UpdateUserGamesDocument, baseOptions);
      }
export type UpdateUserGamesMutationHookResult = ReturnType<typeof useUpdateUserGamesMutation>;
export type UpdateUserGamesMutationResult = ApolloReactCommon.MutationResult<IUpdateUserGamesMutation>;
export type UpdateUserGamesMutationOptions = ApolloReactCommon.BaseMutationOptions<IUpdateUserGamesMutation, IUpdateUserGamesMutationVariables>;
export const UpdateLocationDocument = gql`
    mutation updateLocation($location: UserInfoLocationInput!) {
  updateUserInfo(input: {info: {location: $location}}) {
    result {
      location {
        country
        state
      }
    }
    error {
      message
      type
      id
    }
  }
}
    `;
export type IUpdateLocationMutationFn = ApolloReactCommon.MutationFunction<IUpdateLocationMutation, IUpdateLocationMutationVariables>;
export type UpdateLocationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IUpdateLocationMutation, IUpdateLocationMutationVariables>, 'mutation'>;

    export const UpdateLocationComponent = (props: UpdateLocationComponentProps) => (
      <ApolloReactComponents.Mutation<IUpdateLocationMutation, IUpdateLocationMutationVariables> mutation={UpdateLocationDocument} {...props} />
    );
    
export type IUpdateLocationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IUpdateLocationMutation, IUpdateLocationMutationVariables> & TChildProps;
export function withUpdateLocation<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IUpdateLocationMutation,
  IUpdateLocationMutationVariables,
  IUpdateLocationProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IUpdateLocationMutation, IUpdateLocationMutationVariables, IUpdateLocationProps<TChildProps>>(UpdateLocationDocument, {
      alias: 'updateLocation',
      ...operationOptions
    });
};

/**
 * __useUpdateLocationMutation__
 *
 * To run a mutation, you first call `useUpdateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationMutation, { data, loading, error }] = useUpdateLocationMutation({
 *   variables: {
 *      location: // value for 'location'
 *   },
 * });
 */
export function useUpdateLocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IUpdateLocationMutation, IUpdateLocationMutationVariables>) {
        return ApolloReactHooks.useMutation<IUpdateLocationMutation, IUpdateLocationMutationVariables>(UpdateLocationDocument, baseOptions);
      }
export type UpdateLocationMutationHookResult = ReturnType<typeof useUpdateLocationMutation>;
export type UpdateLocationMutationResult = ApolloReactCommon.MutationResult<IUpdateLocationMutation>;
export type UpdateLocationMutationOptions = ApolloReactCommon.BaseMutationOptions<IUpdateLocationMutation, IUpdateLocationMutationVariables>;
export const UpdateMatchNotificationsDocument = gql`
    mutation updateMatchNotifications($status: Boolean!) {
  updateUserInfo(input: {info: {setting_matchNotifications: $status}}) {
    result {
      setting_matchNotifications
    }
    error {
      message
      type
    }
  }
}
    `;
export type IUpdateMatchNotificationsMutationFn = ApolloReactCommon.MutationFunction<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables>;
export type UpdateMatchNotificationsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables>, 'mutation'>;

    export const UpdateMatchNotificationsComponent = (props: UpdateMatchNotificationsComponentProps) => (
      <ApolloReactComponents.Mutation<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables> mutation={UpdateMatchNotificationsDocument} {...props} />
    );
    
export type IUpdateMatchNotificationsProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables> & TChildProps;
export function withUpdateMatchNotifications<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IUpdateMatchNotificationsMutation,
  IUpdateMatchNotificationsMutationVariables,
  IUpdateMatchNotificationsProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables, IUpdateMatchNotificationsProps<TChildProps>>(UpdateMatchNotificationsDocument, {
      alias: 'updateMatchNotifications',
      ...operationOptions
    });
};

/**
 * __useUpdateMatchNotificationsMutation__
 *
 * To run a mutation, you first call `useUpdateMatchNotificationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatchNotificationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMatchNotificationsMutation, { data, loading, error }] = useUpdateMatchNotificationsMutation({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateMatchNotificationsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables>) {
        return ApolloReactHooks.useMutation<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables>(UpdateMatchNotificationsDocument, baseOptions);
      }
export type UpdateMatchNotificationsMutationHookResult = ReturnType<typeof useUpdateMatchNotificationsMutation>;
export type UpdateMatchNotificationsMutationResult = ApolloReactCommon.MutationResult<IUpdateMatchNotificationsMutation>;
export type UpdateMatchNotificationsMutationOptions = ApolloReactCommon.BaseMutationOptions<IUpdateMatchNotificationsMutation, IUpdateMatchNotificationsMutationVariables>;
export const GetMyDescriptionAndGamesDocument = gql`
    query getMyDescriptionAndGames {
  me {
    id
    info {
      description
    }
    hasGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        consoleType
        id
        imageUrl
        name
      }
    }
    wantedGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        consoleType
        id
        imageUrl
        name
      }
    }
  }
}
    `;
export type GetMyDescriptionAndGamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables>, 'query'>;

    export const GetMyDescriptionAndGamesComponent = (props: GetMyDescriptionAndGamesComponentProps) => (
      <ApolloReactComponents.Query<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables> query={GetMyDescriptionAndGamesDocument} {...props} />
    );
    
export type IGetMyDescriptionAndGamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables> & TChildProps;
export function withGetMyDescriptionAndGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetMyDescriptionAndGamesQuery,
  IGetMyDescriptionAndGamesQueryVariables,
  IGetMyDescriptionAndGamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables, IGetMyDescriptionAndGamesProps<TChildProps>>(GetMyDescriptionAndGamesDocument, {
      alias: 'getMyDescriptionAndGames',
      ...operationOptions
    });
};

/**
 * __useGetMyDescriptionAndGamesQuery__
 *
 * To run a query within a React component, call `useGetMyDescriptionAndGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyDescriptionAndGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyDescriptionAndGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyDescriptionAndGamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables>(GetMyDescriptionAndGamesDocument, baseOptions);
      }
export function useGetMyDescriptionAndGamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables>(GetMyDescriptionAndGamesDocument, baseOptions);
        }
export type GetMyDescriptionAndGamesQueryHookResult = ReturnType<typeof useGetMyDescriptionAndGamesQuery>;
export type GetMyDescriptionAndGamesLazyQueryHookResult = ReturnType<typeof useGetMyDescriptionAndGamesLazyQuery>;
export type GetMyDescriptionAndGamesQueryResult = ApolloReactCommon.QueryResult<IGetMyDescriptionAndGamesQuery, IGetMyDescriptionAndGamesQueryVariables>;
export const GetMatchesDocument = gql`
    query getMatches($input: MatchQueryInput!) {
  matches(input: $input) {
    result {
      id
      userImageUrl
      userName
      matchRate
      wantedGameNames
      hasGameNames
      state
      country
    }
    error {
      type
    }
  }
}
    `;
export type GetMatchesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetMatchesQuery, IGetMatchesQueryVariables>, 'query'> & ({ variables: IGetMatchesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetMatchesComponent = (props: GetMatchesComponentProps) => (
      <ApolloReactComponents.Query<IGetMatchesQuery, IGetMatchesQueryVariables> query={GetMatchesDocument} {...props} />
    );
    
export type IGetMatchesProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetMatchesQuery, IGetMatchesQueryVariables> & TChildProps;
export function withGetMatches<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetMatchesQuery,
  IGetMatchesQueryVariables,
  IGetMatchesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetMatchesQuery, IGetMatchesQueryVariables, IGetMatchesProps<TChildProps>>(GetMatchesDocument, {
      alias: 'getMatches',
      ...operationOptions
    });
};

/**
 * __useGetMatchesQuery__
 *
 * To run a query within a React component, call `useGetMatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMatchesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetMatchesQuery, IGetMatchesQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetMatchesQuery, IGetMatchesQueryVariables>(GetMatchesDocument, baseOptions);
      }
export function useGetMatchesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetMatchesQuery, IGetMatchesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetMatchesQuery, IGetMatchesQueryVariables>(GetMatchesDocument, baseOptions);
        }
export type GetMatchesQueryHookResult = ReturnType<typeof useGetMatchesQuery>;
export type GetMatchesLazyQueryHookResult = ReturnType<typeof useGetMatchesLazyQuery>;
export type GetMatchesQueryResult = ApolloReactCommon.QueryResult<IGetMatchesQuery, IGetMatchesQueryVariables>;
export const UserGameDocument = gql`
    query UserGame {
  me {
    id
    hasGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        consoleType
        id
        imageUrl
        name
      }
    }
    wantedGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        consoleType
        id
        imageUrl
        name
      }
    }
  }
}
    `;
export type UserGameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IUserGameQuery, IUserGameQueryVariables>, 'query'>;

    export const UserGameComponent = (props: UserGameComponentProps) => (
      <ApolloReactComponents.Query<IUserGameQuery, IUserGameQueryVariables> query={UserGameDocument} {...props} />
    );
    
export type IUserGameProps<TChildProps = {}> = ApolloReactHoc.DataProps<IUserGameQuery, IUserGameQueryVariables> & TChildProps;
export function withUserGame<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IUserGameQuery,
  IUserGameQueryVariables,
  IUserGameProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IUserGameQuery, IUserGameQueryVariables, IUserGameProps<TChildProps>>(UserGameDocument, {
      alias: 'userGame',
      ...operationOptions
    });
};

/**
 * __useUserGameQuery__
 *
 * To run a query within a React component, call `useUserGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGameQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGameQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IUserGameQuery, IUserGameQueryVariables>) {
        return ApolloReactHooks.useQuery<IUserGameQuery, IUserGameQueryVariables>(UserGameDocument, baseOptions);
      }
export function useUserGameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IUserGameQuery, IUserGameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IUserGameQuery, IUserGameQueryVariables>(UserGameDocument, baseOptions);
        }
export type UserGameQueryHookResult = ReturnType<typeof useUserGameQuery>;
export type UserGameLazyQueryHookResult = ReturnType<typeof useUserGameLazyQuery>;
export type UserGameQueryResult = ApolloReactCommon.QueryResult<IUserGameQuery, IUserGameQueryVariables>;
export const GetUserCountDocument = gql`
    query getUserCount {
  count
}
    `;
export type GetUserCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetUserCountQuery, IGetUserCountQueryVariables>, 'query'>;

    export const GetUserCountComponent = (props: GetUserCountComponentProps) => (
      <ApolloReactComponents.Query<IGetUserCountQuery, IGetUserCountQueryVariables> query={GetUserCountDocument} {...props} />
    );
    
export type IGetUserCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetUserCountQuery, IGetUserCountQueryVariables> & TChildProps;
export function withGetUserCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetUserCountQuery,
  IGetUserCountQueryVariables,
  IGetUserCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetUserCountQuery, IGetUserCountQueryVariables, IGetUserCountProps<TChildProps>>(GetUserCountDocument, {
      alias: 'getUserCount',
      ...operationOptions
    });
};

/**
 * __useGetUserCountQuery__
 *
 * To run a query within a React component, call `useGetUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetUserCountQuery, IGetUserCountQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetUserCountQuery, IGetUserCountQueryVariables>(GetUserCountDocument, baseOptions);
      }
export function useGetUserCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetUserCountQuery, IGetUserCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetUserCountQuery, IGetUserCountQueryVariables>(GetUserCountDocument, baseOptions);
        }
export type GetUserCountQueryHookResult = ReturnType<typeof useGetUserCountQuery>;
export type GetUserCountLazyQueryHookResult = ReturnType<typeof useGetUserCountLazyQuery>;
export type GetUserCountQueryResult = ApolloReactCommon.QueryResult<IGetUserCountQuery, IGetUserCountQueryVariables>;
export const GetUserDocument = gql`
    query getUser($username: String!) {
  user(input: {by: username, value: $username}) {
    id
    info {
      email
      description
      noOfSuccessfulExchanges
      epochTimeCreated
      noOfSuccessfulExchanges
      userName
      isPro
      isBanned
      userImageUrl
      setting_matchNotifications
      location {
        country
        state
      }
    }
    hasGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        id
        name
        consoleType
        imageUrl
      }
    }
    wantedGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        id
        name
        consoleType
        imageUrl
      }
    }
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetUserQuery, IGetUserQueryVariables>, 'query'> & ({ variables: IGetUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<IGetUserQuery, IGetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type IGetUserProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetUserQuery, IGetUserQueryVariables> & TChildProps;
export function withGetUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetUserQuery,
  IGetUserQueryVariables,
  IGetUserProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetUserQuery, IGetUserQueryVariables, IGetUserProps<TChildProps>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetUserQuery, IGetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetUserQuery, IGetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetUserQuery, IGetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetUserQuery, IGetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<IGetUserQuery, IGetUserQueryVariables>;
export const GetUserInfoDocument = gql`
    query getUserInfo {
  me {
    id
    info {
      userName
      email
      userImageUrl
      description
      email
      isPro
      isBanned
      setting_matchNotifications
      epochTimeCreated
      location {
        country
        state
      }
    }
  }
}
    `;
export type GetUserInfoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetUserInfoQuery, IGetUserInfoQueryVariables>, 'query'>;

    export const GetUserInfoComponent = (props: GetUserInfoComponentProps) => (
      <ApolloReactComponents.Query<IGetUserInfoQuery, IGetUserInfoQueryVariables> query={GetUserInfoDocument} {...props} />
    );
    
export type IGetUserInfoProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetUserInfoQuery, IGetUserInfoQueryVariables> & TChildProps;
export function withGetUserInfo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetUserInfoQuery,
  IGetUserInfoQueryVariables,
  IGetUserInfoProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetUserInfoQuery, IGetUserInfoQueryVariables, IGetUserInfoProps<TChildProps>>(GetUserInfoDocument, {
      alias: 'getUserInfo',
      ...operationOptions
    });
};

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetUserInfoQuery, IGetUserInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetUserInfoQuery, IGetUserInfoQueryVariables>(GetUserInfoDocument, baseOptions);
      }
export function useGetUserInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetUserInfoQuery, IGetUserInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetUserInfoQuery, IGetUserInfoQueryVariables>(GetUserInfoDocument, baseOptions);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = ApolloReactCommon.QueryResult<IGetUserInfoQuery, IGetUserInfoQueryVariables>;
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