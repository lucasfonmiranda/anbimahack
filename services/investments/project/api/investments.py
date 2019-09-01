from flask import Blueprint
from flask_restful import Resource, Api
from project.api.resource.resource import TestRoute


investments_blueprint = Blueprint('investments', __name__)
api = Api(investments_blueprint)


class UsersPing(Resource):
    def get(self):
        return {
        'status': 'success',
        'message': 'pong!'
    }


api.add_resource(UsersPing, '/users/ping')
api.add_resource(TestRoute, '/test')