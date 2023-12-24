from flask import Flask, render_template
import requests

app = Flask(__name__, static_url_path='/static', static_folder='static')



@app.route("/")
def hello_world():
    # Print the generated URLs for CSS and JS files

    # Render the template
    return render_template('homepage.html')

@app.route('/doctorsinfo/<city>/<speciality>')
def doctorsinfo(city:str,speciality:str):
    city = city.lower()
    speciality = speciality.lower()
    page = 1
    response = requests.get(f'http://127.0.0.1:8000/doctormarham/{city}/speciality/{speciality}/page{page}')

    data = {
        'city': city,
        'speciality': speciality,
        'page': page,
        'doctors': []  # Initialize an empty list for doctors
    }
    
    if response.status_code == 200:
        # Parse and print the JSON content
        json_data = response.json()
        print(json_data)
        print("we here")
        data['doctors'] = json_data

    return render_template('doctorpage1.html' , **data)


if __name__ == "__main__":
    app.run(debug=True)
