"""
URL configuration for maktab_polo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView  # jwt views
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from accounts.admin import address_admin_site

urlpatterns = [
    path('admin/', admin.site.urls),
    path('address_admin/', address_admin_site.urls),
    # swagger api
    path('API/Schema/', SpectacularAPIView.as_view(), name='Schema'),
    path('API/Schema/Docs', SpectacularSwaggerView.as_view(url_name='Schema')),
    # path('api/', include('main.urls')),
    path('API/Menu/', include('menu.urls')),
    path('API/', include('accounts.urls')),
    path('API/MarketPlace/', include('market_place.urls')),
    path('API/Vendor/', include('vendor.urls')),
    path('API/Order/', include('orders.urls')),
    path('api-ath/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/', include('authentication.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.index_title = "food-online"
admin.site.site_header = "Food Online Admin"
admin.site.site_title = "Food Online Admin Panel"
