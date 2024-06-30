# DarkWeb Flask CRUD

```bash
python -m venv .venv
.venv\Scripts\activate
python.exe -m pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

```py
# pip install VicksTor

from HostTor import VicksTor
import VicksTor as vix
vix.run_server('flask')

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World! <br> I am Anonymous.'

if __name__ == '__main__':
    app.run(debug=False)
```
