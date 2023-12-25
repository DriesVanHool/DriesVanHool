export function dateToDateShort(dateString: string | null) {
    const date = dateString?new Date(dateString):new Date()
    return date.toLocaleDateString('nl-BE', { month: 'short', day: 'numeric', year: 'numeric' }).toString()
}