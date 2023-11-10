import psycopg2
from kafka import KafkaProducer
import random
import time
import os
import json

from dotenv import load_dotenv

load_dotenv()

random.seed(time.time())

POSTGRES_USER = os.getenv('POSTGRES_USER')
POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')
POSTGRES_DB = os.getenv('POSTGRES_DB')

# Параметры подключения к базе данных
db_params = {
    'dbname': POSTGRES_DB,
    'user': POSTGRES_USER,
    'password': POSTGRES_PASSWORD,
    'host': 'localhost',
    'port': '5435'
}

connection = psycopg2.connect(**db_params)
cursor = connection.cursor()

producer = KafkaProducer(bootstrap_servers='localhost:9094',
                         value_serializer=lambda v: json.dumps(v).encode('utf-8'))

row_offset = 0

cursor.execute('SELECT count(*) FROM "TrainsMovement"')
total_rows = cursor.fetchone()[0]

while True:
    print('-----')
    if row_offset == total_rows:
        row_offset = 0
    row_limit = random.randint(10, 20)
    print(f'Rows limit: {row_limit}')
    print(f'Rows offset: {row_offset}')
    cursor.execute(f'SELECT * FROM "TrainsMovement" WHERE id >= {row_offset} LIMIT {row_limit}')
    rows = cursor.fetchall()
    for row in rows:
        print(row)
        producer.send('trains', {
            'train_id': row[1],
            'time': row[2].strftime("%m.%d.%Y %H:%M:%S"),
            'latitude': row[3],
            'longitude': row[4]
        })
        time.sleep(random.randint(4, 10))
    row_offset = rows[-1][0] + 1
