import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VStack, Divider } from "@chakra-ui/react";
import getComments from "../api/getComments";

function Comments() {
  let { id }: { id: string } = useParams();
  let kidIDArr = id.split(",");
  const [commentsData, setCommentsData] = useState<any>([]);

  useEffect(() => {
    getComments(kidIDArr, setCommentsData);
  }, []);

  const generateHTML = (html: string) => {
    return { __html: html };
  };

  return (
    <VStack spacing="30px" margin="50px">
      <div>
        {commentsData.map((comment: string, idx: number) => {
          return (
            <>
              <div
                style={{
                  margin: "30px",
                }}
                dangerouslySetInnerHTML={generateHTML(comment)}
                key={idx}
              ></div>
              <Divider />
            </>
          );
        })}
      </div>
    </VStack>
  );
}

export default Comments;
