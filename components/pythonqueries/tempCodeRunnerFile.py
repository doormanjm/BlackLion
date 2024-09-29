import mysql.connector
from mysql.connector import Error

def connect_and_describe():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(
            host='localhost',  # Replace with your actual RDS endpoint or localhost if local
            user='root',  # Replace with your MySQL username
            password='Passw0rd',  # Replace with your MySQL password
            database='my_project_database'  # The database to use
        )

        if connection.is_connected():
            print("Connected to MySQL database")

            # Create a cursor object
            cursor = connection.cursor()

            # List of tables to describe
            tables = ['Person', 'Event', 'Venue', 'Resource']

            for table in tables:
                print(f"\n'{table}' Table Structure:")
                cursor.execute(f"DESCRIBE {table}")
                table_description = cursor.fetchall()

                # Print table structure
                for row in table_description:
                    print(row)

    except Error as e:
        print(f"Error: {e}")
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("\nMySQL connection is closed")

# Call the function
connect_and_describe()

