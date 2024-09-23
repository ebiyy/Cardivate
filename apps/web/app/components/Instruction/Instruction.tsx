import { CodeSnippet } from "@/ui";
import { List } from "./List";
import { ListItem } from "./ListItem";

export const Instruction = () => (
  <List>
    <ListItem>
      Get started by editing <CodeSnippet>app/page.tsx</CodeSnippet>
    </ListItem>
    <ListItem>Save and see your changes instantly.</ListItem>
  </List>
);
