import React from 'react';

export const UserProfile = ({ props, goBack }: { props: any, goBack: () => void }) => {
  return (<>
    <p>{props.username}</p>
    <p>{props.email}</p>
    <button type="button" onClick={() => goBack()}>Go Back</button>
  </>);
}
