connect('weblogic','welcome1','t3://localhost:7001')
edit()

startEdit()
start('app-cluster','Cluster')
activate()

startEdit()
deploy(appName='heapApp', partition='Medrec-Dev', resourceGroup='appRG', path='/u01/content/weblogic-innovation-seminars/WInS_Demos/MT-Workshop/Lab5/heapApp.war')
activate()

disconnect()
