# nl2sql_demo
This is a demo for NL to SQL with AI in sevaral ways:

- dify workflow + agent + sql excution backend + postgres
  - configure workflow, with LLM to process natural language and generate sql statements(can fine tune the LLM for DB only)


  Current workflow:

  ![workflow_input](./dify/images/workflow_input.png)
  ![workflow_result](./dify/images/workflow_result.png)
  
  - create agent to send sql to a backend server - TBD
  - create a sql excution server(inclduing OPEN API swagger) to connect to database and excute the sql statments - TBD
  - setup the database(postgres in this demo) - TBD

- fastapi + langchain + create_sql_agent + postgres

  - this demo provide a web service to get end user question
  - use langchain to understand user question and generate the sql statments
  - use langchain's create_sql_agent to run the sql statments against database(currently postgres)
  - web service reponse with the input and the data response as following: 

```
{
    "input": "查询所有user",
    "output": "Here are some users from the database:\n1. Username: Monica, Real Name: Li Jia\n2. Username: meng, Real Name: meng"
}
```

    - call the web service with the postman

      - query with the correct table

![correct_table](./langchain/images/correct_table.png)

      - query with table not exists
![correct_table](./langchain/images/incorrect_table_name.png)


  - llm log sample as following:

```
 Entering new SQL Agent Executor chain...
Action: sql_db_list_tables
Action Input: userI should query the schema of the user table.
Action: sql_db_schema
Action Input: user
CREATE TABLE "user" (
	username TEXT, 
	realname TEXT
)

/*
3 rows from user table:
username	realname
Monica	Li Jia
meng	meng
*/I should construct a query to select all relevant columns from the user table, limiting the results to 10 entries.
Action: sql_db_query_checker
Action Input: SELECT username, realname FROM "user" LIMIT 10;SELECT username, realname FROM "user" LIMIT 10;The query is correct. I will now execute it.
Action: sql_db_query
Action Input: SELECT username, realname FROM "user" LIMIT 10;[('Monica', 'Li Jia'), ('meng', 'meng')]I now know the final answer.
Final Answer: 以下是 "user" 表中的一些数据：

| username | realname |
|----------|----------|
| Monica   | Li Jia   |
| meng     | meng     |

注意：仅显示了前10条记录。

> Finished chain.
========打印结果
{'input': '查询所有user', 'output': '以下是 "user" 表中的一些数据：\n\n| username | realname |\n|----------|----------|\n| Monica   | Li Jia   |\n| meng     | meng     |\n\n注意：仅显示了前10条记录。'}

```
  - Next Step
    - create a console with React to communicate with end user