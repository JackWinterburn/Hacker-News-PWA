import { Tooltip } from "@chakra-ui/react";

export const shortenURL = (url: string) => {
  let leftSliceIdx = url.startsWith("https://")
    ? "https://".length
    : "http://".length;

  if (url === undefined) {
    return (
      <Tooltip hasArrow label="This post does not have a link attached">
        "No url"
      </Tooltip>
    );
  }
  let sliceIdx = url.indexOf("/", "https://".length);
  if (sliceIdx === -1) {
    let shortenedURL = url.slice(leftSliceIdx);
    return (
      <Tooltip hasArrow label={url}>
        {shortenedURL}
      </Tooltip>
    );
  }
  let shortenedURL = url.substr(leftSliceIdx, sliceIdx - "https://".length);
  return (
    <Tooltip hasArrow label={url}>
      {shortenedURL}
    </Tooltip>
  );
};
