How to Set Up langchain for NL2SQL in Mac


### Steps

- install python, set env and install dependencies

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> /Users/a123/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/a123/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

cd langchain/src 
python3.9 -m venv ./env
source ./env/bin/activate

pip3.9 install -r requirments.txt

```
- follow https://blog.51cto.com/u_16175489/13154122 to let postgres can be access by your laptop

- create a table `user`

- run the service `fastapi dev main.py`  


### Next Step

- pack code langchain code as another container
- refine postgres container's configuration
- create a console with React to communicate with end user