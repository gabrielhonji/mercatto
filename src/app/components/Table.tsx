export default function Table({ children } : { children: React.ReactNode }) {
    return (
        <div className="overflow-x-auto bg-white border rounded-lg">
            <table className="w-full border-collapse">
                {children}
            </table>
        </div>
    );
}

export function TableHeader({ children } : { children: React.ReactNode }) {
    return (
        <thead className="bg-neutral-50 border-b">
            <tr>
                {children}
            </tr>
        </thead>
    );
}

export function TableBody({ children } : { children: React.ReactNode }) {
    return (
        <tbody className="hover:bg-neutral-50">
            <tr>
                {children}
            </tr>
        </tbody>
    );
}

export function TableCell({ children } : { children: React.ReactNode }, { type } : { type: 'default' | 'quantity' | 'status' }) {
    return (
        <th className={`px-4 py-2 text-sm ${type === 'quantity' ? 'text-right' : ''} ${type === 'status' ? 'font-medium' : ''} text-neutral-700 border-b`}>
            {children}
        </th>
    );
}
