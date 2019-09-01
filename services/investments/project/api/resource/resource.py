
import os
from flask_restful import Resource, reqparse
from flask import request
from project.api.models import Investments, Found, Clients, Contract
from project import db
from uuid import uuid4
from project.api.utils.save_data import save_to, uploads_url
import requests 

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

