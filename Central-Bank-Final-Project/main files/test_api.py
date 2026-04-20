import requests
import json

headers = {"key": "82gbZpEWVzTcL5qXB+kSKCes7XbqdNxqKjQeDgdnJX0=", "Content-Type": "application/json", "User-Agent": "PostmanRuntime/7.37.0"}

print("Test 1: String Payload")
try:
    res = requests.post("http://encr-decr.iserveu.online/encr", headers=headers, data=json.dumps("upi://pay?pa=Ankita"))
    print(res.status_code, res.text)
except Exception as e:
    print(e)
    
print("Test 2: Object Payload")
try:
    res = requests.post("http://encr-decr.iserveu.online/encr", headers=headers, data=json.dumps({"mobileNo": "123"}))
    print(res.status_code, res.text)
except Exception as e:
    print(e)
