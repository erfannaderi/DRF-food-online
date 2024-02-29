import jwt
from django.conf import settings
from django.contrib.auth.models import User
from django.http import JsonResponse

class JWTMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if 'HTTP_AUTHORIZATION' in request.META:
            jwt_token = request.META['HTTP_AUTHORIZATION'].split(' ')[1]
            try:
                payload = jwt.decode(jwt_token, settings.SECRET_KEY, algorithms=['HS256'])
                user = User.objects.get(id=payload['id'])
                request.user = user
            except jwt.ExpiredSignatureError:
                return JsonResponse({'error': 'Token has expired'}, status=401)
            except jwt.InvalidTokenError:
                return JsonResponse({'error': 'Invalid token'}, status=401)

        response = self.get_response(request)
        return response
