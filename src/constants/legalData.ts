export interface Section {
  title: string;
  text?: string;
  list?: string[];
  subsections?: Array<{
    title: string;
    list: string[];
  }>;
  footer?: string;
}

export interface LegalDataItem {
  title: string;
  description?: string;
  sections?: Section[];
  items?: Array<{
    question: string;
    answer: string;
  }>;
  text?: string;
  list?: string[];
  footer?: string;
  info?: Record<string, string>;
}

export const legalData: Record<string, LegalDataItem> = {
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is M&U?",
        answer: "M&U (Me & You) is a premium dating and social discovery application designed to help people connect, chat, and build meaningful relationships through real-time discovery."
      },
      {
        question: "Who can use the app?",
        answer: "You must be 18 years or older to create an account and use our services. By registering, you confirm that you meet this legal age requirement."
      },
      {
        question: "How does the matching system work?",
        answer: "Our matching system allows users to discover nearby matches and express interest. When two users mutually express interest, a match is created."
      },
      {
        question: "How do you ensure safety?",
        answer: "We use a combination of automated systems, human moderation, and age verification to maintain a safe environment for all users."
      },
      {
        question: "Is my personal information safe?",
        answer: "Yes. We implement industry-standard security measures to protect your personal data from unauthorized access."
      }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    description: "Effective Date: March 12, 2026 | Last Updated: March 12, 2026",
    sections: [
      {
        title: "Introduction",
        text: "M&U (Me & You) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website and mobile application."
      },
      {
        title: "Information We Collect",
        text: "We may collect the following types of information:",
        subsections: [
          {
            title: "Account Information",
            list: ["Name", "Email address", "Phone number", "Date of birth", "Gender"]
          },
          {
            title: "Profile Information",
            list: ["Photos", "Bio or personal description", "Interests and preferences"]
          },
          {
            title: "Usage Information",
            list: ["Device information", "IP address", "App usage activity", "Log data"]
          }
        ]
      },
      {
        title: "Location Data",
        text: "To help users discover nearby matches, we may collect approximate location information."
      },
      {
        title: "How We Use Your Information",
        text: "We use your information to:",
        list: [
          "Provide and improve our services",
          "Match you with other users",
          "Ensure platform safety",
          "Prevent fraud and abuse",
          "Send notifications and updates"
        ]
      },
      {
        title: "Data Sharing",
        text: "We do not sell your personal data. Information may be shared with:",
        list: [
          "Service providers supporting the platform",
          "Legal authorities when required by law",
          "Security and fraud prevention services"
        ]
      },
      {
        title: "Data Security",
        text: "We implement industry-standard security measures to protect user data from unauthorized access, misuse, or disclosure."
      },
      {
        title: "Data Retention",
        text: "We retain user information as long as necessary to operate our services or comply with legal obligations."
      },
      {
        title: "User Rights",
        text: "Users may request to:",
        list: [
          "Access their data",
          "Correct inaccurate data",
          "Delete their account and personal information"
        ],
        footer: "Requests can be sent to support@muapp.com."
      },
      {
        title: "Updates",
        text: "We may update this policy from time to time. Continued use of the platform indicates acceptance of the updated policy."
      }
    ]
  },
  health: {
    title: "Consumer Health Data Privacy Policy",
    description: "This policy applies to health-related data that may be collected during use of the M&U platform.",
    sections: [
      {
        title: "Types of Data",
        text: "Health-related data may include:",
        list: [
          "Sexual orientation preferences",
          "Gender identity",
          "Dating preferences",
          "Wellness-related profile details"
        ]
      },
      {
        title: "Use of Health Data",
        text: "We use this data only to:",
        list: [
          "Improve matching algorithms",
          "Provide personalized experiences",
          "Maintain user safety"
        ]
      },
      {
        title: "Data Protection",
        text: "Health data is treated as sensitive information and is protected with enhanced security measures."
      },
      {
        title: "Data Sharing",
        text: "M&U does not sell or share health data with advertisers. Data may only be shared with platform service providers or legal authorities when legally required."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    description: "By using the M&U platform, you agree to these Terms of Service.",
    sections: [
      {
        title: "Eligibility",
        text: "Users must be at least 18 years old to use the platform."
      },
      {
        title: "User Responsibilities",
        text: "Users agree to:",
        list: [
          "Provide accurate information",
          "Respect other users",
          "Follow community guidelines",
          "Avoid illegal activities"
        ]
      },
      {
        title: "Account Security",
        text: "Users are responsible for maintaining the confidentiality of their login credentials."
      },
      {
        title: "Prohibited Activities",
        text: "The following are strictly prohibited:",
        list: [
          "Harassment or abuse",
          "Fake profiles",
          "Impersonation",
          "Posting illegal or explicit content"
        ]
      },
      {
        title: "Termination",
        text: "M&U reserves the right to suspend or terminate accounts that violate these terms."
      },
      {
        title: "Disclaimer",
        text: "M&U does not guarantee compatibility or successful relationships between users."
      },
      {
        title: "Limitation of Liability",
        text: "M&U is not responsible for damages resulting from interactions between users."
      }
    ]
  },
  cookies: {
    title: "Cookie Policy",
    description: "M&U uses cookies and similar technologies to improve user experience.",
    text: "Cookies are small files stored on your device that help websites remember user preferences and activity.",
    sections: [
      {
        title: "Types of Cookies Used",
        subsections: [
          {
            title: "Essential Cookies",
            list: ["Required for the platform to function properly."]
          },
          {
            title: "Analytics Cookies",
            list: ["Help us understand how users interact with the platform."]
          },
          {
            title: "Preference Cookies",
            list: ["Store user settings and preferences."]
          }
        ]
      },
      {
        title: "Managing Cookies",
        text: "Users can manage or disable cookies through their browser settings."
      }
    ]
  },
  ip: {
    title: "Intellectual Property Policy",
    description: "All content on the M&U platform is protected by intellectual property laws.",
    sections: [
      {
        title: "Ownership",
        text: "The following belong to M&U:",
        list: [
          "App design and interface",
          "Logos and branding",
          "Software code",
          "Platform features"
        ]
      },
      {
        title: "User Content",
        text: "Users retain ownership of the content they upload but grant M&U a license to use it for operating the platform."
      },
      {
        title: "Restrictions",
        text: "Users may not:",
        list: [
          "Copy platform code or design",
          "Use the M&U brand without permission",
          "Distribute platform content without authorization"
        ]
      }
    ]
  },
  accessibility: {
    title: "Accessibility Statement",
    description: "M&U is committed to providing an accessible digital experience for all users. We aim to comply with accessibility standards such as WCAG 2.1.",
    sections: [
      {
        title: "Accessibility Features",
        text: "Our platform supports:",
        list: [
          "Screen readers",
          "Keyboard navigation",
          "Clear visual design",
          "Text readability improvements"
        ]
      },
      {
        title: "Continuous Improvement",
        text: "Accessibility is an ongoing effort and we regularly review the platform to improve usability.",
        footer: "Users experiencing accessibility issues may contact support@muapp.com."
      }
    ]
  },
  community: {
    title: "Community Guidelines",
    description: "M&U is designed to foster respectful and meaningful connections. Users must follow these guidelines.",
    sections: [
      {
        title: "Respectful Behavior",
        text: "Users must not engage in:",
        list: [
          "Harassment",
          "Hate speech",
          "Bullying",
          "Threats or violence"
        ]
      },
      {
        title: "Authentic Profiles",
        text: "Users must create genuine profiles and use real photos. Fake profiles and impersonation are not allowed."
      },
      {
        title: "Prohibited Content",
        text: "The following content is not allowed:",
        list: [
          "Nudity or Pornographic material",
          "Illegal activities",
          "Hate speech",
          "Scam-related content"
        ],
        footer: "Violations may result in account suspension or permanent removal."
      }
    ]
  },
  refund: {
    title: "Refund & Subscription Policy",
    description: "M&U may offer premium subscription plans including weekly, monthly, and quarterly plans.",
    sections: [
      {
        title: "Auto-Renewal",
        text: "Subscriptions automatically renew unless canceled before the billing period ends."
      },
      {
        title: "Cancellation",
        text: "Users can cancel subscriptions through App Store settings, Google Play settings, or Account settings."
      },
      {
        title: "Refunds",
        text: "Purchases are generally non-refundable except in cases such as billing errors or duplicate charges. Refund requests must be submitted within 7 days of purchase."
      }
    ]
  },
  safety: {
    title: "Safety Tips",
    description: "User safety is a priority for M&U.",
    sections: [
      {
        title: "Protect Personal Information",
        text: "Avoid sharing:",
        list: [
          "Home address",
          "Financial details",
          "Government IDs"
        ]
      },
      {
        title: "Meet Safely",
        text: "If meeting someone in person:",
        list: [
          "Meet in a public place",
          "Inform a friend or family member",
          "Arrange your own transportation"
        ]
      },
      {
        title: "Avoid Money Requests",
        text: "Never send money to someone you meet online."
      }
    ]
  },
  age: {
    title: "Age Verification Policy",
    description: "M&U is intended only for users aged 18 and above.",
    sections: [
      {
        title: "Verification Methods",
        text: "We may use:",
        list: [
          "Mobile verification",
          "Photo verification",
          "Identity checks"
        ]
      },
      {
        title: "Underage Accounts",
        text: "Accounts belonging to users under 18 will be removed immediately. Users may report suspected underage accounts."
      }
    ]
  },
  moderation: {
    title: "Content Moderation Policy",
    description: "M&U actively moderates platform content to maintain a safe environment.",
    sections: [
      {
        title: "Moderated Content",
        text: "Content moderation applies to:",
        list: [
          "Profile photos",
          "Messages",
          "Usernames",
          "Uploaded media"
        ]
      },
      {
        title: "Moderation Methods",
        text: "We use both automated systems and human review teams."
      },
      {
        title: "Enforcement",
        text: "Violations may result in content removal, account suspension, or permanent bans. Users may appeal moderation decisions by contacting support."
      }
    ]
  },
  contact: {
    title: "Contact Information",
    description: "For inquiries related to support, privacy, or legal matters, contact:",
    info: {
      support: "support@muapp.com",
      privacy: "privacy@muapp.com",
      legal: "legal@muapp.com"
    }
  }
};
