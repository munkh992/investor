![](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/resources/prettify/onload.png)
# kony.map Namespace
The kony.map namespace provides support functions for use with the Map widget. This section contains reference information about the kony.map namespace in the following topics.   
  * [Constants](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm#Constant)
  * [Functions](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm#Function)


##  Constants
The kony.map namespace defines the following constants.
[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[Map Provider Constants](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
The Map Provider Constants enable your app to select which map provider to use.
Constant | Description
---|---
kony.map.MAP_PROVIDER_BING | Select Bing as the map provider. This constant is available on all platforms except Desktop Web.
kony.map.MAP_PROVIDER_GOOGLE | Select Google as the map provider.


[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[Map View Mode Constants](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
Use the Map View Mode Constants to configure which map view your app selects.
Constant | Description
---|---
kony.map.MAP_VIEW_MODE_NORMAL | View the map in whatever mode is the default for the map provider.
kony.map.MAP_VIEW_MODE_SATELLITE | View the map as a satellite image.
kony.map.MAP_VIEW_MODE_STREET | View the map as a street map.
kony.map.MAP_VIEW_MODE_TRAFFIC | View traffic information on the map.


[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[Map Widget Error Codes](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
The following table lists the error codes that the Map widget generates.
Constant | Description
---|---
kony.map.ROUTE_SEARCH_INVALID_REQUEST | The format of the route search request was invalid.
kony.map.ROUTE_SEARCH_LIMIT_EXCEEDED |  The service has received too many requests from your application within the allowed time period. For Android, below are the usage limits imposed by Google Map Service.
  * Up to 8 waypoints for Google Map free API and 23 waypoints for Google Map for Work in each request
  * 2500 & 100000 direction requests per 24 hour period for free API and work api respectively.
  * 2 and 10 requests per second for free API and work API respectively.


kony.map.ROUTE_SEARCH_NETWORK_FAILURE | The request failed due to network failure.
kony.map.ROUTE_SEARCH_PLACE_NOT_FOUND | At least one of the locations specified in the request's source, destination, or waypoints could not be found.
kony.map.ROUTE_SEARCH_UNKNOWN_ERROR | An unknown error occurred.


[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[Pin Image Anchor Constants](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
The Pin Image Anchor Constants define the positions that your app can anchor a pin image to on a map. The image positions are illustrated in the image below.
![](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/resources/images/pinimageanchorpositions_445x240.png)
Constant | Description
---|---
kony.map.PIN_IMG_ANCHOR_BOTTOM_CENTER | Anchors the pin image at the bottom center position.
kony.map.PIN_IMG_ANCHOR_BOTTOM_LEFT | Anchors the pin image by its lower left corner.
kony.map.PIN_IMG_ANCHOR_BOTTOM_RIGHT | Anchors the pin image by its lower right corner.
kony.map.PIN_IMG_ANCHOR_CENTER | Anchors the pin image at the center position.
kony.map.PIN_IMG_ANCHOR_MIDDLE_LEFT | Anchors the pin image at the middle left position of the image.
kony.map.PIN_IMG_ANCHOR_MIDDLE_RIGHT | Anchors the pin image at the middle right position of the image.
kony.map.PIN_IMG_ANCHOR_TOP_CENTER | Anchors the pin image at the top center position.
kony.map.PIN_IMG_ANCHOR_TOP_LEFT | Anchors the pin image by its upper left corner.
kony.map.PIN_IMG_ANCHOR_TOP_RIGHT | Anchors the pin image by its upper right corner.


[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[Pin Image Type Constants](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
These constants define the types of images that can be used with maps.
Constant | Description
---|---
kony.map.PIN_IMG_SRC_TYPE_BASE64 | Indicates that the pin image should be created out of given a base64 string.
kony.map.PIN_IMG_SRC_TYPE_FILE_PATH | Indicates that the pin image is available in internal file system. The specified value can be either an absolute path or a File object.      
kony.map.PIN_IMG_SRC_TYPE_IMAGE | Indicates that the pin image is of type Image object
kony.map.PIN_IMG_SRC_TYPE_RESOURCES |  Indicates that the pin image is available in bundled resources.
[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[Shape Type Constants](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
The following constants identify the shapes that can be drawn on maps.
Constant | Description
---|---
kony.map.SHAPE_TYPE_POLYGON | The shape is a polygon.
kony.map.SHAPE_TYPE_POLYLINE | The shape is a polyline.
kony.map.SHAPE_TYPE_CIRCLE | The shape is a circle.
##  Functions
The kony.map namespaces contains the following functions.
[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[kony.map.containsLocation](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
This function tests to see whether a specified location is within a circle or polygon on a map or whether it lies along a polyline on a map.
Syntax
kony.map.containsLocation(shapeType, location, shapeData);
Input Parameters
Parameter | Description
---|---
shapeType |  Contains a [Shape Type Constant](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_constants.htm#ShapeTyp) that defines which kind of shape the location is being tested against.
location | Holds a location object which contains lat and lon values.
shapeData | A key-value pair object that defines the shape using the following keys:
  * locations [Array]: List of locations that defines a given shape. Each element in Array is an Object, which contains latitude and longitude values. For Circle, only first value in Array is considered.
  * radius [Number]: Radius that is needed to define circle shape. This key is only valid of shapeType is Circle and ignored for other shapes.
  * tolerance [Number] [Android]: Specify tolerance in meters when user is interacting with Polyline or Polygon. Not applicable for other shapes.


Examples
Example 1: Polyline
```
//Defining the shapeData parameter
var shapeData ={
    locations:[{
        lat:"17.451759",
        lon:"78.380806"},{
        lat:"17.473305",
        lon:"78.425191"}],
    tolerance:200,};//Defining the location parametervar location ={
    lat:"17.427789",
    lon:"78.451751"};
//Checking if the location mentioned falls on the polyline
var value = kony.map.containsLocation(kony.map.SHAPE_TYPE_POLYLINE, location, shapeData);
```

Example 2: Circle
```
//Defining the shapeData parameter      var shapeData ={
    locations:[{
        lat:"17.451759",
        lon:"78.380806"}],
    radius:1000};//Defining the location parametervar location ={
      lat:"17.451759",
      lon:"78.380806"};//Checking if the location mentioned falls inside the circle           var b = kony.map.containsLocation(kony.map.SHAPE_TYPE_CIRCLE, location, shapeData);  
```

Return Values
True if the location is within the circle or polygon, or if it lies along the polyline. Otherwise, false.
Remarks
For detailed information on how to use this function and what parameter values are valid, please see [Map API](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/mapapi.htm).
Platform Availability
  * Android
  * iOS


[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[kony.map.distanceBetween](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
This function finds the linear distance between two locations on a map.
Syntax
kony.map.distanceBetween(location1, location2);
Input Parameters
Parameter | Description
---|---
location1 | Contains the first location to use.
location2 |  Contains the second location to use.
Example
```
//Defining pin 1.      var pin1 ={
    id:"id1",// id is mandatory for every pin in dictionary
    lat:"17.4947934",
    lon:"78.3996441",
    name:"KPHB",
    image:"pinb.png",
    focusImage:"focusImage.png",//focus image will be shown when map pin is selected
    desc:"Kukatpally",
    showCallout:true,
    meta:{
        color:"green",
        label:"A"}};//Defining pin 2.var pin2 ={
    id:"id2",// id is mandatory for every pin in dictionary
    lat:"17.3616",
    lon:"78.4747",
    name:"Charminar",
    image:"pinb.png",
    focusImage:"focusImage.png",//focus image will be shown when map pin is selected
    desc:"In Hyderabad",
    showCallout:true,
    meta:{
        color:"green",
        label:"B"}};//Adding pins.this.view.MainMap.addPins([pin1, pin2]);//Calculating the distance between the two pins.    var distanceInMeters = kony.map.distanceBetween(pin1, pin2);
```

Return Values
A number that specifies the distance between the two input locations.
Platform Availability
  * Android
  * iOS


[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[kony.map.decode](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
This function enables apps to to decode the encoded polyline points which are provided in search route results. In Android, each step in the search results contains a key.        
Syntax
kony.map.decode(encodedPolylinePoints);
Input Parameters
Parameter | Description
---|---
encodedPolylinePoints | Hold a string containing the encoded polyline points.
Return Values
An array containing only the lat/lon values.
Example
```
var polylineConfig ={
    lineColor:"0x0000ffff",
    lineWidth:"2"};varbool= kony.map.decode(polylineconfig);
```

Platform Availability
  * Android


[![Closed](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/Skins/Default/Stylesheets/Images/transparent.gif)](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)[kony.map.searchRoutes](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm)
* * *
This function searches for routes between the start and destination locations.
Syntax
kony.map.searchRoutes(searchCriteria, successCallback, errorCallback);
Input Parameters
Parameter | Description
---|---
searchCriteria | A JSObject with set of search request configuration parameters that defines the search criteria for routes request.
successCallback |  A callback function that receives the search results when search request succeeds. The callback function must have the following syntax. function successCallback( routes );The callback function's _routes_ parameter is an array with one or more routes indicating possible directions between source and destination.
errorCallback |  An optional callback function that gets called when search request fails. The callback function must have the following syntax. function errorCallback( errorCode[Number], errorMessage[String] )The _errorCode_ parameter indicates the category of error. This carries the one of the Map Error Codes defined in the kony.map namespace. The _errorMessage_ parameter contains a detailed error message describes the reason for failure. These error messages are platform specific.
Example
```
/* @ function callSearchRoutefunc * @description invokes searchRoutes API * /
  callSearchRoutefunc:function()
  {
    try{
      var searchCriteriaObj = {
        alternatives : true,
        directionServiceUrl : "https:/ / maps.googleapis.com / maps / api / directions / json ",
        destination : {lat: MAPCONSTANTS.dest3Lat, lon: MAPCONSTANTS.dest3Lon},
        origin :  {lat: MAPCONSTANTS.originLat, lon : MAPCONSTANTS.originLon},
        transportMode : "driving ",
        apiKey:""
      };
      if (this.index === null || this.index === undefined) {
        alert('Please select any one destination');
      }
      switch (this.index) {
        case "Kony Foster City ":
          searchCriteriaObj.destination = {lat: MAPCONSTANTS.dest1Lat, lon: MAPCONSTANTS.dest1Lon};
          break;
        case "Kony Austin ":
          searchCriteriaObj.destination = {lat: MAPCONSTANTS.dest2Lat, lon: MAPCONSTANTS.dest2Lon};
          break;
        default :
          kony.print("@@@@
destination is Orlando ");
          break;
      }

      kony.map.searchRoutes(searchCriteriaObj, this.searchRouteSuccesCallback, this.errorRouteSuccesCallback);
    }catch(error){
      kony.print("
frmMapSearchResult Controller "+JSON.stringify(error));
    }
  },
  /**
* @function searchRouteSuccesCallback
* @description success callback for searchRoutes API
* @private
* @param routes-&gt; routes available in the given source and destination
                         */
  searchRouteSuccesCallback:function(routes){try{this.displySearchRoutes(routes);}catch(error){
      kony.print("
frmMapSearchResult Controller "+JSON.stringify(error));}},/**
* @function errorRouteSuccesCallback
* @description error callback for searchRoutes API
*/
  errorRouteSuccesCallback:function(){try{
      alert("
Search result failed ");}catch(error){
      kony.print("
frmMapSearchResult Controller "+JSON.stringify(error));}},/**

```

Return Values
None.
Remarks
Applications which use the apiKey in search criteria must enable the “Directions API” in Google Developer Console. Google API’s usage quota is counted against the apiKey. For activating and deactivating Google API’s, please follow the below link for detailed procedure. For an overview on searching for routes on maps, please see [Map API](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/mapapi.htm).
This API is not supported on Huawei devices.
Platform Availability
  * Android
  * iOS


**In this topic**
  * [kony.map Namespace](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm#konymapNamespace)
    * [Constants](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm#Constants)
    * [Functions](https://docs.temenos-cloud.com/docs/visualizer/viz_api_dev_guide/content/kony_map_functions.htm#Functions)


Add Bookmark
save your best links

Bookmark Name

Bookmark URL Save Link
View Bookmarks
Visit your best links
Bookmark Name | Actions
---|---
