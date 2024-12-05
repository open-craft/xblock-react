React XBlock Demo
#################

Developing with Tutor
*******************

The recommended way to test and develop this XBlock is to install it into a Tutor devstack:

.. code-block:: bash

    tutor mounts add .
    tutor images build openedx-dev

Then you can go to http://studio.local.openedx.io:8001/ , add ``react_xblock_6``
to a course's "Advanced module list", then add this block to a course and test
it there. When you make changes to the code, Studio will automatically reload.

If the XBlock is not appearing, you may need to run this command and then
restart the CMS+LMS containers. At the moment, it's unclear why this is
necessary, but it seems that the install that happens during the image build is
not properly creating the egg info and entry point.

.. code-block:: bash

    tutor dev exec cms pip install -e /mnt/xblock-react-5/

Editing the React frontend code
*******************************

The main file for the XBlock's user interface is
``react_xblock_2/static-src/src/react_xblock_2.tsx``. But in order to edit this
file, you will first have to install the required Node packages and start the
frontend compiler:

.. code-block:: bash

    cd react_xblock_2/static-src/
    npm install
    npm run watch

Translating
***********

Internationalization (i18n) is when a program is made aware of multiple languages.
Localization (l10n) is adapting a program to local language and cultural habits.

This XBlock is set up to use ``react-intl`` for internationalization and
localization. It assumes that you will keep all translatable strings in the
React frontend code, marked with ``<FormattedMessage>`` and the other components
provided by ``react-intl``. The ability to localize strings in the python code
is not included, so put all your user-visible strings in the frontend. If you do
turn out to need localization in the python backend, there are examples
available separately for how to do this. See `edx-developer-guide <https://edx.readthedocs.io/projects/edx-developer-guide/en/latest/internationalization/i18n.html#python-source-code>`__
for more information.
