import mysql.connector
from mysql.connector import Error

def connect_and_describe():
    try:
        # Establish a database connection
        connection = mysql.connector.connect(
            host='47.204.173.88',  # Replace with your actual RDS endpoint or localhost if local
            user='BL_User',  # Replace with your MySQL username
            password='$@v4Nn@h2024!',  # Replace with your MySQL password
            database='bl_db_test'  # The database to use
        )

        if connection.is_connected():
            print("Connected to MySQL database")

            # Create a cursor object
            cursor = connection.cursor()

            # List of tables to describe
            tables = ['people', 'events', 'venues', 'resources']

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

