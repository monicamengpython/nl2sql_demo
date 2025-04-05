

import os
from dotenv import find_dotenv, load_dotenv
load_dotenv(find_dotenv())
DASHSCOPE_API_KEY=os.environ["DASHSCOPE_API_KEY"]

from langchain_community.llms import Tongyi
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

from langchain_community.utilities import SQLDatabase
from langchain_community.agent_toolkits import create_sql_agent
from langchain_community.agent_toolkits import SQLDatabaseToolkit
from langchain.agents.agent_types import AgentType


llm=Tongyi(temperature=1)
template='''
        You are an SQL generator that will help users translate their input natural language query requirements and target database postgres into target SQL statements.{question}.only output sql statement
    '''
question = "查询所有user"


#####################测试code
# prompt=PromptTemplate(
#         template=template,
#         input_variables=["question"]
# )

# chain = LLMChain(
#         llm=llm,
#         prompt=prompt
#         )

# res=chain.invoke(question)#运行
# print('')
# print(res['text'])#打印结果


db = SQLDatabase.from_uri("postgresql+psycopg2://root:xxxxxx@localhost:5432/data")

print("获取数据表：", db.get_usable_table_names())
agent_executor = create_sql_agent(
    llm=llm,
    toolkit=SQLDatabaseToolkit(db=db, llm=llm),
    verbose=True,
    agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
)


result = agent_executor.invoke(question)

print('========打印结果')
print(result)#打印结果