from requests_tor import RequestsTor
from bs4 import BeautifulSoup
import time

requests = RequestsTor(tor_ports=(9050,), tor_cport=9051)

sitemap_url = 'http://imvickyp2zrsxzfrc7crjeyak6jvvlcgury25qbkzojgjdacsifhz5qd.onion/sitemap.xml'

def visit_sitemap_links(sitemap_url):
    response = requests.get(sitemap_url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'xml')
        urls = [loc.text.replace("https://", "http://") for loc in soup.find_all('loc')]

        print(f"Found {len(urls)} URLs in sitemap.\n")

        for i, url in enumerate(urls, 1):
            try:
                page = requests.get(url)
                print(f"{i}. {url} -> Status: {page.status_code}")
                time.sleep(1)  # Optional delay
            except Exception as e:
                print(f"{i}. Failed to fetch {url}: {e}")
    else:
        print(f"Failed to fetch sitemap. Status code: {response.status_code}")

# Run
visit_sitemap_links(sitemap_url)
