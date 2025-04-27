from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
import re

# Set Chrome Options
options = Options()
options.add_argument('--proxy-server=socks5://127.0.0.1:9050')

# (Optional)
# options.add_argument('--headless')

service = Service()
driver = webdriver.Chrome(service=service, options=options)

try:
    sitemap_url = 'http://i45sbuxzsnfvgrk3iuyl6jvdp54viro6hsxsk4cnwz4cqqspaklo75qd.onion/sitemap.xml'

    print(f"Opening sitemap {sitemap_url} via Tor network...")
    driver.get(sitemap_url)
    time.sleep(5)

    page_source = driver.page_source
    urls = re.findall(r'<loc>(.*?)</loc>', page_source)

    print(f"Found {len(urls)} links. Opening each one...")

    for idx, url in enumerate(urls, start=1):
        url = url.replace('https://', 'http://')  # <<<<<< IMPORTANT LINE
        print(f"\nOpening link {idx}: {url}")
        driver.get(url)
        time.sleep(5)
        print(f"Page Title {idx}:", driver.title)

finally:
    driver.quit()
