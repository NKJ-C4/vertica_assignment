import { useEffect } from "react";

export const Tweet = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";

    const element = document.getElementById("tweetnvidia")
    element.appendChild(script);

    return () => {
      element.removeChild(script);
    };
  }, []);

  return (
    <div className="tweet" id="tweetnvidia">
      <blockquote class="twitter-tweet">
        <p lang="qme" dir="ltr">
          <a href="https://twitter.com/hashtag/ProjectBeyond?src=hash&amp;ref_src=twsrc%5Etfw">
            #ProjectBeyond
          </a>{" "}
          <a href="https://t.co/aPTrpi8BXa">pic.twitter.com/aPTrpi8BXa</a>
        </p>
        &mdash; NVIDIA GeForce (@NVIDIAGeForce){" "}
        <a href="https://twitter.com/NVIDIAGeForce/status/1567659030247575552?ref_src=twsrc%5Etfw">
          September 7, 2022
        </a>
      </blockquote>{" "}
    </div>
  );
};
