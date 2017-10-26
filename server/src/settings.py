# Let's just use the local mongod instance. Edit as needed.

# Please note that MONGO_HOST and MONGO_PORT could very well be left
# out as they already default to a bare bones local 'mongod' instance.
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

event_schema = {
    # Schema definition, based on Cerberus grammar. Check the Cerberus project
    # (https://github.com/nicolaiarocci/cerberus) for details.
    'title': {
        'type': 'string',
        'required': True
    },

    'description': {
        'type': 'string',
        'required': True
    },  
    'id': {
        'type': 'integer',
        'required': True,
        'unique': True,
    },
    # 'role' is a list, and can only contain values from 'allowed'.
    'day': {
        'type': 'list',
        'allowed': ["mon", "tue", "wen", "thu", "fri", "sat", "sun"],
    }
    #'starts-at': {
#        'type': 'time'
#    },
#
#    'ends-at': {
#        'type': 'timestamp'
#    }
}

event = {
    # 'title' tag used in item links. Defaults to the resource title minus
    # the final, plural 's' (works fine in most cases but not for 'people')
    'item_title': 'event',

    # by default the standard item entry point is defined as
    # '/people/<ObjectId>'. We leave it untouched, and we also enable an
    # additional read-only entry point. This way consumers can also perform
    # GET requests at '/people/<lastname>'.
    'additional_lookup': {
        'url': 'regex("[\w]+")',
        'field': 'id'
    },

    # We choose to override global cache-control directives for this resource.
    'cache_control': 'max-age=10,must-revalidate',
    'cache_expires': 10,

    # most global settings can be overridden at resource level
    'resource_methods': ['GET', 'POST'],

    'public_methods': ['GET'],
    'public_item_methods': ['GET'],

    'schema': event_schema

}

DOMAIN = {"event": event}
