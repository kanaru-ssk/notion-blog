type Props = {
  url: string;
};

export const YouTube = ({ url }: Props) => {
  const YouTubeVideoId = url.match(
    /(?:\?v=|&v=|youtu\.be\/)(.*?)(?:\?|&|$)/
  )?.[1];
  return (
    <div className="m-1.5">
      <iframe
        width={560}
        height={315}
        src={`https://www.youtube.com/embed/${YouTubeVideoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-40 w-72 sm:h-52 sm:w-96"
      ></iframe>
    </div>
  );
};
