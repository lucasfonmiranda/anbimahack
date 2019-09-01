
from flask_restful import Resource, reqparse
from flask import request
from project.api.models import Investments
from project import db



class TestRoute(Resource):
    def post(self):
        user_one = Investments(
            email = 'teste'
        )

        try:
            db.session.add(user_one)
            db.session.commit()

            return {'message': 'sucess'}, 200
        except ValueError:
            return ValueError    