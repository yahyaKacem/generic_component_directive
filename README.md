generic_component_directive
===========================

Make a generic AngularJS directive (that wil evaluate to textarea/image/button/....)
Trying to make a custom component that will resieve a json object and based on the type in it will load the appropriate directive.
usage:
  <component obj="obj"></component>
  where:
  obj={
    "id": 1,
    "type": "textarea",
    "content": ""
  }
