<table
  class="
    table
    table-hover
    table-striped
    table-bordered
    table-condensed
  "
  ng-style="{
    width: element.width,
    height: element.height
  }"
>
  <thead>
    <tr>
      <th ng-repeat="heading in element.content.headings">{{heading.text}}</th>
    </tr>
  </thead>
  <tfoot></tfoot>
  <tbody>
    <tr ng-repeat="row in element.content.rows">
      <td ng-repeat="col in row.cols">{{col.text}}</td>
    </tr>
  </tbody>
</table>
