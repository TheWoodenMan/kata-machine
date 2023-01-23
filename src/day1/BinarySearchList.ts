import { check } from "prettier";

export default function bs_list(haystack: number[], needle: number): boolean {
    // these are index numbers
    let lo = 0;
    let hi = haystack.length;

    // do first then check
    do {
        let mid = Math.floor(lo + (hi - lo) / 2);
        if (needle === haystack[mid]) {
            return true;
        } else if (needle > haystack[mid]) {
            // this needs to be + 1 because low values are inclusive, and high values are exclusive
            // e.g. mid has already been included in the conditional so we need to go +1 higher.
            lo = mid + 1;
        } else {
            hi = mid;
        }
    } while (lo < hi);

    // cover cases in which the array doesn't contain the target
    return false;
}
