import { ExternalLink } from "lucide-react";

import { Button } from "./ui/button";

interface ICardWikiLinkProps {
  name: string;
  wikiLink: string;
}

const CardWikiLink = ({ name, wikiLink }: ICardWikiLinkProps) => {
  const nameLowerCase = name.toLowerCase();

  return (
    <Button asChild className="w-full" title={`More about ${nameLowerCase}`}>
      <a
        href={wikiLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 w-full justify-center"
      >
        <span>
          More about <span className="font-bold">{nameLowerCase}</span>
        </span>
        <ExternalLink className="w-5 h-5 z-0" />
      </a>
    </Button>
  );
};

export default CardWikiLink;
