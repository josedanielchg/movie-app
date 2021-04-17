export default function runtime_parse(duration) {
    return `${parseInt(duration/60)}h ${parseInt(duration%60)}min`;
}