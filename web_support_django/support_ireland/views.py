from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    # return HttpResponse("<h2>Hello, world!!!!!</h2>")
    return render(request, "support_ireland/index.html")
