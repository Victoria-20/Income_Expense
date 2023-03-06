from django.shortcuts import render
from django.views import View 
import json  
from django.http import JsonResponse
from django.contrib.auth.models import User
# Create your views here.

#username validation
class usernameValidationView(View):
    def post(self, request):
        data = json.loads(request.body.decode('utf-8'))
        username = data["username"]
        #check if username is alphanumeric
        if not str(username).isalnum():
            return JsonResponse({'Username_error': 'username should only contain alphanumeric'}, status=400)
        #if username exists
        if User.objects.filter(username=username).exists():
            return JsonResponse({'Username_error': 'username already in use'}, status=409)
        return JsonResponse({'username_valide': True})
       
    
class registrationView(View):
    def get(self, request):
        return render(request, 'authentication/register.html')