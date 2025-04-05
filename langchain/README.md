How to Set Up langchain for NL2SQL in Mac


### Steps

- install python, langchain, langchain-community

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> /Users/a123/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/a123/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

brew install python
pip3 install langchain

pip3 install dashscope
brew install postgresql
pip3 install psycopg2
```
- follow https://blog.51cto.com/u_16175489/13154122 to let postgres can be access by your laptop

- run main.py by 
  - `cd nl2sql_demo/langchain/src`
  - `python3 main.py`

### Next Step

- pack code langchain code as another container
- refine postgres container's configuration
- create a service to get user question
- create a console with React to communicate with end user