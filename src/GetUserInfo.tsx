// Using it inside react.js
import { gql, useQuery } from "@apollo/client";

const UserInfo = gql`
  query User($id: ID!) {
    user(id: id) {
      id
      name
      email
      role
      gender
      birthday
      phone
      isAgreePolicy
      isAgreePrivacy
      state
      language
      createdAt
      updatedAt
      alarmSetting {
        noticeAlarm
        appPushAllow
        smsAllow
        userAlarm
        matchAlarm
        tokens
        kakaoAllow
      }
      myPoint
      socialType
    }
  }
`;

export default function GetUserInfo({ id }: { id: string }) {
  const { error, data, loading, refetch } = useQuery(UserInfo, {
    variables: { id },
  });
  console.log({ ...error });
  console.log({ data });
  if (loading) return <div>Data loading</div>;
  else if (error) return <div>Error retrieving data</div>;
  return (
    <div>
      <button onClick={() => refetch()}>refresh</button>
      <div>User information goes here</div>
      <div>{data.user.name}</div>
    </div>
  );
}
