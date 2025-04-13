from fastapi import FastAPI, Response
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import langchain_demo

class Item(BaseModel):
    question: str

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/items/")
async def create_item(item: Item, response: Response):
    print('===========Entering create_item==========')
    print(item.question)
    nl_answer = langchain_demo.nl2data(item.question)
    return nl_answer