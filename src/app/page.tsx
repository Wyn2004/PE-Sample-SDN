import { CreatePostDialog, PostList, SearchAndSort } from "@/components";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <CreatePostDialog>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </CreatePostDialog>
      </div>

      <SearchAndSort />
      <PostList />
    </div>
  );
}
