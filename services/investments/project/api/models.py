from sqlalchemy.sql import func
from project import db
from sqlalchemy.orm import relationship




class Investments(db.Model):
    __tablename__ = 'investments'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(124), unique=True)
    name = db.Column(db.String(124), unique=True)
    address = db.Column(db.String(124))
    cnpj = db.Column(db.String(124))
    found = db.Column(db.VARCHAR())
    

    #function to convert data in jsons
    def to_json(self):
        return {
            'email': self.email,
            'name': self.name,
            'addess': self.address,
            'cnpj': self.address,
            'found': self.found
            
        }


