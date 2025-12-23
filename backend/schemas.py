from pydantic import BaseModel

class Investment(BaseModel):
    name: str
    type: str
    amount: float
    returns: float
