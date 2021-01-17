import { Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";
import { shortenURL } from "../utils/shortenURL";

function HackerNewsStory({ stories }: { stories: [] }) {
  return (
    <div>
      <Table
        variant="simple"
        style={{
          border: "1px solid rgba(49, 151, 149, 0.3)",
          marginTop: "20px",
        }}
      >
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>By</Th>
            <Th>URL</Th>
          </Tr>
        </Thead>

        <Tbody>
          {stories.map(
            (
              { by, title, url }: { by: string; title: string; url: string },
              idx: number
            ) => (
              <Tr key={idx}>
                <Td>{title}</Td>
                <Td>{by}</Td>
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
