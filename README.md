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
          "src": "http://placehold.it/350x150"
        }
      }
    ];

And this markup:

    <component element="obj" ng-repeat="obj in objs"></component>

Result:

    <div
        element="component"
        ng-include="'tpls/' + element.type + '.tpl'"
        ng-repeat="component in slide.components"
    >
      <div
          contenteditable="true"
          class="editor text-content"
          ng-style="{
            width: element.width,
            height: element.height
          }"
          style="width: 150px; height: 200px;"
      >
        Slide 4 title
      </div>
    </div>
    <div
      ng-include="'tpls/' + element.type + '.tpl'"
      element="component"
      ng-repeat="component in slide.components"
    >
      <div
        class="image-wrap"
        ng-style="{
          width: element.width,
          height: element.height
        }"
        style="width: 150px; height: 125px;"
      >
        <img ng-src="http://placehold.it/350x150" alt="150x100">
        <div class="text ng-binding">Label for image 1/slide 4</div>
      </div>
    </div>
