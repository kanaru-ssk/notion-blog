type Props = {
  url: string;
};

const Facebook = ({ url }: Props) => {
  return (
    <div className="my-5">
      <iframe
        src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
          url
        )}&show_text=true`}
        height={534}
        className="w-full overflow-hidden"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Facebook;
