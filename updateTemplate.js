// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'us-east-1' });

// Create createTemplate params 
var params = {
    "Template": {
        "TemplateName": "RejectTemplate",
        "SubjectPart": "Document not valid",
        "TextPart": "Document not valid.\r\nThe document you uploaded '{{doc_name}}' was not valid.\r\nReason: {{admin_message}}.\r\nPlease click the button below to log back in and re-submit the corrected document.{{document_link}}'\r\nClick Here To Login and Re-Submit Document(s).\r\nIf you didn't sign up at Real Value Marketplace, simply ignore this e-mail.\r\nReal Value Marketplace, 1880 Century Park East, Suite #200, Los Angeles, CA 90067",
        "HtmlPart": "<table style='mso-table-lspace:0;mso-table-rspace:0;width:100%;background-color:#f6f6f6' border='0' cellpadding='0' cellspacing='0' class='body'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top'>&nbsp;</td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;Margin:0 auto;max-width:580px;padding:10px;width:580px' class='container'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px'><table style='border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%;background:#fff;border-radius:3px' class='main'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px' class='wrapper'><table style='border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top'><p style='font-family:sans-serif;font-size:16px;font-weight:700;margin:0;Margin-bottom:15px'>Document not valid</p><p style='font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px'>The document you uploaded '{{doc_name}}' was not valid.<br><br><strong> Reason: {{admin_message}}.</strong><br><br>Please click the button below to log back in and re-submit the corrected document.</p><table style='border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%;box-sizing:border-box' border='0' cellpadding='0' cellspacing='0' class='btn btn-primary'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px' align='left'><table style='border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:auto' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#5dc09c;border-radius:5px;text-align:center'><a href='{{document_link}}' style='display:inline-block;color:#fff;background-color:#5dc09c;border:solid 1px #5dc09c;border-radius:5px;box-sizing:border-box;cursor:pointer;text-decoration:none;font-size:14px;font-weight:700;margin:0;padding:12px 25px;text-transform:capitalize;border-color:#5dc09c' target='_blank'>Click Here To Login and Re-Submit Document(s)</a></td></tr></tbody></table></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:400;margin:0;Margin-bottom:15px'>If you didn't sign up at Real Value Marketplace, simply ignore this e-mail.</p></td></tr></tbody></table></td></tr></tbody></table><div class='footer' style='clear:both;Margin-top:10px;text-align:center;width:100%'><table style='border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%' border='0' cellpadding='0' cellspacing='0'><tbody><tr><td style='font-family:sans-serif;vertical-align:top;padding-bottom:10px;padding-top:10px;font-size:12px;color:#999;text-align:center' class='content-block'><span class='apple-link' style='color:#999;font-size:12px;text-align:center'>Real Value Marketplace, 1880 Century Park East, Suite #200, Los Angeles, CA 90067</span></td></tr></tbody></table></div></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top'>&nbsp;</td></tr></tbody></table>"
    }
}
// Create the promise and SES service object
var templatePromise = new AWS.SES({ apiVersion: '2010-12-01' }).updateTemplate(params).promise();

// Handle promise's fulfilled/rejected states
templatePromise.then(
    function (data) {
        console.log(data);
    }).catch(
        function (err) {
            console.log(err)
        }
    )