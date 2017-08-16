from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect


# Create your views here.

@login_required
def index(request):
    return render(request, 'index.html')

def login(request):
    if request.method == 'POST':
        print(request.POST)
        username = request.POST['username']
        password = request.POST['pwd']
        print(username)
        print(password)
        user = auth.authenticate(username=username, password=password)
        if user is not None and user.is_active:
            auth.login(request, user)
            return HttpResponseRedirect("/")
        else:
            return render(request, 'auth.html', {'error': 'wrong password or username'})
    context = {

    }
    return render(request, 'auth.html', context)