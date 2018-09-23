export const APIFY_CALL_ERROR_NAME = 'ApifyCallError';

/**
 * The class represents exceptions thrown
 * by the {@linkcode Apify#call|Apify.call()} function.
 *
 * @typedef {Object} ApifyCallError
 * @property {String} message
 *   Error message
 * @property {String} name
 *   Contains `ApifyCallError`
 * @property {ActorRun} run
 *   Object representing the failed actor run.
 */
export class ApifyCallError extends Error {
    constructor(run) {
        super(`The actor invoked by Apify.call() did not succeed (run ID: ${run.id})`);
        this.name = APIFY_CALL_ERROR_NAME;
        this.run = run;

        Error.captureStackTrace(this, ApifyCallError);
    }
}
