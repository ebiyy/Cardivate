import { FileTextIcon } from "../Icon";
import { Item } from "./Item";
import { NEXTJS_LEARN_URL } from "./constants";

export const LearnItem = () => (
  <Item href={NEXTJS_LEARN_URL} target="_blank" rel="noopener noreferrer">
    <FileTextIcon />
    Learn
  </Item>
);
