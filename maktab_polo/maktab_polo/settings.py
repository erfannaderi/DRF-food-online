"""
Django settings for maktab_polo project.

Generated by 'django-admin startproject' using Django 5.0.1.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""
import os
from pathlib import Path

import environ
from decouple import config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env()
environ.Env.read_env()

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', cast=bool)

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'admin_interface',
    'colorfield',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'drf_spectacular',
    'django_filters',
    'main',
    'accounts',
    'vendor',
    'client',
    'menu',
    'market_place',
    'orders',
]

#  admin customization
X_FRAME_OPTIONS = "SAMEORIGIN"
SILENCED_SYSTEM_CHECKS = ["security.W019"]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    # 'accounts.middleware.JWTMiddleware',
]

ROOT_URLCONF = 'maktab_polo.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'maktab_polo.wsgi.application'

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/
LANGUAGES = (
    ('fa', 'Persian'),
    ('en', 'English'),
)
DEFAULT_LANGUAGE = 2
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Tehran'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
AUTH_USER_MODEL = 'accounts.User'

REST_FRAMEWORK = {
    # 'DEFAULT_PERMISSION_CLASSES': [
    #     'rest_framework.permissions.IsAuthenticated',
    # # ],
    # 'DEFAULT_AUTHENTICATION_CLASSES': [
    #     'rest_framework_simplejwt.authentication.JWTAuthentication',
    # ],
    'DEFAULT_PAGINATION_CLASS': 'main.pagination.CustomPagination',
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination', # default
    'PAGE_SIZE': 4,
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}
SPECTACULAR_SETTINGS = {
    'TITLE': 'DRF_foodonline',  # .\manage.py spectacular --file schema.yml
}
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
]
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:9000",
]

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            # "SOCKET_CONNECT_TIMEOUT": 30 * 60,
            # "SOCKET_TIMEOUT": 30 * 60,
        },
        "admin_interface": {
            "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
            "TIMEOUT": 60 * 5,
        },
    }
}

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Define the MEDIA_URL setting
MEDIA_URL = '/media/'

SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = "default"
# DEFAULT_PAGINATION_CLASS = 'main.pagination.CustomPagination'

# redis wsl
# $ sudo service redis start
# $ telnet 127.0.0.1 6379 # to test connection to redis $ quit to exit it

# ACCOUNT_EMAIL_VERIFICATION = 'mandatory'  # or 'optional'
# ACCOUNT_EMAIL_CONFIRMATION_EXPIRE_DAYS = 7
# email configurations
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
# EMAIL_USE = config('EMAIL_USE', default=True, cast=bool)
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = config("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD")
# EMAIL_USE_TLS = config('EMAIL_USE', cast=bool)
DEFAULT_EMAIL = "Online Food <django.erfan@gmail.com>"

GOOGLE_PLACES_KEY = config('GOOGLE_PLACES_KEY')
# zarinpal url
# https://zarinp.al/zp2231468
