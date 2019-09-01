from flask import Blueprint
from flask_restful import Resource, Api
from project.api.resource.resource import  CreateInvestment, CreateFound, CreateClient


investments_blueprint = Blueprint('investments', __name__)
api = Api(investments_blueprint)


api.add_resource(CreateInvestment, '/investments/createInvestments')
api.add_resource(CreateFound, '/investments/createFound')
api.add_resource(CreateClient, '/investments/createClient')