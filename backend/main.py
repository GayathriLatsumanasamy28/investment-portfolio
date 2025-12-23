from fastapi import FastAPI
from schemas import Investment

app = FastAPI(title="Investment Portfolio API")

# TEMP storage (will be replaced by DB later)
investments: list[Investment] = []

@app.get("/")
def root():
    return {"status": "Backend running successfully"}

@app.get("/health")
def health_check():
    return {"health": "OK"}

@app.post("/investments")
def add_investment(inv: Investment):
    investments.append(inv)
    return {
        "message": "Investment added successfully",
        "data": inv
    }

@app.get("/investments")
def get_investments():
    total_amount = sum(i.amount for i in investments)
    avg_return = (
        sum(i.returns for i in investments) / len(investments)
        if investments else 0
    )

    return {
        "count": len(investments),
        "total_invested": total_amount,
        "average_return": avg_return,
        "investments": investments
    }
