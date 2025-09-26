* Count of lock time out exceeds the value configured in the F.LOCKING record (TIMEOUT.COUNT).
  * Last commit time exceeds review time interval.
  * There are activation or online services.
  * There are jobs with fixed bulk number.

## Prerequisites


Before you begin, you should have the following components available in your system:
  * TAFJ
  * All application servers
  * Active MQ broker attached to database

## Setting up Application Server


Procedure
  1. Deploy the following WAR files in the deployments folder.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues.png)
TAFJEE.war, TAFJJEE_Micro and TAFJConfiguration.war are available in TAFJ\appserver\micro. You can use this location to copy and deploy in standalone.
  2. Add the following system properties in T24.xml.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_1.png)
  3. Add the connection definition and transaction support properties for active MQ setup as shown below:
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_2.png)![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_3.png)

## Setting up AMQ


Procedure
  1. Set the java path in \apache-activemq-5.15.10\bin\win64\wrapper.conf.
```
# Java Application
wrapper.java.command=C:\WorkArea\DEV\Temenos\java\jdk
```

Copy
  2. Run InstallService.bat from bin. This starts the service.
  3. Add the following properties in the activemq.xml file (AMQ_HOME/conf) and restart the broker service.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_4.png) ![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_5.png)
  4. Go to Start > Run > services.msc and open the ActiveMQ service properties.
  5. Verify that Startup type is set to Automatic.
  6. Start the service.
  7. Use the [http://localhost:8161/admin/](http://localhost:8161/admin/) URL to verify if ActiveMQ is running. Log in using account admin and password admin.

## Configuring TAFJ Properties


Add the following properties in the TAFJ properties file:
temn.tafj.runtime.use.jmsqueues.for.services=true
temn.tafj.runtime.services.queue.pull.timeout=100

## Setting up Transact


Procedure
  * Specify ALL in the QUEUE.JOBS field to enable queue processing for all jobs.
  * Specify batch name to enable queue processing for all jobs in the batch. For example, BNK/SYSTEM.END.OF.DAY3.
  * Specify batch job to enable queue processing for a particular job in the batch. For example, BNK/SYSTEM.END.OF.DAY3-IC.COB.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_6.png)
The Active MQ screen shows the list of queues allocated and the number of messages yet to be consumed. It also shows the total number of messages enqueued and dequeued so far.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_7.png)
As per the above Transact setup, the jobs in batch record BNK/PR.EOD.PROCESS have used TAFJ_QUEUE_0 for processing.
Below como shows the queue in progress and the select agent populating the records.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_8.png)
Below como shows that the other agents have started the processing before the completion of the select agent.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Queues/Queues_9.png)
|  serviceadaptor.preprocessorimpl.class= com.temenos.microservice.fundsauthorisation. authenticate.FamsJwtGenerator
19 |  temn.fams.jwt.time.to.live |  JWT Token validity period in milliseconds |  temn.fams.jwt.time.to.live=60000
20 |  temn.msf.pdp.resource.type |  |  temn.msf.pdp.resource.type=API
21 |  temn.msf.pdp.resource.manager |  |  temn.msf.pdp.resource.manager=FAMS
22 |  temn.msf.stream.kafka.timeout.seconds |  Kafka Stream timeout in milliseconds |  temn.msf.stream.kafka.timeout.seconds=300000
23 |  temn.msf.ingest.thread.count |  This property will spawn the ingester thread according to the number configured. This number should match with Kafka partition number. |  temn.msf.ingest.thread.count=4       
24 |  tem.msf.disableInbox |  Property to disable the inbox/outbox feature in microservice. Since this feature is not used in FAMS microservice, the value has to be set explicitly as true. |  tem.msf.disableInbox=true
25 |  javax.net.ssl.trustStore |  SSL connection to external API (Transact Provider API). Path to the trust store file and this configuration to be done in application server (weblogic) |  javax.net.ssl.trustStore=C:\\\ssl_certs\\\temenosclient.jks (file location format for windows)
26 |  javax.net.ssl.trustStorePassword |  SSL connection to external API (Transact Provider API). Password to access the trust store and this configuration to be done in application server (weblogic). |  javax.net.ssl.trustStorePassword=Temenos123
27 |  javax.net.ssl.keyStore |  SSL connection to external API (Transact Provider API). Path to the key store file and this configuration to be done in application server (weblogic). |  javax.net.ssl.keyStore =C:\\\ssl_certs\\\temenosclient.jks (file location format for windows)
28 |  javax.net.ssl.keyStorePassword |  SSL connection to external API (Transact Provider API). Password to access the key store and this configuration to be done in application server (weblogic). |  javax.net.ssl.keyStorePassword=Temenos123
29 |  https.protocols |  SSL connection to external API (Transact Provider API). Cryptographic protocols that provide authentication and data encryption between servers, machines, and applications operating over a network. This configuration to be done in application server (weblogic). |  https.protocols=TLSv1.2
30 |  temn.msf.stream.kafka.transaction.enabled |  Property to enable/disable the Kafka transaction. When the property is set to ‘false’, the kafka transaction auto commit behavior is enabled. Hence, the offsets will be committed automatically after message consumption. |  temn.msf.stream.kafka.transaction.enabled =false
31 |  temn.msf.ingest.stream.kafka.consumer. poll.timeout.millis |  Property to set the timeout for Kafka consumptions in milliseconds. Default value is 2000. |  temn.msf.ingest.stream.kafka.consumer. poll.timeout.millis=10000
32 |  temn.msf.fams.events.producer.stream |  Topic name to which the lastEventFlag has to be published from binary ingester incase the original event didn’t succeed due to race condition. |  temn.msf.fams.events.producer.stream=fams_events_stream
33 |  temn.msf.stream.kafka.bootstrap.servers |  IP Address & port number of the Topic where the lastEventFlag has to be published |  temn.msf.stream.kafka.bootstrap.servers=10.94.4.70:29092
34 |  temn.msf.stream.producer |  Name of Topic producer |  temn.msf.stream.producer=fams_producer
Refer [LINK_a5c08f99] section to add properties related to configure client connection to Kafka.
DATABASE_VENDOR can be "mysql" or "mssql" or "oracle" or "postgresql"
[IMG_e351d1ed]
Once the deployment is done, the pods can be seen up and running.
[IMG_e94847bb]
**API - Health Check:**
The API below helps you to perform the health check of the pods that are up and running.
[IMG_d4e5387c]
**Data Ingester - Health Check:**
The API below helps you to perform the health check of the Data Ingester.
[IMG_111e65b9]
**Command Ingester - Health Check:**
The API below helps you to perform the health check of the Command Ingester.
[IMG_318938ff]
**Event Ingester - Health Check:**
The API below helps you to perform the health check of the Event Ingester.
[IMG_54082fcd]
To run cucumber scripts, run the following commands.
**K8 - PIT-FAMS**
mvn clean verify -U -DDB_HOST=localhost -DDB_PORT=4304 -DDB_VENDOR=MySQL -DDB_NAME=fundsauthorisation -DDB_USERNAME=root -DDB_PASSWORD=password -Dtemn.msf.stream.kafka.bootstrap.servers=kafka:29092 -Dtemn.msf.stream.vendor=kafka -Dtest=MSStandaloneRunnnerITTest.java
**K8 - PIT-FAMS-E2E**
mvn clean verify -U -DDB_HOST=localhost -DDB_PORT=4304 -DDB_VENDOR=MySQL -DDB_NAME=fundsauthorisation -DDB_USERNAME=root -DDB_PASSWORD=password -DT24_DB_VENDOR=h2 -DT24_DB_URL=jdbc:h2:tcp://localhost:3456/TAFJDB -DT24_DB_USER=t24 -DT24_DB_PWD=t24 -DT24_APPSERVER_URL=[URL_27453120] -Dtest=MSRunnnerITTest
# Connection Management


1 Min(s) read
To use Connection Management, you must connect to the Oracle database and set certain parameters. This feature is only available if an Oracle database is being used.
[Overview](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/Connection_Management/c_overview.htm)
Connection and resource management is available for the Temenos Transact Oracle database.
[Connecting to the Oracle database](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/Connection_Management/t_connecting-to-the-Oracle-database.htm)
Connect to the Oracle database using TAFJ runtime.
[Runtime attributes](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/Connection_Management/r-runtime-attributes.htm)
The values for attributes ACTION,MODULE and CLIENT_IDENTIFIER, for a particular connection, can be set by Temenos Transact at runtime.
##  Verifying JBoss Domain Cluster


Procedure
  1. Start JBoss Domain controller.
  2. Start JBoss App Slave servers.
  3. Navigate to the URL http://domain_server_IP:9990/console in your web browser. Log in with the administrative user and password.
  4. Click **Domain** tab. Server group “App-Server-Group”, server "App-server-one" on Slave server 1 and server "App-server-two" on Slave server 2 appears on the page.
  5. You can see the below screen once you have successfully setup a domain cluster. App-Tier JBoss cluster and Transact classic setup is completed.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S01-Runbook/img/verifying-jboss-domain-cluster-on-web-layer.png)

### Deploy MQ Resource Adapter


JBoss application server connects to WebSphere MQ through a resource adapter. This resource adapter (RA) must match the MQ server version. Get it from your MQ server installation.
Procedure
  1. Open domain.xml file under $JBOSS_HOME/domain/configuration by using the default text editor on master server.

```
vi $JBOSS_HOME/ domain/configuration
```

Copy


  2. Find the urn:jboss:domain:resource-adapters subsystem in the configuration file. Add the below resource adapter if there are no resource adapters defined for this subsystem.

```
<subsystem xmlns="urn:jboss:domain:resource-adapters:6.0"><resource-adapters><resource-adapter id="wmq.jmsra"><archive>wmq.jmsra.rar</archive><transaction-support>XATransaction</transaction-support></resource-adapter></resource-adapters></subsystem>
```

Copy
  3. Configure the resource adapter, with transaction support. Define a new connection factory (MQConnectionFactory) within a connection-definition section and queues mapping within admin-objects section. MQ hostname and port will be substituted dynamically from server start parameters.

```
<connection-definitions><connection-definition class-name="com.ibm.mq.connector.outbound.ManagedConnectionFactoryImpl" jndi-name="java:/MQConnectionFactory" tracking="false" pool-name="MQConnectionFactory"><config-property name="channel">T24.CHANNEL</config-property><config-property name="hostName"><MQ hostname/IP></config-property><config-property name="transportType">CLIENT</config-property><config-property name="queueManager">MQ1T24</config-property><config-property name="port">1414</config-property><xa-pool><max-pool-size>40</max-pool-size></xa-pool></connection-definition></connection-definitions>
```

Copy
  4. Jms objects definition must match the name defined during MQ installation. Change Queue Manager Name as shown below for corresponding admin-objects.

```
<admin-objects><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/TPSReplyQueue" enabled="true" use-java-context="false" pool-name="TPSReplyQueue"><config-property name="baseQueueName">T24.TPS.REPLYQUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24DDReplyQueue" enabled="true" use-java-context="false" pool-name="t24DDReplyQueue"><config-property name="baseQueueName">T24.DD.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/STEPOUTQueue" enabled="true" use-java-context="false" pool-name="STEPOUTQueue"><config-property name="baseQueueName">STEP.TPS.RSP</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24CBOBatchReplyQueue" enabled="true" use-java-context="false" pool-name="t24CBOBatchReplyQueue"><config-property name="baseQueueName">T24.CBOBATCH.REPLYQUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/ARCQueue" enabled="true" use-java-context="false" pool-name="ARCQueue"><config-property name="baseQueueName">T24.ARC.INPUT</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24AAIntQueue" enabled="true" use-java-context="false" pool-name="t24AAIntQueue"><config-property name="baseQueueName">T24.AAINT.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24IRISExtReplyQueue" enabled="true" use-java-context="false" pool-name="t24IRISExtReplyQueue"><config-property name="baseQueueName">T24.IRISEXT.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSNIClrReplyQueue" enabled="true" use-java-context="false" pool-name="t24TPSNIClrReplyQueue"><config-property name="baseQueueName">T24.TPS.NICLR.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24ARCMOBReplyQueue" enabled="true" use-java-context="false" pool-name="t24ARCMOBReplyQueue"><config-property name="baseQueueName">T24.ARC.MOBILE.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24XmlOfsQueue" enabled="true" use-java-context="false" pool-name="t24XmlOfsQueue"><config-property name="baseQueueName">T24.XML.OFS.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24CMBInterfaceReplyQueue" enabled="true" use-java-context="false" pool-name="t24CMBInterfaceReplyQueue"><config-property name="baseQueueName">T24.CMB.INTERFACE.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24AAExtQueue" enabled="true" use-java-context="false" pool-name="t24AAExtQueue"><config-property name="baseQueueName">T24.AAEXT.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TCIBCORPReplyQueue" enabled="true" use-java-context="false" pool-name="t24TCIBCORPReplyQueue"><config-property name="baseQueueName">T24.TCIB.CORP.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/SWEEPQueue" enabled="true" use-java-context="false" pool-name="SWEEPQueue"><config-property name="baseQueueName">BKQ.T24.MULT.SWEEP</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPHAckNackQueue" enabled="true" use-java-context="false" pool-name="t24TPHAckNackQueue"><config-property name="baseQueueName">T24.TPH.ACK.NACK.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24CALLATReplyQueue" enabled="true" use-java-context="false" pool-name="t24CALLATReplyQueue"><config-property name="baseQueueName">T24.CALLAT.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24DSFPACKAGERQueue" enabled="true" use-java-context="false" pool-name="t24DSFPACKAGERQueue"><config-property name="baseQueueName">T24.DSFPACKAGER.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPHAckNackReplyQueue" enabled="true" use-java-context="false" pool-name="t24TPHAckNackReplyQueue"><config-property name="baseQueueName">T24.TPH.ACK.NACK.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/DEALEMAILQueue" enabled="true" use-java-context="false" pool-name="DEALEMAILQueue"><config-property name="baseQueueName">BKQ.T24.DEAL.EMAIL</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24MSOFSReplyQueue" enabled="true" use-java-context="false" pool-name="t24MSOFSReplyQueue"><config-property name="baseQueueName">T24.MSOFS.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24AMLQueue" enabled="true" use-java-context="false" pool-name="t24AMLQueue"><config-property name="baseQueueName">T24.AML.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSQueue" enabled="true" use-java-context="false" pool-name="t24TPSQueue"><config-property name="baseQueueName">T24.TPS.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24DSFPACKAGERReplyQueue" enabled="true" use-java-context="false" pool-name="t24DSFPACKAGERReplyQueue"><config-property name="baseQueueName">T24.DSFPACKAGER.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSNIClrQueue" enabled="true" use-java-context="false" pool-name="t24TPSNIClrQueue"><config-property name="baseQueueName">T24.TPS.NICLR.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24OFSReplyQueue" enabled="true" use-java-context="false" pool-name="t24OFSReplyQueue"><config-property name="baseQueueName">T24.OFS.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TWSQueue" enabled="true" use-java-context="false" pool-name="t24TWSQueue"><config-property name="baseQueueName">T24.TWS.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSInstInReplyQueue" enabled="true" use-java-context="false" pool-name="t24TPSInstInReplyQueue"><config-property name="baseQueueName">BKQ.T24.MULT.CONF</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24SWFQueue" enabled="true" use-java-context="false" pool-name="t24SWFQueue"><config-property name="baseQueueName">T24.SWF.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/TPSACKQueue" enabled="true" use-java-context="false" pool-name="TPSACKQueue"><config-property name="baseQueueName">CMH.TPS.ACKQUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TCIBCORPQueue" enabled="true" use-java-context="false" pool-name="t24TCIBCORPQueue"><config-property name="baseQueueName">T24.TCIB.CORP.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24BROWSERReplyQueue" enabled="true" use-java-context="false" pool-name="t24BROWSERReplyQueue"><config-property name="baseQueueName">T24.BROWSER.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/OPIQueue" enabled="true" use-java-context="false" pool-name="OPIQueue"><config-property name="baseQueueName">BKQ.T24.MAIL.OPI</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24DDQueue" enabled="true" use-java-context="false" pool-name="t24DDQueue"><config-property name="baseQueueName">T24.DD.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/TPSOUTQueue" enabled="true" use-java-context="false" pool-name="TPSOUTQueue"><config-property name="baseQueueName">BKQ.T24.CMH.ANY</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24CALLATQueue" enabled="true" use-java-context="false" pool-name="t24CALLATQueue"><config-property name="baseQueueName">T24.CALLAT.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/STMTINTQueue" enabled="true" use-java-context="false" pool-name="STMTINTQueue"><config-property name="baseQueueName">BKQ.T24.BRK.STMTINT</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TCIBWEALTHReplyQueue" enabled="true" use-java-context="false" pool-name="t24TCIBWEALTHReplyQueue"><config-property name="baseQueueName">T24.TCIB.WEALTH.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24IRISIntReplyQueue" enabled="true" use-java-context="false" pool-name="t24IRISIntReplyQueue"><config-property name="baseQueueName">T24.IRISINT.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TCIBWEALTHQueue" enabled="true" use-java-context="false" pool-name="t24TCIBWEALTHQueue"><config-property name="baseQueueName">T24.TCIB.WEALTH.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSInstInQueue" enabled="true" use-java-context="false" pool-name="t24TPSInstInQueue"><config-property name="baseQueueName">BKQ.T24.MULT.CONF</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24CBOBatchQueue" enabled="true" use-java-context="false" pool-name="t24CBOBatchQueue"><config-property name="baseQueueName">T24.CBOBATCH.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/emailNotif" enabled="true" use-java-context="false" pool-name="emailNotif"><config-property name="baseQueueName">BKQ.CBO.MAIL.NOTIFY</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24OFSQueue" enabled="true" use-java-context="false" pool-name="t24OFSQueue"><config-property name="baseQueueName">T24.OFS.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/SWIFTReplyQueue" enabled="true" use-java-context="false" pool-name="SWIFTReplyQueue"><config-property name="baseQueueName">T24.SWF.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24SEATReplyQueue" enabled="true" use-java-context="false" pool-name="t24SEATReplyQueue"><config-property name="baseQueueName">T24.SEAT.REPLYQUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24RFOFSReplyQueue" enabled="true" use-java-context="false" pool-name="t24RFOFSReplyQueue"><config-property name="baseQueueName">T24.RFOFS.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24CMBInterfaceQueue" enabled="true" use-java-context="false" pool-name="t24CMBInterfaceQueue"><config-property name="baseQueueName">T24.CMB.INTERFACE.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TCIBQueue" enabled="true" use-java-context="false" pool-name="t24TCIBQueue"><config-property name="baseQueueName">T24.TCIB.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/TPSQueue" enabled="true" use-java-context="false" pool-name="TPSQueue"><config-property name="baseQueueName">T24.TPS.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/STEPINQueue" enabled="true" use-java-context="false" pool-name="STEPINQueue"><config-property name="baseQueueName">TPS.STEP.REQ</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/SWIFTQueue" enabled="true" use-java-context="false" pool-name="SWIFTQueue"><config-property name="baseQueueName">T24.SWF.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24IRISMetaDataQueue" enabled="true" use-java-context="false" pool-name="t24IRISMetaDataQueue"><config-property name="baseQueueName">T24.IRISMETADATA.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/T24MAILQueue" enabled="true" use-java-context="false" pool-name="T24MAILQueue"><config-property name="baseQueueName">BKQ.T24.MAIL.ANY</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TCIBReplyQueue" enabled="true" use-java-context="false" pool-name="t24TCIBReplyQueue"><config-property name="baseQueueName">T24.TCIB.REPLYQUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24BROWSERQueue" enabled="true" use-java-context="false" pool-name="t24BROWSERQueue"><config-property name="baseQueueName">T24.BROWSER.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24AAExtReplyQueue" enabled="true" use-java-context="false" pool-name="t24AAExtReplyQueue"><config-property name="baseQueueName">T24.AAEXT.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24SWFReplyQueue" enabled="true" use-java-context="false" pool-name="t24SWFReplyQueue"><config-property name="baseQueueName">T24.SWF.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24IRISIntQueue" enabled="true" use-java-context="false" pool-name="t24IRISIntQueue"><config-property name="baseQueueName">T24.IRISINT.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24IRISMetaDataReplyQueue" enabled="true" use-java-context="false" pool-name="t24IRISMetaDataReplyQueue"><config-property name="baseQueueName">T24.IRISMETADATA.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/TSYCONFQueue" enabled="true" use-java-context="false" pool-name="TSYCONFQueue"><config-property name="baseQueueName">BKQ.T24.DW.TSYCONF</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSReplyQueue" enabled="true" use-java-context="false" pool-name="t24TPSReplyQueue"><config-property name="baseQueueName">T24.TPS.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24ARCMOBQueue" enabled="true" use-java-context="false" pool-name="t24ARCMOBQueue"><config-property name="baseQueueName">T24.ARC.MOBILE.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24AAIntReplyQueue" enabled="true" use-java-context="false" pool-name="t24AAIntReplyQueue"><config-property name="baseQueueName">T24.AAINT.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/TPSACKReplyQueue" enabled="true" use-java-context="false" pool-name="TPSACKReplyQueue"><config-property name="baseQueueName">TPS.CMH.ACKREPLYQUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/TPSSTEPNULLRSPQueue" enabled="true" use-java-context="false" pool-name="TPSSTEPNULLRSPQueue"><config-property name="baseQueueName">TPS.NULL.RSP</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TWSReplyQueue" enabled="true" use-java-context="false" pool-name="t24TWSReplyQueue"><config-property name="baseQueueName">T24.TWS.REPLYQUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSStalRespQueue" enabled="true" use-java-context="false" pool-name="t24TPSStalRespQueue"><config-property name="baseQueueName">T24.TPS.STAL.RESP.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24EXECQueue" enabled="true" use-java-context="false" pool-name="t24EXECQueue"><config-property name="baseQueueName">T24.EXEC.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24TPSStalRespReplyQueue" enabled="true" use-java-context="false" pool-name="t24TPSStalRespReplyQueue"><config-property name="baseQueueName">T24.TPS.STAL.RESP.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24AMLReplyQueue" enabled="true" use-java-context="false" pool-name="t24AMLReplyQueue"><config-property name="baseQueueName">T24.AML.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24SEATQueue" enabled="true" use-java-context="false" pool-name="t24SEATQueue"><config-property name="baseQueueName">T24.SEAT.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24IRISExtQueue" enabled="true" use-java-context="false" pool-name="t24IRISExtQueue"><config-property name="baseQueueName">T24.IRISEXT.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24XmlOfsReplyQueue" enabled="true" use-java-context="false" pool-name="t24XmlOfsReplyQueue"><config-property name="baseQueueName">T24.XML.OFS.REPLY.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/STMTQueue" enabled="true" use-java-context="false" pool-name="STMTQueue"><config-property name="baseQueueName">BKQ.T24.MULT.STMTFIN</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24MSOFSQueue" enabled="true" use-java-context="false" pool-name="t24MSOFSQueue"><config-property name="baseQueueName">T24.MSOFS.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24RFOFSQueue" enabled="true" use-java-context="false" pool-name="t24RFOFSQueue"><config-property name="baseQueueName">T24.RFOFS.QUEUE</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object><admin-object class-name="com.ibm.mq.connector.outbound.MQQueueProxy" jndi-name="java:/queue/t24PayFeedbackQueue" enabled="true" use-java-context="false" pool-name="t24PayFeedbackQueue"><config-property name="baseQueueName">BKQ.T24.MULT.CONF</config-property><config-property name="baseQueueManagerName">MQ1T24</config-property></admin-object></admin-objects>
```

Copy
  5. Deploy the resource adapter from the JBoss admin console.
    1. Navigate to Deployments > Server Groups > App-Server-Group and click **Upload New Deployment**.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S01-Runbook/img/deploy-mq-resource-adapter-5.png)

    2. Browse wmq.jms.rar file and click **Next** to continue. Then, click **Finish** to deploy the rar file.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S01-Runbook/img/deploy-mq-resource-adapter-5b.png)
    3. MQ rar files are successfully deployed as shown below.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S01-Runbook/img/deploy-mq-resource-adapter-5c.png)

### Deploying Temenos Kafka


Procedure
  1. Open the domain.xml file under $JBOSS_HOME/domain/configuration by using the default text editor on master server.
  2. Find the urn:jboss:domain:resource-adapters subsystem in the configuration file. Add the below kafka resource adapter and new KafkaConnectionFactory connection factory to support kafka deployment.

```
<resource-adapter id="TemnKafkaRAR"><archive>TemnKafka.rar</archive><transaction-support>XATransaction</transaction-support><connection-definitions><connection-definition class-name="com.temenos.technology.kafka.outbound.TemnKafkaManagedConnectionFactory" jndi-name="java:/eis/KafkaConnectionFactory" enabled="true" pool-name="ConnectionFactory"><xa-pool><min-pool-size>1</min-pool-size><max-pool-size>20</max-pool-size><prefill>false</prefill><is-same-rm-override>false</is-same-rm-override></xa-pool></connection-definition></connection-definitions></resource-adapter>
```

Copy
  3. Deploy the Kafka resource adapter from the JBoss admin console.
  4. Navigate to Deployments > Server Groups > App-Server-Group.
    1. Click **Upload new Deployment** in the browser.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S01-Runbook/img/deply-kafka-resource-adapter.png)

    2. Select the TemnKafka.rar file.
    3. Click **Next** to continue. Then, click **Finish** to deploy rar file.
    4. Kafka deployment is successful as shown below.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S01-Runbook/img/kafka-deployment-success.png)

### Deploying Tb-Server


Procedure
  1. Open the JBoss admin console with URL - http://<hostname/IP>:9990/console.
  2. Click **deployments** and navigate to **Server Groups** > **App-Server-Group**.
  3. Click **Upload new deployment** and select tb-server.war file.
  4. Proceed **Next** with default option and click **Finish** for deployment.
  5. On successful Tb-Server deployment, verify the URL http://<hostname/Ip>:8090/tb-server/api/v1.0.0/meta/apis as shown below.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S01-Runbook/img/tb-server-deployment.png)
### Editing individual YAML files in the templates directory


You need to edit the _helpers.tpl file to allow the images to be pulled from your Azure Container Registry and also update the database connection string for Azure SQL Database. You can delete the Transact API templates as a separate API pod is not going to be deployed.
Procedure
  1. Change to the templates directory of your Helm chart.
cd /home/azureuser/r24-azure-scripts/transact/templates
  2. In _helpers.tpl, delete the following two lines that supply application version for app and web pod URLs.
```
{{- define "app.image"}}
{{- if .Values.image.registry }}
{{- .Values.image.registry | trimSuffix "/" }}{{ "/" }}
{{- end }}
{{- .Values.image.app.repository }}{{ ":" }}
{{- default .Values.appVersion }}{{ "." }}
{{- .Values.image.app.tag }}
{{- end }}

{{- define "web.image"}}
{{- if .Values.image.registry }}
{{- .Values.image.registry | trimSuffix "/" }}{{ "/" }}
{{- end }}
{{- .Values.image.web.repository }}{{ ":" }}
{{- default .Values.appVersion }}{{ "." }}
{{- .Values.image.web.tag }}
{{- end }}
```

Copy
Tip:
You can also delete the API snippet as a separate API pod is not going to be instantiated.
```
{{- define "api.image"}}{{- if .Values.image.registry }}{{- .Values.image.registry | trimSuffix "/" }}{{ "/" }}{{- end }}{{- .Values.image.api.repository }}{{ ":" }}{{- default .Values.appVersion }}{{ "." }}{{- .Values.image.api.tag }}{{- end }}
```

Copy
  3. Add the modified database connection string in _helpers.tpl as it is highlighted in **bold font** below.
```
Database connection string based on DB Type
*/}}
{{- define "database.connectionstring" }}
{{- if eq .Values.database.type "AzureSQL" }}
{{- "jdbc:sqlserver://" }}
{{- .Values.database.host }}{{ ":" }}{{ .Values.database.port | default 1433 }}{{ ";" }}
{{- "databaseName=" }}{{ .Values.database.database | default "transact" -}}{{ ";" }}
{{- " encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30" }}
{{- end }}
```

Copy
  4. Prevent the enabling of JWT token filter by changing the parameter value to **false** in _helpers.tpl.
{{- "-Dcom.temenos.te.api.enableJWTtokenFilter=**false** "| indent 1 }}
  5. Delete the following three files as you are not deploying the API pod:
     * api-deployment.yaml
     * api-hpa.yaml
     * service-lb.yaml
Important:
     * You only need those files if you want to have the API pod running in queue mode.
     * If you wish to have the Transact APIs running in queue less mode, you must deploy them in the app pod.

The user can configure the following Ingesters to install the FAMS in AWS.
[[IMG_0c36fb5b]Transact Ingester (Data Ingester)]([URL_77f1fa03])
The table below shows the properties involved in the configuration, their description, and the default values in the Transact Ingester.
Property |  Existing Value |  Update Allowed |  Description
---|---|---|---
MSF_DEPLOYMENT_ENV |  "" |  YES |  For multiple instances or deployments of a microservice in the same region, provide a unique value to the DEPLOYMENT_ENVIRONMENT property in the install scripts file, which creates unique resources. The user can specify the desired and compliant name for that specific instance If multi-deployment is needed.
ENV_SPECIFIC_NAME (Check one before ingester Lambda) |  fams-ingester-dataingester |  YES |  Indicates the Name of the Binary Ingester
AWS_ACCESS_KEY_ID |  20-Letter randomly generated String for each IAM user |  YES |  Indicates the AWS Access Key. The user can update the respective access key for the current IAM user.
AWS_SECRET_ACCESS_KEY |  40-letter randomly generated secret string for each IAM user |  YES |  Indicates the AWS secret Access Key. The user can update the respective secret access key for the current IAM user.  
AWS_REGION |  eu-west-2 (London) |  YES |  Indicates the region where we need to deploy our MS resources in AWS
temn_msf_logger_root_level |  INFO |  YES |  Indicates the Type of Log level. The allowed values are ERROR and DEBUG.
IRIS_HOST_IP |  127.0.0.1 |  YES |  Indicates the IRIS Host IP address
IRIS_PORT |  9089 |  YES |  Indicates the IRIS port number
temn_msf_schema_registry_url |  [URL_868d7249] |  YES |  Indicates the Schema Registry validating the schema that comes from T24
Business Logic ClassName (Example: COMPANYEvent, DATESEvent etc..) |  com.temenos.microservice.fundsauthorisation.ingester.BankDatesIngester, com.temenos.microservice.fundsauthorisation.ingester.CompanyIngester |  NO |  Indicates the Business Logic Class Names. ClassName should not be updated
Kinesis Stream name |  assembled-event-TRANSACT |  NO |  Indicates the Kinesis Stream Name Format: <topic>-<hostname> MS consumes from this Stream topic. Hence the modification is restricted.
temn.msf.ingest.multi.event.ingester.class |  com.temenos.microservice.fundsauthorisation.ingester.FamsAssembledEventsIngester |  NO |  Indicates the Business Logic Class Name. ClassName should not be updated     
temn.msf.ingest.source.stream |  assembled-event-TRANSACT |  NO |  Indicates the Stream Name Format: <topic>-<hostname> Topic name should not be changed
temn_msf_ingest_sink_error_stream |  error-TRANSACT |  YES |  Indicates the Error Stream Name Format: <topic>-<hostname> The user can chaneg the value. But the default value is recommended.
[[IMG_0c36fb5b]Binary Ingester]([URL_77f1fa03])
The table below shows the properties involved in the configuration, their description, and the default values in the Binary Ingester.
Property |  Existing Value |  Update Allowed |  Description
---|---|---|---
MSF_DEPLOYMENT_ENV |  "" |  YES |  For multiple instances or deployments of a microservice in the same region, provide a unique value to the DEPLOYMENT_ENVIRONMENT property in the install scripts file, which creates unique resources. The user can specify his desired and compliant name for that specific instance If multi-deployment is needed.
ENV_SPECIFIC_NAME (Check one before ingester Lambda) |  fams-ingester-binaryingester |  YES |  Indicates the Name of the Data Ingester
AWS_ACCESS_KEY_ID |  20-Letter randomly generated String for each IAM user |  YES |  Indicates the AWS Access Key. The user can update the respective Access key for the current IAM user.
AWS_SECRET_ACCESS_KEY |  40-letter randomly generated secret string for each IAM user |  YES |  Indicates the AWS secret Access Key. The user can update the respective secret access key for the current IAM user   
# Planning the Deployment


Before you start installing Temenos Transact in the IBM Cloud, review the deployment architecture, Temenos software, and Third party software prerequisites.

## Architecture


This guide shows how to install R24 Temenos Transact in IBM Cloud environment. It provides step-by-step instructions to install Transact and Transact Explorer. The below screen describes the architecture diagram for Transact deployment in the IBM Cloud.
![](https://docs.temenos.com/docs/R24/Solutions/Runbooks/R24-S14-Runbook/img/Reference-architecture.png)

### Selected Components in the Architecture


Temenos Transact
Temenos Transact is a functionally rich, flexible, and agile processing engine that enables banks to offer a wide spectrum of personalized, customer-relevant banking products.
Transact Database
You can use PostgreSQL as the Relational Database Management Software.
Transact Explorer
Transact Explorer is the new browser which is released as part of R24 AMR and it replaces UXP Browser. Transact Explorer has a modern layout engine, generates GUI screens faster, and consumes less hardware resources than its predecessors.
EventStore Microservices
EventStore Microservices helps to collect events raised from the individual Microservices and forwards it to the respective Microservice event using the streaming platform and this allows the bank to create deployment scripts (charts) based on their needs.
Temenos Microservices Ingester
Microservice Ingester function provides facility to ingest data from the record-keeping system to inform data events. The data ingestion framework provides a configuration-based facility to map extra fields received from the record-keeping system and stores the data values in the extension data.
IBM Cloud Container Registry
IBM Container Registry enables you to store and distribute Docker images in a managed, private registry.
IBM Cloud Databases for PostgreSQL
IBM Cloud Databases for PostgreSQL is database-as-a-service offering that enables you to spend more time building with high availability, backup orchestration, point-in-time-recovery (PITR) and read replica with ease.
# Configuring REST APIs


There is no specific configuration for this feature.
## Setting up Master Data Access Registry in Generic Configuration Micro-service


Implementation team registers the master data’s endpoint URL details in Generic configuration Micro-service. This registration is as per MDAL operations, which belongs to a Data Access Component.
The endpoint URL details registered for every MDAL operations in Generic configuration Micro-service is further referred by IRIS and TAFJ layers to extract data from an external system and that data is composed before sending to the Transact system.
For more information on Generic Configuration Micro-service deployment and configuration, see the [Generic Configuration Microservice](https://docs.temenos.com/docs/Solutions/Technology/Platform_Framework/x2/microservice/generic_config/generic_config.htm) user guide.
This section describes about Generic configuration Micro-service API URL and its payload syntax.
[![Closed](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Skins/Default/Stylesheets/Images/transparent.gif)Generic Configuration MS API URL Syntax ](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/MDAL/Configuring-the-MDAL-Framework.htm)
{Basic URL} / {API URL}
[![Closed](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Skins/Default/Stylesheets/Images/transparent.gif)Basic URL ](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/MDAL/Configuring-the-MDAL-Framework.htm)
It contains localhost and port where Generic Configuration MS is up and running.
http://localhost:port/ms-genericconfig-api/api/v1.0.0
[![Closed](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Skins/Default/Stylesheets/Images/transparent.gif)API URL ](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/MDAL/Configuring-the-MDAL-Framework.htm)
It contains groupId and configName category under which every Data Access Method’s endpoint URL can be stored. groupId is Data Access Component and configName is MDAL OperationId.
system/configurationGroups/{groupId}/configuration/{configName}
Example:
```
[URL_2ad9f31a]
```

Copy
Where, MDLPTY.Party is a data access component, which belongs to MDLPTY master data entity. It can have Data Access Method named getCustomerBasicDetails and its API deployed in another Micro-service system through which the required data will be extracted by Transact system if this MDLPTY is enabled as an external entity in the EB.MDAL.ENTITIES table. Hence, you can configure the endpoint URL in this way.
[![Closed](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Skins/Default/Stylesheets/Images/transparent.gif)Generic Configuration MS API Payload](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/MDAL/Configuring-the-MDAL-Framework.htm)
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/MDAL/Configuring%20the%20MDAL%20Framework_3.png)
Where, id and name should be MDAL operationId and data should be a Base64 encoded content of the corresponding Data Access Method’s endpoint URL details.
[![Closed](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Skins/Default/Stylesheets/Images/transparent.gif)Sample Endpoint Schema](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/MDAL/Configuring-the-MDAL-Framework.htm)
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/MDAL/Configuring%20the%20MDAL%20Framework_4.png)
The uri denotes the endpoint URL of an API deployed in an external system (for example, party Micro-service) to extract master data required for Transact system. That Party Micro-service can contain data of CUSTOMER table, thus CUSTOMER is enabled as MDAL application in EB.MDAL.ENTITIES table entity level record (that is, MDLPTY).
This way you can configure MDA registry details (API endpoint) in Generic Configuration Micro-service. Once done and if it is made accessible for Transact system then the data extraction from an external system through this endpoint URI will be taken care by IRIS for pre-composed mode and TAFJ layers whenever controlled MDAL operations are invoked INLINE from Transact system.
If an external system is a sub-system of Transact system, for example, TI system, then the endpoint schema would be,
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/MDAL/Configuring%20the%20MDAL%20Framework_5.png)
The above responseRoot value setup require only if the response received from Transact external system is in the format of header and body.
Refer IRIS user guide for more details about endpoint schema and how IRIS fetches this configuration details from Generic configuration MS.

##  Setting up TAFJ Properties and JBoss Startup File


This setup requires INLINE mode of processing in Transact system, to connect with Generic configuration Micro-service to fetch endpoint URL details through which the master data can be extracted from external system (for example, Party Micro-service) for an INLINE mode triggered from Transact system.
The Generic Configuration Micro-service API URL need to be configured in,
  1. Tafj <project>.properties file under the TAFJ/conf folder.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/MDAL/Configuring%20the%20MDAL%20Framework_6.png)
  2. In JBoss startup file, setup JBOSS_STARTUP variable.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/MDAL/Configuring%20the%20MDAL%20Framework_7.png)
This URL must have valid localhost and port where generic configuration Micro-service is hosted for this connection.

AWS_REGION |  eu-west-2 (London) |  YES |  Indicates the region the MS resources in AWS is deployed
temn_msf_logger_root_level |  INFO |  YES |  Indicates the Type of Log level. The allowed values are ERROR and DEBUG.
IRIS_HOST_IP |  127.0.0.1 |  YES |  Indicates the IRIS Host IP address
IRIS_PORT |  9089 |  YES |  Indicates the IRIS port number
Kinesis Stream name |  fams-events-stream-TRANSACT |  NO |  Indicates the Kinesis Stream Name Format: <topic>-<hostname> MS consumes from this Stream topic. Hence, modification is restricted.
temn.msf.ingest.generic.ingester |  com.temenos.microservice.fundsauthorisation.famsEvents.FamsEventsToT24Ingester |  NO |  Indicates the Business Logic Class Name. ClassName should not be updated.
temn.msf.ingest.source.stream |  fams-events-stream-TRANSACT |  NO |  Indicates the Stream Name Format: <topic>-<hostname> Topic name should not be changed.
temn_iris_fdata_enquiry_base_path |  [URL_cfa47c9c] |  YES |  Indicates that the IP can be changed. The user can update the API endpoint for IRIS provider container.
temn.iris.fdata.enquiry.resource.path |  system/metrics/dataEvents/pendings/itemCount |  YES |  Indicates that the property may vary based on the T24 release. The user can update the Resource path for pending reservation items.
temn_msf_ingest_sink_error_stream |  error-TRANSACT |  YES |  Indicates the Error Stream Name Format: <topic>-<hostname> The user can change the value. But the default value is recommended.
temn.msf.ingest.prep.event.wait.period |  5000 (Default) |  YES |  Indicates the prep event waiting period. The user can increase the waiting period based on the need.
temn.msf.ingest.prep.event.repeat.queue.check |  2 (Default) |  YES |  Indicates the repeat check on queue period. The user can increase the queue period based on the need.
Refer the [LINK_77126565] section for more information about the configuration.
## Deploying CAMT in On-premise


As a prereqisite, ensure if the Database server and Kafka server of choice ( postgresql or mongo ) are up and running.
The extracted HELM pack contains the following folders/files. We can use these to manage the deployment of the micro service.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Resources/Images/Account%20Reporting%20Events%20and%20Services/Deploy29.png)
Images required for the different components of the Micro Service are shipped in the package as tar files. These tar files should be loaded as images to the local container engine.
  1. Navigate to the **images** folder.
  2. Use docker load --input <image_name>.tar for loading the tar files as images to local container engine (For example, docker desktop).
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Resources/Images/Account%20Reporting%20Events%20and%20Services/Deploy16.png)
  3. Navigate to **scripts** folder and run ./start-stmtgenxml.sh aks $DATABASE_VENDOR.
DATABASE_VENDOR can be 'postgresql' or 'mongodb'.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Resources/Images/Account%20Reporting%20Events%20and%20Services/Deploy18.png)

Once the deployment is done, the following pods can be seen up and running.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Resources/Images/Account%20Reporting%20Events%20and%20Services/Deploy30.png) ![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Resources/Images/Account%20Reporting%20Events%20and%20Services/Deploy31.png)
URL of Ingester Health check follows the below structure.
Path structure is shown below.
```
[URL_f823a4a2]
```

Copy
PORT can be take from the Ingester Service ports.
For Example:
```
[URL_897959ee]
```

Copy
# Generating and Configuring JWT


This section helps you to generate and configure the JWT token.
While calling the IRIS Provider API from the microservice in the online mode, the JWT token available in the Microservice API HttpRequest context is passed to the service adaptor for calling the IRIS Provider API and hence there is no need for JWT token generation.
However, there is a need to generate a JWT token while calling Transact during and the SYNC phase when the FAMS updates Transact through the Temenos Transact IRIS Provider.
The below configuration has to be added in the commandIngester.properties.
```
serviceadaptor.preprocessorimpl.class=com.temenos.microservice.fundsauthorisation.authenticate.FamsJwtGenerator
```

Copy
FamsJwtGenerator is the implementation class containing the logic to generate the JWT token string.
When the property serviceadaptor.preprocessorimpl.class is configured, the serviceAdaptor, which is used to send the request to Temenos Transact IRIS API calls this JWT token generator class to get the token string and will attach it in the HttpRequest header before sending the request to IRIS Provider container.
The following is the example claims agreed with the Bank for creation of the JWT token in FAMS.
```
{    "iss": "TEMENOS",    "iat": 1587555809,    "exp": 1619091809,    "aud": "temenos.com",    "sub": "USER1",    "roleId": "[R1,R2]"}
```

Copy
For testing purpose, the following configurations are added in the commandIngester.properties to support the JWT token generation used for FAMS.
Property for roles is configured here for testing only. In a live deployment the role values will be obtained from Bank’s LDAP or another appropriate server.
```
temn.fams.jwt.issuer = "TEMENOS"temn.fams.jwt.audience = "temenos.com"temn.fams.jwt.user.roles="INPUTT:[R1|R2],user2:[R2],user3:[R3],user4:[R4],ADMIN:[R1|R2|R3|R4]";temn.fams.jwt.systemUser = ADMINtemn.fams.jwt.time.to.live = 5000
```

Copy
# Configuring Warmup Feature


2 Min(s) read
This section provides details about configuring the components involved in executing the warmup feature.

## Configuring Platform Framework – TAFJ


To configure TAFJ for the warmup feature,
  1. Go to ..\Temenos\jboss\standalone\deployments\TAFJJEE_EAR.ear\TAFJJEE_EJB.jar\META-INF\.
  2. Modify the ejb-jar.xml file as shown in the below screen captures.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Warmup/Configuring%20Warmup%20Feature.png)![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Warmup/Configuring%20Warmup%20Feature_1.png)

TAFJ is configured successfully for the warmup feature.

## Configuring REDIS External Cache


Redis is an external open source caching system, which temporarily stores information as key value structures. Transact loads into its internal cache bucket if REDIS mechanism is not used, thus making it optional.
To configure REDIS external cache for the warmup feature, go to .../TAFJ/Conf/tafj.property and set the below properties.
  * Specify if you have to use external distributed cache for Transact
temn.tafj.runtime.use.external.caching = true
  * Specify the host name to access shared distributed cache
temn.tafj.cache.host=127.0.0.1
  * Specify the port to access shared distributed cache
temn.tafj.cache.port=6379

REDIS is configured successfully for the warmup feature.

## Configuring Transact


You need to configure warmup in Transact at the individual channel level. To configure Transact for the warmup feature,
  1. Identify the channel (OFS.SOURCE) based on the nature of the channel’s business transaction
  2. Add the attribute WARMUP to the identified channel (OFS.SOURCE) to indicate that the channel requires a warmup.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Warmup/Configuring%20Warmup%20Feature_3.png)
# Deploying CAMT in On-premise


On-premises Kubernetes refers to the deployment and management of Kubernetes clusters within an organization's own data center or a private cloud infrastructure. Unlike managed Kubernetes services provided by cloud providers, on-premises Kubernetes requires organizations to set up, configure, and maintain Kubernetes clusters.

## Pre-requisites


Ensure the following pre-requisite opensource software (freely available in market) installed in your system.
  * Helm
  * Kubernetes command-line tool, 'kubectl'
  * OpenJDK11
  * Gitbash (if OS is Windows)
  * Container Engine (Example: Docker Desktop )
  * Apache Kafka and Zookeeper - Can be installed using sample files available in MS pack
  * Databases - Can be installed using sample files available in MS pack

For installation issues, check the open forum available in the market. For version compatibility issues with the microservice, connect with the microservice product team.

## Configuring On-premise Kubernates


To deploy CAMT,
  1. Navigate inside stmtgenxml and unzip Pack/scripts/common/stmtgenxml.env.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Resources/Images/Account%20Reporting%20Events%20and%20Services/Deploy28.png)
  2. Run the below configuration in stmtgenxml.env.

```
# Configurations
APP_ENVIRONMENT_NAME=dev
MS_NAMESPACE=stmtgenxml
FILE_MOUNTPATH=//run//desktop//mnt//host//c//testing//
STREAMING_KAFKA_BOOTSTRAP_SERVERS=transactdessur.servicebus.windows.net:9093
SCHEMA_REGISTRY=[URL_f70ebf8d]
```

Copy
[![Closed](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Skins/Default/Stylesheets/Images/transparent.gif)Configurable Properties](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/IZCAMT/Account_Reporting_Events_and_Services/Deployment_Instructions/ct_Onpremise_camt.htm)
Below are the configurable properties.
PROPERTY |  DEFAULT VALUE |  DESCRIPTION |  File name and Location
---|---|---|---
MongoDB Database Configuration |
DATABASE_MONGODB_NAME |  ms_stmtgenxml |  Indicates the name of the Database |  stmtgenxml.env scripts/common/stmtgenxml.env
DATABASE_MONGODB_CONNECTIONSTRING |  mongodb://mongodb-0.mongodb-svc.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-svc.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-svc.mongodb.svc.cluster.local:27017 |  Indicates the URL to connect to the mongodb instance |  service.env scripts/common/service.env
DATABASE_MONGODB_USERNAME |  root |  Indicates the Username |  stmtgenxml.env scripts/common/stmtgenxml.env
DATABASE_MONGODB_PASSWORD |  ENC(0jDFL9aa9VbB/KfSH6zfEQ==) |  Indicates the Password |  stmtgenxml.env scripts/common/stmtgenxml.env
PostgreSQL Database Configuration |
DATABASE_POSTGRESQL_CONNECTIONSTRING |  jdbc:postgresql://stmtgenxml-postgresqldb-service.stmtgenxmlpostgresql.svc.cluster.local:4000/stmtgenxmldb |  Indicates the URL to connect to the postgresql instance |  stmtgenxml.env scripts/common/stmtgenxml.env
DATABASE_POSTGRESQL_USERNAME |  stmtgenxmlusr |  Indicates the Username |  stmtgenxml.env scripts/common/stmtgenxml.env
DATABASE_POSTGRESQL_PASSWORD |  stmtgenxmlpass |  Indicates the Password |  stmtgenxml.env scripts/common/stmtgenxml.env
DATABASE_POSTGRESQL_DBNAME |  stmtgenxmldb |  Indicates the name of the Database |  stmtgenxml.env scripts/common/stmtgenxml.env
Security |
temn_msf_security_authz_enabled |  false |  Enable/Disable the XACML policy authorization. XACML policy authorization is used to configure security policies and access rights to information for APIs. |  stmtgenxml.env scripts/common/stmtgenxml.env
Security |
ENABLE_XACML |  true |  Enable/Disable the XACML policy authorization. XACML policy authorization is used to configure security policies and access rights to information for APIs. |  stmtgenxml.env scripts/common/stmtgenxml.env
Authentication |  |  |
MS_SECURITY_TOKEN_CHECK_ENABLE |  Y |  Enable/Disable the XACML policy Authentication |  stmtgenxml.env scripts/common/stmtgenxml.env
JWT_TOKEN_ISSUER |  Fabric
JWT_TOKEN_PRINCIPAL_CLAIM |  sub
JWT_TOKEN_PUBLIC_KEY |  <Encoded public key>
For example, under CustomerService, the operations getPhysicalAddress, getAccountOfficer and so on are listed. This user guide explains the catalog flow service operations and their corresponding flow methods and types.
[LINK_7ea1c116]
Enterprise Deployment Pattern (EDP) is an industry standard to indicate that any data artefact deployed to the system must be sent to the database instead of user directories. This guide describes the advanced deployment process of T24PackageInstaller and sample package content for both successful and unsuccessful deployment scenarios.
[LINK_b551ad97]
Document Management (DM) enables bank to manage the documents received from customers for various purposes at transaction level. This guide explains the design and processing with examples.
[LINK_2eaeca0c]
The file upload functionality allows simple delimited files to create records in Temenos Transact.
[LINK_17bd61f6]
The Auto Unique ID Generation facility allows Transact to generate unique IDs for transactions using the underlying Platform (TAFj) Function, to improve the performance.
[LINK_450cc5d0]
This feature facilitates to log the information of transactions such as online and batch into [LINK_ffb70395], which is an external monitoring tool. For more information on Grafana, see [LINK_19477bd2].
[LINK_de37dce8]
Temenos Transact is based on Gregorian calendar, which is the standard business calendar used in the international banking markets. This section guides the banks to enter the date, based on its country specific calendar such as Hijri or Ethiopian for creating transaction.
[LINK_28ef9b6e]
Temenos Transact provides utilities to perform the cloud operations more efficiently. This section describes how to improve the cloud operations effectively.
[LINK_e1ff8b93]
When installing Transact through SS2021, certain restrictions are enforced during implementation. This section describes the restrictions in adding applications and new routines to various user exits, and amendment of existing routines and records in an application.
[LINK_6121e64e]
This section helps you to configure JSON Web Token (JWT), which is a security token validation.
[LINK_76d54cca]
Warmup functionality helps to reduce the time taken for the transactions to complete. This guide explains required configuration of the Warmup functionality and details of supported applications.
[LINK_f0f07429]
Temenos Transact can emit the Data Event Streaming (DES) as Data Events. This section explains the required configuration to emit Data Events for Temenos Transact application.
#  Stack 1 Multi-tier Architecture Runbook


Red Hat and Temenos have defined a recommended deployment architecture that provides scalability and high availability for Temenos Core Banking running on the Red Hat Platform.
This Runbook describes how to configure TAFJ-Transact on the recommended architecture. After completing the deployment, you can perform business operations in Transact using Transact Explorer. This runbook is relevant to all post R22 AMR releases up to and including R24 AMR.
This runbook does not tell you how to install third-party software. For more information, see the relevant vendor's documentation.

## Scope


This runbook covers the following topics:
  * Installing and configuring multi-tiered JBoss EAP 7.4
  * Installing TAFJ and Transact
  * Deploying Transact artefacts
  * Setting up IBM MQ
  * Deploying Transact and TAFJ artefacts in JBoss EAP 7.4

## Audience


This guide is primarily meant for developers and technical consultants who want to deploy TAFJ-Transact-R24 on distributed multi-tiered JBoss EAP 7.4 clusters and access it through Transact Explorer and UXP browser.

## Skills


You need a basic understanding of both TAFJ-Transact and JBoss application servers to use this runbook for the Transact deployment.

## Stack Tables And Other Stack Runbooks


To find out more about the software that's supported in stack 1, see the R24 stacks table in the Temenos [BaseCamp](https://basecamp.temenos.com/s/stack-verification). You'll also find our other stack runbooks.   

## Conventions


Convention |  Description
---|---
Bold typeface |  Indicates GUI elements that are associated with an action and terms used in the body of the text.
_Italic typeface_ |  Indicates placeholder variables and publication titles.
Monospace typeface
|  Indicates the following textual content.
  * Commands
  * Variables
  * Code blocks and snippets
  * Text that you enter (user input)
  * URLs


**Procedure** |  Indicates the start of a procedure.
Pre-requisite is temn.fams.log.show.all property should be true |  temn.fams.log.stopOrReplaySync=true
21 |  temn.fams.log.retryAccountSyncResponse |  RetryAccountSync API: Enable/Disable the logging of response. Pre-requisite is temn.fams.log.show.all property should be true |  temn.fams.log.retryAccountSyncResponse=true
22 |  temn.fams.log.setFundsAuthorisationStatus |  SetFundsAuthorisationStatus API: Enable/Disable the logging of response. Pre-requisite is temn.fams.log.show.all property should be true |  temn.fams.log.setFundsAuthorisationStatus=true
23 |  temn.msf.security.authz.enabled |  Enabling the authorisation for FAMS microservice |  temn.msf.security.authz.enabled=true
24 |  PDP_CONFIG |  Location where XACML configuration file is placed |  PDP_CONFIG=classpath:xacml/pdp-config.xml
25 |  temn.msf.pdp.resource.type |  XACML configuration for Resource Type |  temn.msf.pdp.resource.type=API
26 |  temn.msf.pdp.resource.manager |  XACML configuration for Resource Manager |  temn.msf.pdp.resource.manager=FAMS
27 |  tem.msf.disableInbox |  Property to disable the inbox/outbox feature in microservice. Since this feature is not used in FAMS microservice, the value has to be set explicitly as true. |  tem.msf.disableInbox=true
28 |  javax.net.ssl.trustStore |  SSL connection to external API (Transact Provider API). Path to the trust store file and this configuration to be done in application server (weblogic).  |  javax.net.ssl.trustStore=C:\\\ssl_certs\\\temenosclient.jks (file location format for windows)
29 |  javax.net.ssl.trustStorePassword |  SSL connection to external API (Transact Provider API). Password to access the trust store and this configuration to be done in application server (weblogic). |  javax.net.ssl.trustStorePassword=Temenos123
30 |  javax.net.ssl.keyStore |  SSL connection to external API (Transact Provider API). Path to the key store file and this configuration to be done in application server (weblogic). |  javax.net.ssl.keyStore =C:\\\ssl_certs\\\temenosclient.jks (file location format for windows)
31 |  javax.net.ssl.keyStorePassword |  SSL connection to external API (Transact Provider API). Password to access the key store and this configuration to be done in application server (weblogic). |  javax.net.ssl.keyStorePassword=Temenos123
32 |  https.protocols |  SSL connection to external API (Transact Provider API). Cryptographic protocols that provide authentication and data encryption between servers, machines, and applications operating over a network. This configuration to be done in application server (weblogic). |  https.protocols=TLSv1.2
33 |  temn.fams.log.getReconciliationData |  GetReconciliationData API: Enable/Disable the logging of response. Pre-requisite is “temn.fams.log.show.all” property should be true |  temn.fams.log.getReconciliationData=true
34 |  temn.fams.forced.posting.restricts |  Posting Restricts ID to be considered for validation during Forced Reservation (tactical solution). This property must be removed when strategical solution is implemented as it will not be required. |  temn.fams.forced.posting.restricts=21,22,36,44,45,46,47,48,49,76
35 |  temn.msf.ingest.reprocess.source.stream |  Name of Topic to which the error events are published. |  temn.msf.ingest.reprocess.source.stream=fams-error-reprocess-stream
36 |  ms.security.tokencheck.enabled |  Property to enable JWT validation. Setting ‘Y’ will enable it. Default value is ‘N’. |  ms.security.tokencheck.enabled=Y
Refer [LINK_a5c08f99] section to add properties related to configure client connection to Kafka.
# DES Configurations


Both FAMS and AMS use the same DES configuration for assembled events. The following configuration has to be added.
Folder Name: \Temenos\DES\des-docker\src\main\resources\des-config
File Name: des-kafka-t24.properties
Configurations :
  * Transact Data from Production Load & Initial Load to be published in a same topic. To do this, the following configuration is done.
Initial Load data will be stored in the <CompanyCode>_DATA_EVENTS_ILP tables.
Event Pull Adapter
```
temn.des.epa.data-event.tables = F_DATA_EVENTS,FBNK_DATA_EVENTS,FSG1_DATA_EVENTS,FACU_DATA_EVENTS,FDBU_DATA_EVENTS,FEU1_DATA_EVENTS,FSGP_DATA_EVENTS,F_DATA_EVENTS_ILP,FBNK_DATA_EVENTS_ILP,FSG1_DATA_EVENTS_ILP,FACU_DATA_EVENTS_ILP,FDBU_DATA_EVENTS_ILP,FEU1_DATA_EVENTS_ILP,FSGP_DATA_EVENTS_ILP
```

Copy
The above configuration is done based on Model Bank setup here for testing, but this should be updated as per bank’s company configuration.
If the DES is already running, then the above properties has to be installed.
    * Amend the properties in the existing DES configuration and install it.
    * Run the config installer again.
  * Event Processor
```
temn.des.ep.topic.sink.event.assembled = assembled-event
temn.des.ep.event.assembly.definitions = ams
temn.des.ep.event.assembly-ams.filter.pattern = entityName=(.*)
temn.des.ep.event.assembly-ams.filter.matcher.type = REGEX
```

Copy

The above configuration is done based on FAMS and AMS using the same DES assembly event called ams.
# Service Processing using IRIS APIs


IRIS R18 is a lightweight, standalone component of Temenos Interaction Framework. Provider APIs are simple services that expose specific core capabilities as a proprietary API. These APIs are building blocks that expose Temenos business capabilities as RESTful APIs defined in Open API Specification (Swagger).
Currently, there is a set of service automation provider APIs to perform all service related activities like:
  * Create or update a BATCH record
  * Create or update a WORK LOAD PROFILE record
  * Create or update a service record
  * Retrieve details related to service executions

## Prerequisite


The IRIS WAR file with promoted set of IRIS R18 API endpoints should be successfully deployed and available in the application server.

## Service Automation APIs


This section shows the list of existing Service Automation APIs.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview.png)
Click [here](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Infrastructure/System_Core/Service_Automation/system-ServiceAutomation-swagger.json) to view the swagger document for service automation.

## Executing COB using APIs


The section shows you an example on how to execute and view details of COB using APIs. The REST client used is POSTMAN to execute APIs.
In this example, the following steps are shown:
  1. A workload profile (PROFILETWO) is created with number of agents as 1 using API.
  2. The workload profile is modified to increase the number of agents to 2.
  3. TSM service is started using API.
  4. COB service is started using API.
  5. TSM is run from the servlet (doesn’t involve API execution).
  6. Check COB Progress.
  7. Check JOB Progress.
  8. Check COB Status after its completion.
  9. Stop TSM.

The following screen captures show the status of dates and workload profile before running the COB.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_2.png)
In the above screen capture, you can see that the current date is 17 APR 2019 and once the COB runs successfully, the date should change to the next working day 18 APR 2019.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_3.png)
In the above screen capture, there is no existing workload profile for PROFILETWO in the system.

### Starting the COB Execution Process


Procedure
  1. Execute a POST request to create a workload profile record with number of agents as 1 in the system.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_4.png)
The PROFILETWO workload profile is now created.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_5.png)
  2. Execute a PUT request to modify the number of agents to 2 in PROFILETWO.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_6.png)
The PROFILETWO workload profile is now modified.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_7.png)
TSM record is initially in Stop status.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_8.png)
  3. Execute a PUT request to modify the service control to Start.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_9.png)
The TSM record moves to Start status.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_10.png)
The COB service is initially in Stop status.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_11.png)
  4. Execute a PUT request to modify the service control to Start.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_12.png)
The COB service moves to Start status with the workload profile PROFILETWO.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_13.png)
  5. Execute COB using servlet.
![](https://docs.temenos.com/docs/R24/Solutions/T24_Transact/Infrastructure/EB/Resources/Images/Using%20IRIS%20R18%20APIs/Overview_14.png)
## Scope


This installation and configuration guide covers the following stages of deployment:
  * Creation of a Kubernetes cluster in Azure with Temenos infrastructure scripts including additional resources such as container image repository (Azure Container Registry) and developer server (VM)
  * Building Transact Artefacts
  * Instantiating Transact containers in the provisioned Kubernetes cluster using Helm
  * Verification of the deployment
## Deploying FAMS in Kubernetes Runtime


To deploy the fundsauthorisation Docker package,
  1. Unzip the ms-fundsauthorisation-package-docker-<release_number>.zip.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_12.png)
The extracted package contains the configuration files for the docker, K8 with respective .bat and .sh files as shown in the image below.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_13.png)
  2. Open a command prompt in an on-premise folder.
Note: If Strimzi is not installed in the system, navigate into the streams folder and run ./strimzi-install.sh.This is a one-time step and should be repeated if the Kubernetes cluster is reset.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_14.png)

**Memory Request | Memory Limit**
The table below shows the List of services with its Memory request and Memory limit.
Services |  Memory Request  |  Memory Limit
---|---|---
API |  500M |  700M
Ingester |  500M |  700M
  1. Navigate to k8/on-premise. Open a command prompt and execute either of the below commands which creates an image and a k8 container for the image.
**Windows** : start-fams-mysql.bat / start-fams-oracle.bat / start-fams-postgresql.bat / start-fams-mssql.bat
**Linux** : start-fams-mysql.sh / start-fams-oracle.sh / start-fams-postgresql.sh / start-fams-mssql.sh

  1. After the successful deployment, once the fams microservice is up and running in kubernetes, execute kubectl get pods -A to check if all the pods are up and running.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_15.png) ![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_16.png)
  2. Check the APIs in the package.
URL of API's follows the below structure:
Base Path: http://<IP_ADDRESS>:<PORT>/<context-root>/api/<version>/
For Example: http://localhost:8091/ms-fundsauthorisation-api/api/v1.0.0/ Resource path of the endpoint can be found in the swagger document. A sample endpoint of FAMS MS can be http://localhost:8091/ms-fundsauthorisation-api/api/v1.0.0/system/fundsAuthorisation/status.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_17.png)
Alternatively, the status of microservice can be obtained through the health check API.
  3. For Ingestion,
     * If DES and Fundsauthorisation MS are running in a different machine, update DES IP for Kafka and Schema registry in values.yml file.
     * If Kafka runs in a different machine, set KafkaAliases property value to "Y" and update the IPs as well.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_18.png)
     * Change the IP address of IRIS_HOST_IP provided in start-fams-<db>.bat/start-fams-<db>.sh to the respective t24 IP.
![](https://docs.temenos.com/docs/R24/Solutions/Technology/Microservices/MSSSFA/Resources/Images/Deploying_FAMS_in_Kubernetes_Onpremise/Deploying%20FAMS%20in%20Onpremise_19.png)

To stop and remove the existing container, execute either of the below commands from the location where the fundsauthorisation docker is started.
**Windows** : stop-fams-mysql.bat / stop-fams-oracle.bat / stop-fams-postgresql.bat / stop-fams-mssql.bat
**Linux** : stop-fams-mysql.sh / stop-fams-oracle.sh / stop-fams-postgresql.sh / stop-fams-mssql.sh
[[IMG_0c36fb5b]Configurable Properties]([URL_5a4aa266])
The values provided in the table below are available in the start scripts. These are overwritten in the values.yaml.
PROPERTY |  DEFAULT VALUE |  DESCRIPTION | Additional Information |
---|---|---|---|---
MYSQL Database Configuration |  The same values in values.yaml will be overwritten if provided in the start scripts. Start scripts are present inside ms-party-package-docker-<release_number>\ms-party-docker\k8\on-premise |
DATABASE_KEY |  sql |  Indicates the DatabaseKey
DBNAME |  fundsauthorisation |  Indicates the name of the Database
DB_CONNECTION_URL |  jdbc:mysql://fundsauthorisation-db-lbservice.mysql.svc.cluster.local:4304/fundsauthorisation |  Indicates the URL to connect to the MySQL instance
MYSQL_CRED |  N |  Indicatesif the Variable is set to "Y/N", will be enabled or disabled
DB_USERNAME |  root |  Indicates the Username
DB_PASSWORD |  ENC(UkVh159cW4Mc/5njVCDlWg==) |  Indicates the Password
MSSQL Database Configuration
DATABASE_KEY |  sql |  Indicates the DatabaseKey
MSSQL_CRED |  N |  Indicates if the Variable is set to "Y/N", will be enabled or disabled
DB_CONNECTION_URL |  jdbc:sqlserver://172.29.224.1:4900;databaseName=fundsauthorisation |  Indicates the URL to connect to the MSSQL instance
DB_USERNAME |  sa |  Indicates the Username
DB_PASSWORD |  Rootroot@12345 |  Indicates the Password
Oracle Database Configuration
DATABASE_KEY |  sql |  Indicates the DatabaseKey
ORACLE_CRED |  N |  Indicates if the Variable is set to "Y/N", will be enabled or disabled
DB_CONNECTION_URL |  jdbc:oracle:thin:@host.docker.internal:51521/ORCLPDB1 |  Indicates the URL to connect to the oracle instance
DB_USERNAME |  system |  Indicates the Username
DB_PASSWORD |  Oracle_1 |  Indicates the Password
Postgresql Database Configuration
DATABASE_KEY |  sql |  Indicates the DatabaseKey
POSTGRESQL_CRED |  N |  Indicates if the Variable is set to "Y/N", will be enabled or disabled
DB_CONNECTION_URL |  jdbc:postgresql://fundsauthorisation-postgresqldb-lbservice.postgresql.svc.cluster.local:4300/fundsauthorisation |  Indicates the URL to connect to the postgresql instance
DB_USERNAME |  root |  Indicates the Username
DB_PASSWORD |  password |  Indicates the Password
COMMON DB PROPERTIES
MAX_POOL_SIZE |  "10" |
MIN_POOL_SIZE |  "5" |
temn_msf_db_pass_encryption_key |  temenos |  Indicates the key to decrypt the password
temn_msf_db_pass_encryption_algorithm |  PBEWithMD5AndTripleDES |  Indicates the algorithm to decrypt the password
Logger
logger_root_level |  ERROR |  ERROR,INFO,DEBUG are the three values present for logger.
Security
temn_msf_security_authz_enabled |  false |  Enable/Disable the XACML policy authorization. XACML policy authorization is used to configure security policies and access rights to information for APIs.
Entitlement
temn_entitlement_service_enabled |  false |  Enable/Disable the entitlement service. If the property is enabled, the roles and permissions needed for the authentication will be taken from the entitlement microservices.
Metrics
publisherPort |  9091 |
publisherHost |  127.0.0.1 |
metricsDisabled |  true |
Kafka Aliases
kafkaAliases |  N |  If Kafka runs in a different server, set this to "Y" and add all the aliases ip
To deploy FAMS in onpremise,
  1. Extract the Helm Pack:
The extracted HELM pack contains the following folders/files.
[IMG_60d93857]
  2. Load the Images to Docker desktop:
    1. Navigate to the **images** folder.
    2. Use docker load --input <image_name>.tar for loading the built images to local docker desktop.
[IMG_9100f5b7]
