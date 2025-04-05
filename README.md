# nl2sql_demo
This is a demo for NL to SQL with AI in sevaral ways:

- dify workflow + agent + sql excution backend + postgres
  - configure workflow, with LLM to process natural language and generate sql statements(can fine tune the LLM for DB only)
  - create agent to send sql to a backend server
  - create a sql excution server(inclduing OPEN API swagger) to connect to database and excute the sql statments
  - setup the database(postgres in this demo)
