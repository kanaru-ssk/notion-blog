import Script from "next/script";

type Props = {
  url: string;
};

const Facebook = ({ url }: Props) => {
  return (
    <div className="my-5">
      <div className="fb-post" data-href={url}></div>
      <Script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
      />
    </div>
  );
};

export default Facebook;
