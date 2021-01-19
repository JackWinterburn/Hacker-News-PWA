import { Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";
import { shortenURL } from "../utils/shortenURL";
import { getTimeFrom } from "../utils/getTimeFrom";
import { handleComments } from "../utils/handleComments";

function HackerNewsStory({ stories }: { stories: [] }) {
  return (
    <div>
      <Table
        style={{
          borderTop: "1px solid rgba(49, 151, 149, 0.3)",
          marginTop: "20px",
        }}
      >
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Time Posted</Th>
            <Th>By</Th>
            <Th>Comments</Th>
            <Th>Score</Th>
            <Th>URL</Th>
          </Tr>
        </Thead>

        <Tbody>
          {stories.map(
            (
              {
                by,
                id,
                time,
                title,
                kids,
                score,
                url,
              }: {
                by: string;
                id: number;
                time: number;
                title: string;
                kids: number[];
                score: number;
                url: string;
              },
              idx: number
            ) => (
              <Tr key={idx}>
                <Td>{title}</Td>
                <Td>{getTimeFrom(time)}</Td>
                <Td>{by}</Td>
                <Td>{handleComments(kids)}</Td>
                <Td>{score}</Td>
                <Td>
                  <Link color="teal.500" href={url} isExternal>
                    {shortenURL(url)}
                  </Link>
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </div>
  );
}

export default HackerNewsStory;
