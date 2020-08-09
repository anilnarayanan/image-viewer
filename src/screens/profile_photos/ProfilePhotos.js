import React from "react";

export default function ProfilePhotos() {
  const photos = sessionStorage.getItem("access-token");

  return (
    <div>
      {/* fetch(sessionStorage.getItem("https://graph.instagram.com/me/media?fields=id,caption&access_token="+sessionStorage.getItem("access-token") */}
      <h1>bingo</h1>
    </div>
  );
}
// https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJXWXMwbDFGN0RLU0JiWXFrX1VnSk5HTlNZAYldWMl9MVXp2Y1dadHBDZAzZAOMk04QnBsTnhCOXdqYl9KWlRaelpub1k4NFdRMDJ1N3lqZAjZAvbUlnWXp3U2xaS3ZAlUnkzODBnWXVTQ2VBVUdPNHN3MQZDZD



export default class ProfilePhotos extends React.Component {
  
}