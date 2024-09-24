import { Button } from "@/components/ui/button";
import { TaskCard } from "./components";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cardivate</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TaskCard
          title="タスク1"
          description="タスク1の説明"
          imageUrl="https://via.placeholder.com/300"
        />
        <TaskCard
          title="タスク2"
          description="タスク2の説明"
          imageUrl="https://via.placeholder.com/300"
        />
        <TaskCard
          title="タスク3"
          description="タスク3の説明"
          imageUrl="https://via.placeholder.com/300"
        />
      </div>
      <Button className="mt-4">新しいタスクを追加</Button>
    </div>
  );
}
