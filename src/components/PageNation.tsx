import Link from "next/link";

type Props = {
  pageIndex: number;
  numPages: number;
};

const PageNation = ({ pageIndex, numPages }: Props) => {
  const items: JSX.Element[] = [
    <span
      key="pageIndex"
      className="inline-block w-8 rounded border border-gray-400 bg-gray-100 py-1 text-center text-gray-400"
    >
      {pageIndex}
    </span>,
  ];
  if (numPages - pageIndex < 6) {
    for (let i = pageIndex + 1; i <= numPages; i++) {
      items.push(<PageNationItem key={i} index={i} />);
    }
  } else {
    const arr = [pageIndex + 1, pageIndex + 2, null, numPages - 1, numPages];
    arr.forEach((i) => {
      if (i === null) {
        items.push(<li key={i}>...</li>);
      } else {
        items.push(<PageNationItem key={i} index={i} />);
      }
    });
  }
  if (pageIndex < 7) {
    for (let i = pageIndex - 1; 0 < i; i--) {
      items.unshift(<PageNationItem key={i} index={i} />);
    }
  } else {
    const arr = [pageIndex - 1, pageIndex - 2, null, 2, 1];
    arr.forEach((i) => {
      if (i === null) {
        items.unshift(<li key={i}>...</li>);
      } else {
        items.unshift(<PageNationItem key={i} index={i} />);
      }
    });
  }
  return <ul className="mt-12 flex flex-wrap justify-center gap-3">{items}</ul>;
};

export default PageNation;

type PageNationItemProps = {
  index: number;
};

const PageNationItem = ({ index }: PageNationItemProps) => {
  return (
    <li>
      <Link
        href={index === 1 ? "/" : `/page/${index}`}
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        <span className="inline-block w-8 rounded border border-gray-400 bg-gray-100 py-1 text-center">
          {index}
        </span>
      </Link>
    </li>
  );
};
