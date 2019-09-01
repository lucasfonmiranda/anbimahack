
import os
from flask_restful import Resource, reqparse
from flask import request
from project.api.models import Investments, Found, Clients, Contract
from project import db
from uuid import uuid4
import requests 
# from project.api.utils.utils import create_document

class CreateInvestment(Resource):
    def post(self):
        data = request.get_json()

        current_investment = Investments(
            email = data['email'],
            name = data['name'],
            cnpj = data['cnpj']
        )

        try:
            db.session.add(current_investment)
            db.session.commit()

            return {'message': 'success'}
        except ValueError:
            return ValueError, 500    

class CreateFound(Resource):
    def post(self):
        data = request.get_json()

        current_found = Found(
            name = data['name'],
            cnpj = data['cnpj']
        )

        try:
            db.session.add(current_found)
            db.session.commit()

            return {'message': 'success'}, 200
        except ValueError:
            return ValueError, 500

class CreateClient(Resource):
    def post(self):
        data = request.get_json()   
        
        check_investments = Investments.query.filter_by(name=data['name_investment']).first()
        check_found = Found.query.filter_by(name=data['name_found']).first()

        current_client = Clients(
            name = data['name'],
            email = data['email'],
            cpf=data['cpf'],
            id_investments= check_investments.id,
            quant_cotas=data['quant_cotas'],
            id_found= check_found.id
        )

        try:
            db.session.add(current_client)
            db.session.commit()

            return {'message': 'success'}, 200
        except ValueError:
            return ValueError, 500    

# class CreateContract(Resource):
#     def post(self):
#         data = request.get_json()

#         cedente_data = data['cedente']
#         cessionario_data = data['cessionario']
#         current_client = data['name']

#         cedente = Investments.query.filter_by(name=cedente_data).first()
#         cessionario = Investments.query.filter_by(name=cessionario_data).first()
#         client = Clients.query.filter_by(name=current_client).first()

#         data_cedente = {
#             'data': {
#                 [ced.to_json() for ced in cedente]
#             }
#         }

#         data_cessionario = {
#             'data': {
#                 [ces.to_json() for ces in cessionario]
#             }
#         }

#         data_client = {
#             'data': {
#                 [cli.to_json() for cli in client]
#             }
#         }

#         document = create_document(data_cessionario, data_cedente, data_client)
#         return {'message': 'success'}, 200
