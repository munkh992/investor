[](javascript:;)
# Working with Deployment Automation
05 August 2021 |
[Feedback](javascript:;)
This section explains how to automate the deployment for EDS.
##  Request
The API request for deployment automation is given below.
  * URL: https://<hostname>:<port>/UtilServices/tde_deployment_service/init
  * Method type: POST
  * Auth type: Basic
  * Content-Type: text/plain
  * [Request](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Json/eds_deployment_with_schedule_mode_final.zip)


### JSON Structure
The JSON structure for model bank, companies and DML operations are given below.
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with1.png)
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Model Bank](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
Single model bank or comma separated model banks can be passed.
The supported model banks are:
  * EOD REGULATORY EXTRACTS
  * EOD GL EXTRACTS


[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Companies](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
The supported values are:
  * master (runs for master company only)
  * all (runs for all companies)
  * company_code~mnemonic (single company)
  * company_code1~mnemonic1, company_code1~mnemonic1 (multiple companies)
GB0010001~BNK, NV0020001~BNK


[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)DML Operations](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
The supported operations are:
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Update](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with2.png)
```
UPDATE des_system_configuration set prop_value=’kafka’ where prop_key=’des_app_message_system’;
```

Copy
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Insert](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with3.png)
```
INSERT INTO des_system_configuration (prop_key,prop_value) values(‘des_app_message_system’,’kafka’)
```

Copy
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Replace](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with9.png)
```
REPLACE INTO des_system_configuration (prop_key,prop_value) values(‘des_app_message_system’,’kafka’),(‘des_app_ssl’,’Yes’);
```

Copy
## Response
The API response for deployment automation is given below.
  * Content-Type: text/plain
  * Status: Refer below table.
  * Text: SUCCESS /Other relevant messages

HTTP_STATUS | HTTP_STATUS_CODE
---|---
ENABLE_CONFIG_DATA_STORE_FAILED_ERROR |  512
TDE_INTERNAL_ERROR |  514
TDE_INTERNAL_METASTORE_ERROR |  515
DEPLOYMENT_IN_PROGRESS |  440
DUPLICATE_REQUEST_DEPLOYMENT_COMPLETED |  441
INPUT_JSON_INVALID |  442
INPUT_MODELBANK_INVALID |  443
INIT_PENDING |  444
INPUT_COMPANY_INVALID |  445
PRODUCT_ACTIVATION_PENDING |  446
DEPLOYMENT_FAILED_ERROR |  424
DEPLOYMENT_NOT_INITIATED |  425
DEPLOYMENT_SUCCESS_METASTORE_UPDATE_FAILED |  211
## Automation Deployment API
External applications complying with the [Request](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm#API) section trigger the REST service.
The following screenshot shows a request triggered using REST client.
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with4.png)
The result can be verified by verifying the pods.
To get the list of pods running, use: kubectl get pods --all-namespaces.
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with5.png)
The above result is for model bank GL REPORT (EDS). The pods or jobs that are triggered are:
  * EDS (eds-all-*-driver)
  * DES
    * landing-table-*-update
    * landing-multipart-*-driver


## API Deployment Status
The API can be accessed to verify the deployment status. The following screenshots show the status of deployment.
Before Deployment
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with6.png)
Deployment In Progress
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with7.png)
Successful Deployment
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with8.png)
[](javascript:;)
# Working with Deployment Automation
05 August 2021 |
[Feedback](javascript:;)
This section explains how to automate the deployment for EDS.
##  Request
The API request for deployment automation is given below.
  * URL: https://<hostname>:<port>/UtilServices/tde_deployment_service/init
  * Method type: POST
  * Auth type: Basic
  * Content-Type: text/plain
  * [Request](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Json/eds_deployment_with_schedule_mode_final.zip)


### JSON Structure
The JSON structure for model bank, companies and DML operations are given below.
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with1.png)
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Model Bank](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
Single model bank or comma separated model banks can be passed.
The supported model banks are:
  * EOD REGULATORY EXTRACTS
  * EOD GL EXTRACTS


[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Companies](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
The supported values are:
  * master (runs for master company only)
  * all (runs for all companies)
  * company_code~mnemonic (single company)
  * company_code1~mnemonic1, company_code1~mnemonic1 (multiple companies)
GB0010001~BNK, NV0020001~BNK


[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)DML Operations](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
The supported operations are:
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Update](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with2.png)
```
UPDATE des_system_configuration set prop_value=’kafka’ where prop_key=’des_app_message_system’;
```

Copy
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Insert](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with3.png)
```
INSERT INTO des_system_configuration (prop_key,prop_value) values(‘des_app_message_system’,’kafka’)
```

Copy
[![Closed](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Skins/Default/Stylesheets/Images/transparent.gif)Replace](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm)
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with9.png)
```
REPLACE INTO des_system_configuration (prop_key,prop_value) values(‘des_app_message_system’,’kafka’),(‘des_app_ssl’,’Yes’);
```

Copy
## Response
The API response for deployment automation is given below.
  * Content-Type: text/plain
  * Status: Refer below table.
  * Text: SUCCESS /Other relevant messages

HTTP_STATUS | HTTP_STATUS_CODE
---|---
ENABLE_CONFIG_DATA_STORE_FAILED_ERROR |  512
TDE_INTERNAL_ERROR |  514
TDE_INTERNAL_METASTORE_ERROR |  515
DEPLOYMENT_IN_PROGRESS |  440
DUPLICATE_REQUEST_DEPLOYMENT_COMPLETED |  441
INPUT_JSON_INVALID |  442
INPUT_MODELBANK_INVALID |  443
INIT_PENDING |  444
INPUT_COMPANY_INVALID |  445
PRODUCT_ACTIVATION_PENDING |  446
DEPLOYMENT_FAILED_ERROR |  424
DEPLOYMENT_NOT_INITIATED |  425
DEPLOYMENT_SUCCESS_METASTORE_UPDATE_FAILED |  211
## Automation Deployment API
External applications complying with the [Request](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm#API) section trigger the REST service.
The following screenshot shows a request triggered using REST client.
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with4.png)
The result can be verified by verifying the pods.
To get the list of pods running, use: kubectl get pods --all-namespaces.
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with5.png)
The above result is for model bank GL REPORT (EDS). The pods or jobs that are triggered are:
  * EDS (eds-all-*-driver)
  * DES
    * landing-table-*-update
    * landing-multipart-*-driver


## API Deployment Status
The API can be accessed to verify the deployment status. The following screenshots show the status of deployment.
Before Deployment
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with6.png)
Deployment In Progress
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with7.png)
Successful Deployment
![](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Resources/Images/Extract%20Data%20Store/Working_with8.png)
In this topic
  * [Working with Deployment Automation](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm#WorkingwithDeploymentAutomation)
    * [Request](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm#Request)        
    * [Response](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm#Response)      
    * [Automation Deployment API](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm#AutomationDeploymentAPI)
    * [API Deployment Status](https://docs.temenos.com/docs/Solutions/Analytics/Data_Lake_for_Transact/Extract_Data_Store/Extract_Data_Store/Extract_Data_Store/Working_with.htm#APIDeploymentStatus)


x
You are now being directed to an external website. Temenos is not endorsing any provider of products or services by facilitating access to such websites via the weblinks on this site.
Temenos will not be responsible or liable, directly or indirectly for: a) the privacy of such websites b) the content of such websites c) any third party products or services made available on such websites nor for any damage, loss or offence caused or alleged to be caused in connection with the use of or reliance on such third party websites.
[Proceed](javascript:;)[Cancel](javascript:;)
### URL Copied
Your webpage URL has been copied
[OK](javascript:;)
##### Logout
x
Are you sure you want to exit?
Cancel
