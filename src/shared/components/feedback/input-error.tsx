export function InputError({ error }: { error?: string }) {
    if (!error) return null;
    return <p className="mt-1 text-sm text-destructive">{error}</p>;
}
