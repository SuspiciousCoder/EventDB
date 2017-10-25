# Server

## Dependencies

The server depends on the python Eve (http://python-eve.org/).

pip install Eve


And MongoDB. Defaults to a local instance.


## Testing

The API can be accessed easily via command line with curl.

curl -d '{"title":"sample-course","description":"fofofofofofo","id":"1"}' -H 'Content-Type: application/json' localhost:5000/course

curl -i localhost:5000/course
