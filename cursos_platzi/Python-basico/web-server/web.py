import requests

def get_categories():
    request = requests.get('https://api.escuelajs.co/api/v1/categories')
    print(request)
    print(request.text)
    

