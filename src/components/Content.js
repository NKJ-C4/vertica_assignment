
const Content = () => {
  return (
    <div className="content-container">
      <h2 className="post-heading">
        Nvidia teases RTX 40 series announcement with {"'"}GeForce Beyond{"'"}{" "}
        event
      </h2>
      <div className="content-details">
        <img
          src="https://cdn.vox-cdn.com/thumbor/n-rv4tfGo3d3aGQZnbOny7ArABE=/0x0:1260x840/920x613/filters:focal(530x320:730x520):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71338414/nvidiainvite.0.jpg"
          alt="google"
          width="500"
          className="post-thumbnail"
        />
        <div className="content-text">
          <p>
            Nvidia wants the world to know it’s getting ready to launch its
            next-gen 40-series GPUs. Nvidia CEO Jensen Huang will hold a special
            “GeForce Beyond” keynote at the company’s GTC 2022 conference on
            September 20th.{" "}
          </p>
          <p>
            Nvidia is widely expected to announce its 40-series GPUs at this
            event after the company confirmed it would discuss its next-gen GPU
            architecture at GTC. Codenamed Lovelace, the next GPU architecture
            will usher in the new RTX 40-series graphics cards to replace
            Nvidia’s existing Ampere architecture.
          </p>
          <p>
            Rumors continue to suggest Nvidia is working on RTX 4080 and RTX
            4090 GPUs. The monster RTX 4090 was originally rumored as a July
            release, and it could offer a big performance boost over existing
            RTX 3090 and even RTX 3090 Ti cards.
          </p>
          <p>
            While Nvidia might be ready to announce its RTX 40 series, the
            existing RTX 30-series GPUs will live alongside these next-gen ones.
            Nvidia built too many GPUs, so it’s currently being forced to adjust
            retail pricing due to excess inventory, resulting in RTX 30-series
            cards appearing at MSRP after years of price hikes by resellers. GPU
            demand has been dampened by the crypto crash, so it’s likely we’ll
            see RTX 30 series on shelves for a little while yet.
          </p>
          <p>
            Nvidia will stream its GeForce Beyond event on Twitch and YouTube,
            and the event starts at 8AM PT / 11AM ET on September 20th.
          </p>
          <p className="source-span">
            Source:{" "}
            <a
              href="https://www.theverge.com/2022/9/8/23342579/nvidia-rtx-40-series-gpu-geforce-beyond-event-date"
              target="_blank"
            >
              The Verge
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
