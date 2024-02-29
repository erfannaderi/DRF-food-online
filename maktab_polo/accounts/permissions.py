from rest_framework import permissions


class IsAdminOrReadOnly(permissions.IsAdminUser):
    def has_permission(self, request, view):
        admin_permission = super().has_permission(request, view)
        return request.method == 'GET' or admin_permission


class CustomPermission1(permissions.BasePermission):
    message = 'Permission denied for CustomPermission1'

    def has_permission(self, request, view):
        return request.user.is_superuser


class CustomPermission2(permissions.BasePermission):
    message = 'Permission denied for CustomPermission2'

    def has_permission(self, request, view):
        return request.user.groups.filter(name='Managers').exists()


class CustomPermission3(permissions.BasePermission):
    message = 'Permission denied for CustomPermission3'

    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.has_perm('app.can_view_data')


class CustomObjectPermission1(permissions.BasePermission):
    message = 'Permission denied for CustomObjectPermission1'

    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user or request.user.is_staff


class CustomObjectPermission2(permissions.BasePermission):
    message = 'Permission denied for CustomObjectPermission2'

    def has_object_permission(self, request, view, obj):
        return obj.is_public or obj.allowed_users.filter(id=request.user.id).exists() or request.user.has_perm(
            'app.can_access_object')


class CustomMethodPermission(permissions.BasePermission):
    message = 'Permission denied for CustomMethodPermission'

    def has_permission(self, request, view, obj=None):
        if request.method == 'POST':
            return request.user.is_authenticated and request.user.has_perm('app.add_model')
        elif request.method == 'PUT':
            return request.user.is_authenticated and (
                    request.user == obj.owner or request.user.has_perm('app.change_model'))
        elif request.method == 'DELETE':
            return request.user.is_authenticated and (request.user == obj.owner or request.user.is_staff)
        else:
            return True
