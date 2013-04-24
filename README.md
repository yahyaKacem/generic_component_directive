generic_component_directive:
============================

Make a generic AngularJS directive (that will evaluate to "editable div"/"image"/"video"/....)
Trying to make a custom component that will resieve a json object and based on the type in it will load the appropriate directive.
usage:

    <component obj="obj"></component>
Where:

    obj = {
      "id": 1,
      "type": "editor",
      "content": {
        "text": "Some text here"
      }
    }
Or

    obj = {
      "id": 2,
      "type": "image",
      "content": {
        "title": "title here",
        "alt": "alt value here",
        "url": "http://img.url/here.jpg"
      }
    }
...
