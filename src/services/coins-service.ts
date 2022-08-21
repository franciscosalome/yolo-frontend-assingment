import { ApolloQueryResult } from "@apollo/client";
import { GET_PRICE } from "../GraphQL/Queries";
import { client } from "./api";

export const fetchCoin = async (coinName: string): Promise<ApolloQueryResult<any>> => {
  return await client.query({ query: GET_PRICE, variables: { coinName } })
}