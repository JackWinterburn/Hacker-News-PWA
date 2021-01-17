import { ExternalLinkIcon } from "@chakra-ui/icons";

export const shortenURL = (url: string) => {
  if (url === undefined) {
    return "No url";
  }
  let sliceIdx = url.indexOf("/", "https://".length);
  let shortenedURL = url.substr(0, sliceIdx);
  return (
    <div>
      {shortenedURL}
      <ExternalLinkIcon mx="2px" />
    </div>
  );
};
