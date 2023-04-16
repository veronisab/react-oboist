import { useState } from "react";

export default function Youtube() {
  return (
    <div className="youtube">
      <iframe
        src="https://www.youtube.com/embed/8WaVzA6dxdw"
        title="CPE Bach Trio Sonata"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/K7rsEcYtlTs"
        title="Poulenc Oboe Sonata"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/BXDT2jw1Jxw"
        title="Dutilleux Oboe Sonata"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/videoseries?list=PLZb528n0jlYaDOYuJbLh09LSeynVJGVDU"
        title="Playlist: 8 uropførelser for obo"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/y6cbYZ8_IaI"
        title="Mozart Oboe Quartet"
      ></iframe>
      <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/205754622&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
  );
}
