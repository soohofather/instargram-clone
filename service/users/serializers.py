from rest_framework import serializers

from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'pk',
            'email',
            'username',
            'profile',
            'description',
            'password',
            'updated',
        )

        # 
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }
    
    # User 모델 정의하면서 생성하는것을 재정의했기때문에
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    