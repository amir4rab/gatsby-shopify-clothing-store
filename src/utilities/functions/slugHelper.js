export default class SlugHelper {
    static makeSlug(input) {
        return input.toLowerCase().replaceAll(' ', '_');
    }
    static extractFromSlug(input) {
        return input.replaceAll('_', ' ');
    }
}