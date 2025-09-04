exports.otpVerificationEmail = (email, otpCode) => {

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - StudyQuest</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 0;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                    
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 1px;">
                            StudyQuest
                        </h1>
                        <p style="color: #e8e8ff; margin: 10px 0 0 0; font-size: 16px;">
                            Verify Your Email Address
                        </p>
                    </div>

                    <div style="padding: 40px 30px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);">
                                <span style="color: white; font-size: 36px;">🔐</span>
                            </div>
                            <h2 style="color: #333333; margin: 0; font-size: 24px; font-weight: 600;">
                                Email Verification Required
                            </h2>
                        </div>

                        <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 25px; text-align: center;">
                            Hi <strong style="color: #667eea;"></strong>,
                        </p>

                        <p style="color: #555555; font-size: 16px; line-height: 1.6; margin-bottom: 30px; text-align: center;">
                            Thank you for signing up with StudyQuest! To complete your registration and secure your account, please verify your email address using the verification code below.
                        </p>

                        <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%); border: 2px solid #667eea; border-radius: 15px; padding: 30px; margin: 30px 0; text-align: center; box-shadow: 0 4px 20px rgba(102, 126, 234, 0.1);">
                            <p style="color: #333333; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
                                Your Verification Code
                            </p>
                            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; font-size: 36px; font-weight: bold; letter-spacing: 8px; padding: 20px; border-radius: 10px; margin: 15px 0; font-family: 'Courier New', monospace; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                                ${otpCode}
                            </div>
                            <p style="color: #666666; font-size: 14px; margin: 15px 0 0 0; line-height: 1.4;">
                                Enter this code in the verification field to activate your account
                            </p>
                        </div>

                        <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 25px 0;">
                            <div style="display: flex; align-items: flex-start;">
                                <div style="margin-right: 15px; flex-shrink: 0;">
                                    <span style="font-size: 20px;">⚠️</span>
                                </div>
                                <div>
                                    <p style="color: #856404; font-size: 14px; font-weight: 600;">
                                        Important Security Information:
                                    </p>
                                    <ul style="color: #856404; font-size: 14px; padding-left: 20px;">
                                        <li style="margin-bottom: 5px;">This code will expire in <strong>10 minutes</strong></li>
                                        <li style="margin-bottom: 5px;">Use this code only on the StudyQuest verification page</li>
                                        <li style="margin-bottom: 0;">Never share this code with anyone</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div style="text-align: center; margin: 30px 0;">
                            <p style="color: #666666; font-size: 14px; line-height: 1.6;">
                                If you didn't request this verification code, please ignore this email.<br>
                                Your account will remain unverified and no further action is required.
                            </p>
                        </div>

                        <p style="color: #555555; font-size: 16px; line-height: 1.6; margin: 20px 0; text-align: center;">
                            We're excited to have you join the StudyQuest learning community!
                        </p>
                    </div>

                    <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                        <div style="margin-bottom: 20px;">
                            <div style="width: 40px; height: 4px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin: 0 auto; border-radius: 2px;"></div>
                        </div>

                        <p style="color: #666666; font-size: 14px;">
                            This verification email was sent to <strong style="color: #333333;">${email}</strong>
                        </p>

                        <p style="color: #999999; font-size: 12px; line-height: 1.4; margin: 15px 0;">
                            For security reasons, this code </strong><br>
                            will expire in <strong>5 minutes</strong>
                        </p>

                        <div style="margin: 20px 0;">
                            <p style="color: #666666; font-size: 13px; margin: 0;">
                                Need help? Contact our support team at<br>
                                <strong style="color: #667eea;">support@studyquest.com</strong>
                            </p>
                        </div>

                        <p style="color: #999999; font-size: 12px; margin: 15px 0 0 0;">
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
