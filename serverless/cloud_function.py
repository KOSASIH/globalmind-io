import os
from google.cloud import storage

def hello_world(request):
    storage_client = storage.Client()
    bucket_name = os.environ.get('BUCKET_NAME')
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob('hello.txt')
    blob.upload_from_string('Hello, World!')
    return 'Hello, World!'
