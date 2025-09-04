exports.passwordUpdated = (email, name) => {
  const now = new Date();

  // Format the date: 05 July 2025
  const date = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  // Format the time: 01:10 AM
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Changed - StudyQuest</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
        <td style="padding: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 1px;">
                StudyQuest
                </h1>
                <p style="color: #e8e8ff; margin: 10px 0 0 0; font-size: 16px;">
                Your Learning Journey Continues
                </p>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
                <div style="text-align: center; margin-bottom: 30px;">
                <div style="width: 80px; height: 80px; background-color: #4CAF50; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-size: 36px; font-weight: bold;">✓</span>
                </div>
                <h2 style="color: #333333; margin: 0; font-size: 24px; font-weight: 600;">
                    Password Successfully Changed
                </h2>
                </div>

                <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Hi <strong style="color: #333333;">${name}</strong>,
                </p>

                <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                We're writing to confirm that your StudyQuest account password has been successfully changed. This change was made on <strong style="color: #333333;">${date}</strong> at <strong style="color: #333333;">${time}</strong>.
                </p>

                <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <p style="color: #555555; font-size: 14px; line-height: 1.5; margin: 0;">
                    <strong style="color: #333333;">Security Tip:</strong> If you didn't make this change, please contact our support team immediately at 
                    <a href="mailto:support@studyquest.com" style="color: #667eea; text-decoration: none;">support@studyquest.com</a>
                </p>
                </div>

                <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                Your account security is important to us. We recommend using a strong, unique password and enabling two-factor authentication for additional protection.
                </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                <p style="color: #666666; font-size: 14px; line-height: 1.5; margin: 0 0 15px 0;">
                Thank you for choosing StudyQuest for your learning journey.
                </p>

                <div style="margin: 20px 0;">
                <a href="https://studyquest.com" style="color: #667eea; text-decoration: none; margin: 0 15px; font-size: 14px;">Website</a>
                <a href="https://studyquest.com/support" style="color: #667eea; text-decoration: none; margin: 0 15px; font-size: 14px;">Support</a>
                <a href="https://studyquest.com/privacy" style="color: #667eea; text-decoration: none; margin: 0 15px; font-size: 14px;">Privacy Policy</a>
                </div>

                <p style="color: #999999; font-size: 12px; line-height: 1.4; margin: 20px 0 0 0;">
                This email was sent to ${email}. If you have any questions, please contact us at 
                <a href="mailto:support@studyquest.com" style="color: #667eea; text-decoration: none;">support@studyquest.com</a>
                </p>

                <p style="color: #999999; font-size: 12px; margin: 10px 0 0 0;">
                © 2024 StudyQuest. All rights reserved.
                </p>
            </div>
            </div>
        </td>
        </tr>
    </table>
    </body>
    </html>`;
};
