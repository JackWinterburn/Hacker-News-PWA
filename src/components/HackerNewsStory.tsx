import { Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { shortenURL } from "../utils/shortenURL";

function HackerNewsStory({ stories }: { stories: [] }) {
  return (
    <div>
      <Table variant="simple">
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
