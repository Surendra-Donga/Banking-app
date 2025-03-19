import React from "react";
import { Loader2 } from "lucide-react";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        <span className="text-lg font-medium text-gray-700">Loading, please wait...</span>
      </div>
    </div>
  );
};

export default Loading;
