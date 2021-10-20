from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from os import getenv
from flask import jsonify


def sendMail():
    message_email = Mail(
    from_email='drask390@gmail.com',
    to_emails='cediozamisena.edu.co',
    subject='Sending with Twilio SendGrid is Fun',
    html_content='<strong>and easy to do anywhere, even with Python</strong>')
    try:
        sg = SendGridAPIClient(getenv('SENDGRID_API_KEY'))
        response = sg.send(message_email)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception:
        print("Problem email")

    
