# `DarkWeb Flask CRUD`

```bash
python -m venv .venv
.venv\Scripts\activate
python.exe -m pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

![image](https://github.com/imvickykumar999/DarkWeb-Flask-CRUD/assets/50515418/43eaeb93-3075-4158-b50f-37204fc38776)
![image](https://github.com/imvickykumar999/DarkWeb-Flask-CRUD/assets/50515418/b3f2d043-81ad-4d1c-b640-cb04f68366f9)
![image](https://github.com/imvickykumar999/DarkWeb-Flask-CRUD/assets/50515418/9ea2cb94-3969-435c-bf93-720d6984c279)
![image](https://github.com/imvickykumar999/DarkWeb-Flask-CRUD/assets/50515418/cae8ad35-1c41-4a6c-9f7e-1bf80a5447e4)
![image](https://github.com/imvickykumar999/DarkWeb-Flask-CRUD/assets/50515418/c265ac6d-6b4d-4c89-a23f-4f5c82af2580)
![image](https://github.com/imvickykumar999/DarkWeb-Flask-CRUD/assets/50515418/4c83bc84-2d35-4ed0-b6bb-5c5b0da973b2)
![image](https://github.com/imvickykumar999/DarkWeb-Flask-CRUD/assets/50515418/d013e850-47a6-44f5-85c1-d3015a55bd1d)

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
