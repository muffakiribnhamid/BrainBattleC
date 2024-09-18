import pandas as pd

# Load the Excel file
file_path = 'main.xlsx'
df = pd.read_excel(file_path, engine='openpyxl')

# Add ranks based on Total marks (assuming 'Total' column exists)
df['Rank'] = df['Total'].rank(ascending=False, method='min').astype(int)

# Convert the DataFrame to JSON format
json_data = df.to_json(orient='records', lines=False)

# Output the JSON data
print(json_data)

# Optionally, save the JSON data to a file
with open('output2.json', 'w') as json_file:
    json_file.write(json_data)
