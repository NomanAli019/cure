from flask import Flask, render_template
import requests

app = Flask(__name__, static_url_path='/static', static_folder='static')



@app.route("/")
def hello_world():
    # Print the generated URLs for CSS and JS files

    # Render the template
    return render_template('homepage.html')

@app.route('/doctorsinfo/<city>/<speciality>/<pageno>')
def doctorsinfo(city:str,speciality:str , pageno:int ):
    city = city.lower()
    speciality = speciality.lower()
    page = int(pageno)
    response = requests.get(f'http://127.0.0.1:8000/doctormarham/{city}/speciality/{speciality}/page{page}')
    response_from_db = requests.get(f'http://127.0.0.1:8000/getdoctor_fromdb/{city}/specilization/{speciality}')

    data = {
        'city': city,
        'speciality': speciality,
        'page': page,
        'doctors': []  # Initialize an empty list for doctors
    }
    
    if response.status_code == 200:
        # Parse and print the JSON content
        json_data = response.json()
        
        data['doctors'].extend(json_data)
        # if response_from_db:
        #     data['doctors'].extend(response_from_db)
    return render_template('doctorpage1.html' , **data )

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login')
def login():
    return render_template('loginPage.html')

@app.route('/Diseaseblog/<disease>')
def Diseaseblog(disease:str):
    disease = disease.lower()
    blog_Data = requests.get(f'http://127.0.0.1:8000/get_disease{disease}')
    print(blog_Data)
    return render_template('blog.html' , blog_Data=blog_Data)


    

if __name__ == "__main__":
    app.run(debug=True)
