import requests

access_token = "Access-Token"
api_url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

headers ={"Authorization": "Bearer %s" % access_token}

request ={    
   "BusinessShortCode": "174379",    
   "Password": "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",    
   "Timestamp":"20160216165627",    
   "TransactionType": "CustomerPayBillOnline",    
   "Amount": "1",    
   "PartyA":"600990",    
   "PartyB":"600000",    
   "PhoneNumber":"254712785655",    
   "CallBackURL": "https://fullstackdjango.com/lipanampesa/",    
   "AccountReference":"Test001",    
   "TransactionDesc":"Clear Liquor Bills",
}

response = requests.post(api_url, json=request, headers=headers)

print(response.text)