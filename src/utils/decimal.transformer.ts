export const DecimalTransformer = {
    to: (value: number | null): string | null => {
        return value !== null && value !== undefined ? value.toString() : null;
    },
    from: (value: string | null): number | null => {
        return value !== null && value !== undefined ? Number(value) : null;
    }
}