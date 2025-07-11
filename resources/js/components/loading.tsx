import { Atom } from 'react-loading-indicators';

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <Atom color="#FFFFFF" size="medium" text="" textColor="" />
        </div>
    );
}