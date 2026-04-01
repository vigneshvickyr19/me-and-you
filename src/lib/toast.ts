import { toast } from "sonner";

/**
 * Standardized toast notifications for consistent UI/UX across the platform.
 * Senior-level practice to centralize messaging and styling logic.
 */
export const showRateLimitToast = () => {
  toast.error("Access Restricted", {
    description: "You've already sent a message. Please wait 24 hours.",
    duration: 5000,
  });
};

export const showSuccessToast = (message: string) => {
  toast.success("Success", {
    description: message,
  });
};

export const showErrorToast = (title: string, message: string) => {
  toast.error(title, {
    description: message,
  });
};
