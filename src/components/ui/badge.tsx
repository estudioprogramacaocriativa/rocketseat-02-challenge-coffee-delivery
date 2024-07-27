export function Badge({children}: {children: string}) {
    return (
        <span className="bg-yellow-light text-yellow-dark text-xs font-bold rounded-full px-2 py-1">
            {children}
        </span>
    )
}