"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/interface/post.interface";

interface PostCardProps {
  post: Post;
  onDelete: () => void;
}

export function PostCard({ post, onDelete }: PostCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        {post.image ? (
          <div className="relative h-48 w-full">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-48 bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">No image</p>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{post.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/edit/${post._id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
