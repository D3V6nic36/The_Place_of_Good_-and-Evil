line1=Opciones Configurables,11
max_len=Tamaño máximo de comando a mostrar,3,Ilimitado
show_time=¿Mostrar planificación de las tareas?,1,1-Sí,0-No
show_comment=¿Mostrar comentarios de tarea?,1,1-Sí,0-No
show_run=¿Mostrar estado de ejecución de tareas?,1,2-Sí&#44; y permitir iniciar y parar,1-Sí,0-No
match_mode=Buscar procesos de tarea por,1,1-Sólo el comando,0-Comando y argumentos
match_user=¿Ha de coincidir el usuario cuando se buscan procesos de tarea?,1,1-Sí,0-No
kill_subs=¿Finalizar subprocesos cuando se finalizan tareas?,1,1-Sí,0-No
line2=Configuración de sistema,11
cron_dir=Directorio de Crontab,0
cron_get_command=Comando para leer una tarea de usuario de cron,0
cron_edit_command=Comando para editar una tarea de cron de usuario,0
cron_copy_command=Comando para aceptar una tarea de usuario de cron desde la entrada estándar,0
cron_delete_command=Comando para borrar tareas de usuario de cron,0
cron_input=¿Soporta cron entrada a tareas de cron?,1,1-Sí,0-No
cron_allow_file=Fichero que lista los usuarios autorizados,0
cron_deny_file=Archivo que lista los usuarios denegados,0
cron_deny_all=Permisos cuando no existen archivos de autorización y denegación,1,0-Denegar a todos,1-Denegar a todos excepto a root,2-Autorizar a todos
vixie_cron=¿Soporta extensiones de Vixie-Cron,1,1-Sí,0-No
system_crontab=Trayectoria a archivo crontab de sistema Vixie-Cron,0
single_file=Ruta al archivo crontab de usuario único,0
cronfiles_dir=Trayectoria a directorio de archivos extra de cron,3,Ninguna
run_parts=comando para ejecutar-partes,0
