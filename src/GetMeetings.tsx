// Using it inside react.js
import { gql, useQuery } from "@apollo/client";

const Meetings = gql`
  query myLikeMeetinges(
    $user_id_value: Int
    $user__id_operator: IDEnumFilterOperator
    $sort_createdAt: OrderEnumType
    $sort_updatedAt: OrderEnumType
    $first: Int
    $after: String
    $offset: Int
  ) {
    myLikeMeetinges(
      filter: {
        user__id: { value: user_id_value, operator: user__id_operator }
      }
      sort: { createdAt: sort_createdAt, updatedAt: sort_updatedAt }
      first: first
      after: after
      offset: offset
    ) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      totalCount
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;

export default function GetMeetings({
  user_id_value,
  user__id_operator,
  sort_createdAt,
  sort_updatedAt,
  first,
  after,
  offset,
}: {
  user_id_value: number;
  user__id_operator: "EQUAL" | "NOT_EQUAL";
  sort_createdAt: "ASC" | "DESC";
  sort_updatedAt: "ASC" | "DESC";
  first: number;
  after: String;
  offset: number;
}) {
  const { error, data, loading, refetch } = useQuery(Meetings, {
    variables: {
      user_id_value,
      user__id_operator,
      sort_createdAt,
      sort_updatedAt,
      first,
      after,
      offset,
    },
  });
  console.log({ ...error });
  console.log({ data });
  if (loading) return <div>Data loading</div>;
  else if (error) return <div>Error retrieving data</div>;
  return (
    <div>
      <button onClick={() => refetch()}>refresh</button>
      <div>Meeting information goes here</div>
      <div>{data.myLikeMeetinges.totalCount}</div>
    </div>
  );
}
