from flask import Flask, request, redirect, render_template
import mysql.connector

app = Flask(__name__)

# Connect to the MySQL server and my_project_database
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Passw0rd",  # Replace with your MySQL password
    database="my_project_database"  # The name of your database
)

@app.route('/')
def index():
    return render_template('form.html')  # Render the form HTML

@app.route('/add_ticket', methods=['POST'])
def add_ticket():
    event_name = request.form['event_name']
    buyer_name = request.form['buyer_name']
    price = request.form['price']

    cursor = conn.cursor()

    # Insert the new ticket into the database
    query = "INSERT INTO tickets (event_name, buyer_name, price) VALUES (%s, %s, %s)"
    values = (event_name, buyer_name, price)
    cursor.execute(query, values)
    conn.commit()

    cursor.close()

    return "Ticket added successfully!"

if __name__ == '__main__':
    app.run(debug=True)
