
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Resource {
  name: string;
  loaded: boolean;
}

interface LoadingProgressProps {
  progress: number;
  currentLoadingItem: string;
  resources: Resource[];
}

export function LoadingProgress({ progress, currentLoadingItem, resources }: LoadingProgressProps) {
  return (
    <div className="w-full mb-10">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">
          {currentLoadingItem}
        </span>
        <span className="text-sm font-medium text-gray-300 farsi-numbers">
          {progress}%
        </span>
      </div>
      
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-arminred-600 to-arminred-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-2">
        {resources.map((resource, index) => (
          <div 
            key={index}
            className={cn(
              "flex items-center gap-2 text-xs px-3 py-2 rounded-lg",
              resource.loaded ? "bg-arminred-500/10 text-arminred-400" : "bg-gray-800/50 text-gray-500"
            )}
          >
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                resource.loaded ? "bg-arminred-500" : "bg-gray-600"
              )}
            />
            {resource.name}
          </div>
        ))}
      </div>
    </div>
  );
}
