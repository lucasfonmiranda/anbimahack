from sqlalchemy.sql import func
from project import db
from sqlalchemy.orm import relationship


class Investments(db.Model):
    __tablename__ = 'investments'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(124), unique=True)
    name = db.Column(db.String(124), unique=True)
    address = db.Column(db.String(124))
    cnpj = db.Column(db.VARCHAR())
    found = relationship('Clients')
    

    #function to convert data in jsons
    def to_json(self):
        return {
            'email': self.email,
            'name': self.name,
            'addess': self.address,
            'cnpj': self.address,
            'found': self.found
            
        }


class Clients(db.Model):
    __tablename__ = 'clients'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_investments = db.Column(db.Integer, db.ForeignKey('investments.id'))
    email = db.Column(db.String(124))
    name = db.Column(db.String(124))
    cpf = db.Column(db.VARCHAR())
    quant_cotas = db.Column(db.Integer)
    id_found = db.Column(db.Integer, db.ForeignKey('found.id'))


    def to_json(self):
        return{
            'email': self.email,
            'id_investments': self.id_investments,
            'name': self.name,
            'cpf': self.cpf,
            'quant_cotas': self.quant_cotas,
            'id_found': self.id_found
        }


class Found(db.Model):
    __tablename__ = 'found'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(124))
    cnpj = db.Column(db.String(124))

    def to_json(self):
        return {
            'name': self.name,
            'cnpj': self.cnpj
        }


class Contract(db.Model):
    __tablename__ = 'contract'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    serial_number = db.Column(db.String(124))
    client = db.Column(db.String(124))

    def to_json(self):
        return{
            'serial_number': self.serial_number,
            'client': self.client
        }     