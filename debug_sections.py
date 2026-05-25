import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract Why Choose Us section
wcu_match = re.search(r'(    <!-- Why Choose Us -->.*?</section>)', html, flags=re.DOTALL)
# Extract Products section  
prod_match = re.search(r'(    <!-- Our Products -->.*?</section>)', html, flags=re.DOTALL)

if not wcu_match or not prod_match:
    print("ERROR: Sections not found. Trying alternate patterns...")
    wcu_match = re.search(r'(<section id="why-choose-us".*?</section>)', html, flags=re.DOTALL)
    prod_match = re.search(r'(<section id="products".*?</section>)', html, flags=re.DOTALL)
    if not wcu_match or not prod_match:
        print("FAILED to find sections")
        exit()

wcu_section = wcu_match.group(1)
prod_section = prod_match.group(1)

print(f"Found WCU section ({len(wcu_section)} chars)")
print(f"Found Products section ({len(prod_section)} chars)")

# The current order is: ... WCU ... Products ...
# We want:             ... Products ... WCU ...
# Wait, user says "after our legacy I want why choose us" and currently it's products
# Current order based on line numbers: hero(38) -> wcu(102) -> products(190) -> gallery -> blogs -> contact
# User wants: hero -> wcu -> products (which is already correct by line numbers)
# But user says "right now its our products" appearing after legacy...
# Let me check what "Our Legacy" is - it's the Why Choose Us section title
# "Why Devotees Choose Our Murtis" has subtitle "Our Legacy"
# So the user sees: Hero -> [Our Legacy / Why Choose Us section] -> Products
# But they want: Hero -> Why Choose Us (6 pointers) -> Products
# The WCU section currently shows the old 3-pointer layout from the original Why Choose Us
# And the 6 pointers script may not have worked right

# Let me just print what's in each section to debug
print("--- WCU Section first 300 chars ---")
print(wcu_section[:300])
print("--- Products Section first 300 chars ---")
print(prod_section[:300])
