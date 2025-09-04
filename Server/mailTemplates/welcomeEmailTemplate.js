exports.welcomeEmailTemplate = (email,name) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to StudyQuest</title>
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
                            Your Learning Journey Starts Here
                        </p>
                    </div>

                    <!-- Main Content -->
                    <div style="padding: 40px 30px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 36px;">🎉</span>
                            </div>
                            <h2 style="color: #333333; margin: 0; font-size: 28px; font-weight: 600;">
                                Welcome to StudyQuest!
                            </h2>
                        </div>

                        <p style="color: #555555; font-size: 18px; line-height: 1.6; margin-bottom: 25px; text-align: center;">
                            Hi <strong style="color: #667eea;">${name}</strong>, we're thrilled to have you join our learning community! 🚀
                        </p>

                        <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                            You've just taken the first step towards an amazing learning journey. StudyQuest is designed to help you achieve your educational goals with interactive courses, personalized learning paths, and a supportive community.
                        </p>

                        <!-- (rest of the content remains unchanged) -->

                        <!-- Footer -->
                        <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                            <p style="color: #666666; font-size: 14px; line-height: 1.5; margin: 0 0 15px 0;">
                                Welcome to the StudyQuest family! We can't wait to see what you'll achieve.
                            </p>

                            <!-- Social & Links section... -->

                            <p style="color: #999999; font-size: 12px; line-height: 1.4; margin: 20px 0 0 0;">
                                This email was sent to ${email}. You're receiving this because you recently created a StudyQuest account.<br>
                                If you have any questions, please contact us at 
                                <a href="mailto:support@studyquest.com" style="color: #667eea; text-decoration: none;">support@studyquest.com</a>
                            </p>

                            <p style="color: #999999; font-size: 12px; margin: 10px 0 0 0;">
                                © 2024 StudyQuest. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>`;
};
