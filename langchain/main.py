from fastapi import FastAPI
from pydantic import BaseModel

import langchain_demo

class Item(BaseModel):
    question: str

app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
    print('===========Entering create_item==========')
    print(item.question)
    nl_answer = langchain_demo.nl2data(item.question)
    return nl_answer