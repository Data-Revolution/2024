from haversine import haversine, Unit
# Clean up the data by removing any non-coordinate text
# Extract only the content that represents the array of coordinates
with open("data.ts", "r") as file:
    data = file.read()
    data_cleaned_text = "".join(data).split('=')[1].strip().strip(';')  # Extracts everything after '=' and removes trailing characters

# Convert the string representation to a list of coordinates
data_cleaned = eval(data_cleaned_text)

# Initialize an empty list to store filtered coordinates
filtered_coords = []

output_string = "["

# Minimum distance threshold in meters
min_distance = 3000  

data_cleaned = sorted(data_cleaned, key=lambda k: [k[0], k[1]])

# Filter coordinates
for coord in data_cleaned:
    # If there is no existing coordinate within the minimum distance, add the current coordinate
    if not any(haversine(coord, existing_coord, unit=Unit.METERS) < min_distance for existing_coord in filtered_coords):
        filtered_coords.append(coord)

for coord in filtered_coords:
    output_string += f"[{str(coord[0])}, {str(coord[1])}],"
output_string += "]"

with open("filtered_data", "w") as file:
    file.write(output_string)
