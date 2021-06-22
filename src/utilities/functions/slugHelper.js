export default class SlugHelper {
    static makeSlug(input) {
        return input.toLowerCase().replace(/ /g, '_');
    }
    static extractFromSlug(input) {
        return input.replace(/_/g, ' ');
    }
}