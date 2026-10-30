import { useState } from "react";
import Dispatch_table from "../dispatch/Dispatch_table";

export default function useDispatchError() {
    const [error, setError] = useState<string | null>(null);

    const DispatchError = async (type: string): Promise<void> => {
        if (!Dispatch_table) {
            setError("Missing Critical Information");
            return;
        }

        // Add your additional dispatch logic here using the 'type' parameter
    };

    return { error, DispatchError };
}
