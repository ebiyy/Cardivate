import { WindowIcon } from "../Icon";
import { Item } from "./Item";
import { VERCEL_TEMPLATES_URL } from "./constants";

export const ExampleItem = () => (
  <Item href={VERCEL_TEMPLATES_URL} target="_blank" rel="noopener noreferrer">
    <WindowIcon />
    Examples
  </Item>
);
