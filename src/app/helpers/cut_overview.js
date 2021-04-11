export function cut_overview(overview) {
    const lastPosition = overview.substring(0, 199).lastIndexOf(" ");
    return overview.substring(0, lastPosition).concat("...");
}