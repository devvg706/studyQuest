exports.enrollmentConfirmationEmailTemplate = (courseName,username, coursePrice) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Enrollment Confirmation</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        padding: 20px !important;
      }
      .header h1 {
        font-size: 24px !important;
      }
      .content h2 {
        font-size: 20px !important;
      }
      .cta-button {
        padding: 12px 20px !important;
        font-size: 14px !important;
      }
    }
  </style>
</head>
<body style="margin:0; padding:0; font-family: 'Helvetica Neue', sans-serif; background-color:#f2f4f8;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center">
        <table class="container" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1); overflow:hidden; margin:40px auto;">
          
          <!-- Header -->
          <tr>
            <td class="header" style="background:linear-gradient(135deg,#667eea,#764ba2); padding:30px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:28px;">StudyQuest</h1>
              <p style="color:#e0e0ff; font-size:16px; margin-top:8px;">You're officially enrolled! 🎉</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class="content" style="padding: 30px;">
              <div style="text-align:center;">
                <div style="width:70px; height:70px; background-color:#4CAF50; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; margin-bottom:20px;">
                  <span style="font-size:36px; color:white;">✅</span>
                </div>
                <h2 style="font-size:22px; color:#333333; margin:10px 0;">Enrollment Successful</h2>
              </div>

              <p style="font-size:16px; color:#555555; line-height:1.6;">Hi <strong style="color:#667eea;">${username}</strong>,</p>
              <p style="font-size:16px; color:#555555; line-height:1.6;">
                You've successfully enrolled in the course:
              </p>

              <div style="background-color:#f1f3f5; border-left:4px solid #667eea; padding:15px 20px; border-radius:6px; margin:20px 0;">
                <p style="margin:0; font-size:16px; color:#333;">
                  <strong>Course:</strong> ${courseName}<br/>
                  <strong>Price:</strong> ₹${coursePrice}
                </p>
              </div>

              <p style="font-size:15px; color:#666666; line-height:1.6;">
                You now have access to all course materials, lessons, and community support.
              </p>

              <div style="text-align:center; margin:30px 0;">
                <a href="https://studyquest.com/dashboard/courses"
                   class="cta-button"
                   style="background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; text-decoration:none; padding:15px 35px; border-radius:30px; font-size:16px; font-weight:600; display:inline-block;">
                  Go to My Course
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9f9f9; padding:20px 30px; text-align:center;">
              <p style="font-size:14px; color:#666;">
                Need help? Contact us at
                <a href="mailto:support@studyquest.com" style="color:#667eea; text-decoration:none;">support@studyquest.com</a>
              </p>
              <p style="font-size:12px; color:#999;">
                © 2025 StudyQuest. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
