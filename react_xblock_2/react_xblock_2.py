"""TO-DO: Write a description of what this XBlock is."""
import os

from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Integer, Scope
from xblock.utils.resources import ResourceLoader

resource_loader = ResourceLoader(__name__)


class ReactXBlock8(XBlock):
    """
    TO-DO: document what your XBlock does.
    """

    # Fields are defined on the class.  You can access them in your code as
    # self.<fieldname>.

    # TO-DO: delete count, and define your own fields.
    count = Integer(
        default=0, scope=Scope.user_state,
        help="A simple counter, to show something happening",
    )

    def resource_string(self, path):
        """
        Retrieve string contents for the file path
        """
        path = os.path.join('static', path)
        return resource_loader.load_unicode(path)

    # TO-DO: change this view to display your data your own way.
    def student_view(self, context=None):
        """
        Create primary view of the ReactXBlock8, shown to students when viewing courses.
        """
        # Create our HTML fragment. The HTML will get replace by React, so
        # this is mostly to load our React JavaScript bundle and i18n.
        frag = Fragment('<p>Loading...</p>')
        frag.add_css(self.resource_string("css/react_xblock_2.css"))
        # Add JavaScript:
        js_entry_point = self.runtime.local_resource_url(self, 'public/js/react_xblock_2.js')
        frag.add_javascript_url(js_entry_point)
        frag.initialize_js('initReactXBlock8StudentView', {
            # Only fields that we specify here will be available to React:
            "count": self.count,
        })
        return frag

    # TO-DO: change this handler to perform your own actions.  You may need more
    # than one handler, or you may not need any handlers at all.
    @XBlock.json_handler
    def increment_count(self, data, suffix=''):
        """
        Increments data. An example handler.
        """
        if suffix:
            pass  # TO-DO: Use the suffix when storing data.
        # Just to show data coming in...
        assert data['hello'] == 'world'

        self.count += 1
        return {"count": self.count}
