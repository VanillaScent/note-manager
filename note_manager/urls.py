from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path(r'^.*$', include('frontend.urls')),
    path('api/', include('core.urls')),
    path('admin/', admin.site.urls),

]
