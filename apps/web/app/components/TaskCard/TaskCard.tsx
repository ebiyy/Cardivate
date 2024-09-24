import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface TaskCardProps {
  title: string;
  description: string;
  imageUrl: string; // 画像URLを追加
}

export function TaskCard({ title, description, imageUrl }: TaskCardProps) {
  return (
    <Card className="border border-black rounded-lg overflow-hidden bg-gray-100 shadow-md">
      <CardHeader className="relative text-center">
        <CardTitle className="text-xl font-bold mt-2">{title}</CardTitle>
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-auto mt-2"
          width={300}
          height={300}
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-base text-gray-800">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
