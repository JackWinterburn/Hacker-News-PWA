import { Link, Tooltip } from "@chakra-ui/react";

export const handleComments = (kids: number[] | undefined) => {
  if (kids === undefined) {
    return (
      <Tooltip label="This post has no comments yet">
        <div style={{ color: "#545454", cursor: "default" }}>No comments</div>
      </Tooltip>
    );
  } else {
    return (
      <Link
        color="teal.500"
        href={`/comments/${kids}`}
      >{`${kids.length} comments`}</Link>
    );
  }
};
