"""TO-DO: Write a description of what this XBlock is."""
import os

from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Integer, Scope, String
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

    display_name = String(
        display_name="Display Name",
        scope=Scope.settings,
        default="ReactXBlock8",
    )

    # TO-DO: change this view to display your data your own way.
    def student_view(self, context=None):
        """
        Create primary view of the ReactXBlock8, shown to students when viewing courses.
        """
        # Create our HTML fragment. The HTML will get replace by React, so
        # this is mostly to load our React JavaScript bundle and CSS.
        frag = Fragment('<p>Loading...</p>')
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/react_xblock_2.css'))
        frag.add_javascript_url(self.runtime.local_resource_url(self, 'public/react_xblock_2.js'))
        frag.initialize_js('initReactXBlock8StudentView', {
            # Only fields that we specify here will be available to React:
            "count": self.count,
        })
        return frag

    # TO-DO: change this view to display your data your own way.
    def studio_view(self, context=None):
        """
        UI where authors can edit the settings of this block.
        """
        # Create our HTML fragment. The HTML will get replace by React, so
        # this is mostly to load our React JavaScript bundle and CSS.
        frag = Fragment('<p>Loading...</p>')
        frag.add_css_url(self.runtime.local_resource_url(self, 'public/react_xblock_2.css'))
        frag.add_javascript_url(self.runtime.local_resource_url(self, 'public/react_xblock_2_studio.js'))
        frag.initialize_js('initReactXBlock8StudioView', {
            # Pass all fields to the studio edit UI. This is safe for authors, but we wouldn't do this for learners
            # (in student_view) because these fields could contain answers etc.
            "fields": {
                field_name: self.fields[field_name].to_json(getattr(self, field_name))
                for field_name in self.fields.keys()
            }
        })
        return frag

    # TO-DO: change this handler to perform your own actions.  You may need more
    # than one handler, or you may not need any handlers at all.
    @XBlock.json_handler
    def increment_count(self, _data, _suffix=''):
        """
        Increments data. An example handler.
        """
        self.count += 1
        return {"count": self.count}

    @XBlock.json_handler
    def save_authored_data(self, data, suffix=''):
        """
        Handler for saving changes that an author made using the studio_view
        """
        if "display_name" in data:
            self.display_name = data['display_name']
        return {}
