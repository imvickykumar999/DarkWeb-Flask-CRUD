# pip install requests_tor
from requests_tor import RequestsTor

# Initialize the RequestsTor object
requests = RequestsTor(tor_ports=(9050,), tor_cport=9051)
url = 'http://hfy4jopevfq56qghqgr5qs3j7e5qhn6lr7un45aymqv6sq6siie6kkid.onion/'

# Make a GET request through Tor
r = requests.get(url)

# Save the response text to a file
with open('index.html', 'w', encoding='utf-8') as file:
    file.write(r.text)

print("Output saved to index.html")
