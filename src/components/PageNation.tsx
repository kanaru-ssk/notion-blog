import Link from "next/link";

type Props = {
  pageIndex: number;
  numPages: number;
};

export const PageNation = ({ pageIndex, numPages }: Props) => {
  const prevIndexItems: JSX.Element[] = [];
  if (pageIndex < 7) {
    for (let i = pageIndex - 1; 0 < i; i--) {
      prevIndexItems.unshift(<PageNationItem key={i} index={i} />);
    }
  } else {
    const arr = [pageIndex - 1, pageIndex - 2, null, 2, 1];
    arr.forEach((i) => {
      if (i === null) {
        prevIndexItems.unshift(<li key={i}>...</li>);
      } else {
        prevIndexItems.unshift(<PageNationItem key={i} index={i} />);
      }
    });
  }

  const nextIndexItems: JSX.Element[] = [];
  if (numPages - pageIndex < 6) {
    for (let i = pageIndex + 1; i <= numPages; i++) {
      nextIndexItems.push(<PageNationItem key={i} index={i} />);
    }
  } else {
    const arr = [pageIndex + 1, pageIndex + 2, null, numPages - 1, numPages];
    arr.forEach((i) => {
      if (i === null) {
        nextIndexItems.push(<li key={i}>...</li>);
      } else {
        nextIndexItems.push(<PageNationItem key={i} index={i} />);
      }
    });
  }

  return (
    <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
      <li>
        <ul className="flex gap-3">{prevIndexItems}</ul>
      </li>
      <li>
        <span className="inline-block w-8 rounded border border-gray-400 bg-gray-100 py-1 text-center text-gray-400">
          {pageIndex}
        </span>
      </li>
      <li>
        <ul className="flex gap-3">{nextIndexItems}</ul>
      </li>
    </ul>
  );
};

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
