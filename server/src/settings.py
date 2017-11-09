
MONGO_HOST = 'localhost'
MONGO_PORT = 27017

# Skip these if your db has no auth. But it really should.
#MONGO_USERNAME = '<your username>'
#MONGO_PASSWORD = '<your password>'

MONGO_DBNAME = 'event_db'


RESOURCE_METHODS = ['GET', 'POST']
ITEM_METHODS = ['GET', 'PATCH', 'DELETE']

PUBLIC_METHODS = ['GET']
PUBLIC_ITEM_METHODS = ['GET']

X_DOMAINS = '*'
X_HEADERS = ['authorization', 'content-type', 'if-match']

event_schema = {
    # Schema definition, based on Cerberus grammar. Check the Cerberus project
    # (https://github.com/nicolaiarocci/cerberus) for details.
    'title1': {
        'type': 'string',
        'required': True
    },

    'title2': {
        'type': 'string',
        'required': True
    },
    'time': {
        'type': 'string',
        'required': True
    },
    'description': {
        'type': 'string',
        'required': True
    }
}

event = {
    'item_title': 'event',
    'cache_control': 'no-cache',
    'schema': event_schema
}

DOMAIN = {"event": event}
