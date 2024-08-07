/**
 * Feedback Media, used to store the details of a feedback media
 */
export type FeedbackMedia = {
    /** Feeedback Media Id of the Feedback Media */
    feedbackMediaId: number;
    /** FeedbackId of the Feedback Media */
    feedbackId: number;
    /** Media url of the feedback */
    mediaUrl: string;
    /** Media type of the feedback */
    type: string;
}