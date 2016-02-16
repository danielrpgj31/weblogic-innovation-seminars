#Configuration for medrec application in dev_domain
connect('weblogic','welcome1','t3://localhost:9001')
edit()

startEdit()
cd('/')
cmo.createVirtualTarget('VT-Medrec-1')
cd('/VirtualTargets/VT-Medrec-1')
cmo.setHostNames(array(["localhost"],java.lang.String))
cmo.setUriPrefix('/devDP')
set('Targets',jarray.array([ObjectName('com.bea:Name=AdminServer,Type=Server')], ObjectName))
activate()

startEdit()
cd('/')
cmo.createPartition('Medrec-Dev')
cd('/Partitions/Medrec-Dev/SystemFileSystem/Medrec-Dev')
cmo.setRoot('/u01/wins/wls1221/user_projects/domains/base_domain/partitions/Medrec-Dev/system')
cmo.setCreateOnDemand(true)
cmo.setPreserved(true)
cd('/Partitions/Medrec-Dev')
set('AvailableTargets',jarray.array([ObjectName('com.bea:Name=VT-Medrec-1,Type=VirtualTarget')], ObjectName))
set('DefaultTargets',jarray.array([ObjectName('com.bea:Name=VT-Medrec-1,Type=VirtualTarget')], ObjectName))
activate()

startEdit()
cmo.createResourceGroup('appRG')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG')
cmo.setUseDefaultTarget(false)
set('Targets',jarray.array([ObjectName('com.bea:Name=VT-Medrec-1,Type=VirtualTarget')], ObjectName))
activate()


startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG')
cmo.createJDBCSystemResource('MedRecGlobalDataSourceXA')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA')
cmo.setName('MedRecGlobalDataSourceXA')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA/JDBCDataSourceParams/MedRecGlobalDataSourceXA')
set('JNDINames',jarray.array([String('jdbc/MedRecGlobalDataSourceXA')], String))
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA')
cmo.setDatasourceType('GENERIC')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA/JDBCDriverParams/MedRecGlobalDataSourceXA')
cmo.setUrl('jdbc:oracle:thin:@//localhost:1521/pdborcl')
cmo.setDriverName('oracle.jdbc.xa.client.OracleXADataSource')
cmo.setPassword('medrec1')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA/JDBCConnectionPoolParams/MedRecGlobalDataSourceXA')
cmo.setTestTableName('SQL ISVALID\r\n\r\n')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA/JDBCDriverParams/MedRecGlobalDataSourceXA/Properties/MedRecGlobalDataSourceXA')
cmo.createProperty('user')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA/JDBCDriverParams/MedRecGlobalDataSourceXA/Properties/MedRecGlobalDataSourceXA/Properties/user')
cmo.setValue('medrec1')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JDBCSystemResources/MedRecGlobalDataSourceXA/JDBCResource/MedRecGlobalDataSourceXA/JDBCDataSourceParams/MedRecGlobalDataSourceXA')
cmo.setGlobalTransactionsProtocol('TwoPhaseCommit')
activate()

startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG')
cmo.createMailSession('MedRecMailSession')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/MailSessions/MedRecMailSession')
cmo.setJNDIName('mail/MedRecMailSession')
activate()

startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG')
cmo.createFileStore('MedRec-fs')
activate()

startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG')
cmo.createJMSServer('MedRecJMSServer')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSServers/MedRecJMSServer')
cmo.setPersistentStore(getMBean('/Partitions/Medrec-Dev/ResourceGroups/appRG/FileStores/MedRec-fs'))
activate()


startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG')
cmo.createJMSSystemResource('MedRecModule')
activate()

startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule')
cmo.createSubDeployment('MedRecJMS ')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/SubDeployments/MedRecJMS')
set('Targets',jarray.array([ObjectName('com.bea:Name=MedRecJMSServer,Type=JMSServer,Partition=Medrec-Dev,ResourceGroup=appRG')], ObjectName))
activate()

startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule')
cmo.createConnectionFactory('MedRecConnectionFactory')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule/ConnectionFactories/MedRecConnectionFactory')
cmo.setJNDIName('com.oracle.medrec.jms.connectionFactory ')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule/ConnectionFactories/MedRecConnectionFactory/SecurityParams/MedRecConnectionFactory')
cmo.setAttachJMSXUserId(false)
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule/ConnectionFactories/MedRecConnectionFactory/ClientParams/MedRecConnectionFactory')
cmo.setClientIdPolicy('Restricted')
cmo.setSubscriptionSharingPolicy('Exclusive')
cmo.setMessagesMaximum(10)
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule/ConnectionFactories/MedRecConnectionFactory/TransactionParams/MedRecConnectionFactory')
cmo.setXAConnectionFactoryEnabled(true)
activate()

startEdit()
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule')
cmo.createUniformDistributedQueue('PatientNotificationQueue')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule/UniformDistributedQueues/PatientNotificationQueue')
cmo.setJNDIName('com.oracle.medrec.jms.PatientNotificationQueue')
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/SubDeployments/MedRecJMS')
set('Targets',jarray.array([ObjectName('com.bea:Name=MedRecJMSServer,Type=JMSServer,Partition=Medrec-Dev,ResourceGroup=appRG')], ObjectName))
cd('/Partitions/Medrec-Dev/ResourceGroups/appRG/JMSSystemResources/MedRecModule/JMSResource/MedRecModule/UniformDistributedQueues/PatientNotificationQueue')
cmo.setSubDeploymentName('MedRecJMS')
activate()

startEdit()
deploy(appName='medrec', partition='Medrec-Dev', resourceGroup='appRG', path='/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/medrec.ear')
deploy(appName='physician', partition='Medrec-Dev', resourceGroup='appRG', path='/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/physician.ear')
deploy(appName='chat', partition='Medrec-Dev', resourceGroup='appRG', path='/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab4/chat.war')
activate()

startEdit()
cd('/')
partitionBean=cmo.lookupPartition('Medrec-Dev')
startPartitionWait(partitionBean)
activate()

disconnect()

#Stopping and  removing domain partition dp1
connect('weblogic','welcome1','t3://localhost:7001')

edit()

startEdit()
cd('/')
partitionBeanDP1=cmo.lookupPartition('dp1')
forceShutdownPartitionWait(partitionBeanDP1)
activate()

startEdit()
editService.getConfigurationManager().removeReferencesToBean(getMBean('/Partitions/dp1'))
cmo.destroyPartition(getMBean('/Partitions/dp1'))
activate()

disconnect()



