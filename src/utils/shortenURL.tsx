import { ExternalLinkIcon } from "@chakra-ui/icons";

export const shortenURL = (url: string) => {
  if (url === undefined) {
    return "No url";
  }
  let sliceIdx = url.indexOf("/", "https://".length);
  if (sliceIdx === -1) {
    return (
      <div>
        {url}
        <ExternalLinkIcon mx="2px" />
      </div>
    );
  }
  let shortenedURL = url.substr(
    "https://".length,
    sliceIdx - "https://".length
  );
  return (
    <div>
      {shortenedURL}
      <ExternalLinkIcon mx="2px" />
    </div>
  );
};
