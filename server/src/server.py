#!/usr/bin/env python3

from eve import Eve
from eve.auth import BasicAuth


class HardCodedAuth(BasicAuth):
    def check_auth(self, username, password, allowed_roles, resource,
                   method):
        return username == 'foo' and password == 'bar2'


app = Eve(auth=HardCodedAuth)


if __name__ == '__main__':
    app.run()
