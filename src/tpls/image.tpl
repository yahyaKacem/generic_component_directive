<div
  class="image-wrap"
  ng-style="{
    width: element.width,
    height: element.height
  }"
>
  <img ph-img="{{element.content.src}}" alt="{{element.content.alt}}">
  <div class="text">{{element.content.label}}</div>
</div>
