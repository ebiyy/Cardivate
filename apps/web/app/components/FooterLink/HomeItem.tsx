import { GlobeIcon } from "../Icon";
import { Item } from "./Item";
import { NEXTJS_HOME_URL } from "./constants";

export const HomeItem = () => (
  <Item href={NEXTJS_HOME_URL} target="_blank" rel="noopener noreferrer">
    <GlobeIcon />
    Go to nextjs.org →
  </Item>
);
