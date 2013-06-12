generic_component_directive:
============================

Make a generic AngularJS directive (that will evaluate to "editable div"/"image"/"video"/....)
Trying to make a custom component that will resieve a json object and based on the type in it will load the appropriate directive.

###usage:

with this objects:

    objs = [
      {
        "id": 1,
        "type": "editor",
        "width": 150px,
        "height": 200px,
        "content": {
          "text": "Some text here"
        }
      },
      {
        "id": 2,
        "type": "image",
        "width": 150px,
        "height": 200px,
        "content": {
          "label": "title here",
          "alt": "alt value here",
          "src": "http://img.url/here.jpg"
        }
      }
    ];

And this markup:

    <div ng-repeat="obj in objs">
      <component obj="obj"></component>
    </div>

Result:

    <div ng-repeat="obj in objs">
      <div
        contenteditable="true"
        class="editor text-content"
        ng-style="{
          width: element.width,
          height: element.height
        }"
      >
        {{element.content.text}}
      </div>
    </div>
    <div ng-repeat="obj in objs">
      <div
        class="image-wrap"
        ng-style="{
          width: element.width,
          height: element.height
        }"
      >
        <img ng-src="{{element.content.src}}" alt="{{element.content.alt}}">
        <div class="text">{{element.content.label}}</div>
      </div>
    </div>
