
# app = Flask(__name__, template_folder='./')

# @app.route('/<path:filename>')  
# def send_file(filename):
#     return send_from_directory('./', filename)


def run_server(server = 'flask'):
    import os, time
    from stem.control import Controller

    onion = 'HiddenServiceDir'
    _port = ':9151'
    torrc_loc = input('\nEnter installed path of `Tor Browser` folder : ')

    if torrc_loc == '':
        # torrc_loc = fr'C:\Users\{os.getlogin()}\Desktop\Repository\Host-Onion\Tor Browser'
        torrc_loc = f'C:/Users/{os.getlogin()}/Desktop/Tor Browser'
    torrc_loc_ = torrc_loc.replace('\\', '/')

    if server.lower() == 'xampp':
        _port = ''
        xampp_loc = input('\nEnter installed path of `xampp-control.exe` file: ')

        if xampp_loc == '':
            # xampp_loc = fr'C:\Users\{os.getlogin()}\Desktop\Repository\Host-Onion\xampp\xampp-control.exe'
            xampp_loc = fr'C:\xampp\xampp-control.exe'
        os.startfile(xampp_loc)

    torrc = f'''
# This file was generated by Tor; if you edit it, comments will not be preserved
# The old torrc file was renamed to torrc.orig.1, and Tor will ignore it

ClientOnionAuthDir {torrc_loc}\Browser\TorBrowser\Data\Tor\onion-auth
DataDirectory {torrc_loc}\Browser\TorBrowser\Data\Tor
GeoIPFile {torrc_loc}\Browser\TorBrowser\Data\Tor\geoip
GeoIPv6File {torrc_loc}\Browser\TorBrowser\Data\Tor\geoip6
HiddenServiceDir {os.path.join(os.getcwd(), onion)}
HiddenServicePort 80 127.0.0.1{_port}

SOCKSPort 9050
ControlPort 9051
'''

    with open(torrc_loc_ + '/Browser/TorBrowser/Data/Tor/torrc', 'w') as f:
        f.write(torrc)

    try: os.mkdir(onion)
    except: pass

    firefox = torrc_loc + r'\Browser\firefox.exe'
    os.startfile(firefox)
    time.sleep(10)

    port = 5000
    host = "127.0.0.1"
    hidden_svc_dir = os.path.join(os.getcwd(), onion).replace('\\', '/')

    try:
        if server.lower() == 'flask':
            print(" * Getting controller")
            controller = Controller.from_port(address = host, port=9151)

            controller.authenticate(password="")
            controller.set_options([
                ("HiddenServiceDir", hidden_svc_dir),
                ("HiddenServicePort", "80 %s:%s" % (host, str(port)))
                ]
            )
        else:
            print('''
Run Server:
    XAMPP Control Panel 

        Module: Apache
        Action: Start
''')

        svc_name = open(hidden_svc_dir + "/hostname", "r").read().strip()
        print (f"\n * Created host: {svc_name}\n")

    except Exception as e:
        print(e)


# run_server('xampp')
