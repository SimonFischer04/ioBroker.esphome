/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "ESPHomeCommunityLink": {                        "en": "For more information about ESPHome, example configuration and links to communities please visit:", "de": "Weitere Informationen zu ESPHome, Beispielkonfigurationen und Links zu Communities finden Sie unter:", "ru": "Для получения дополнительной информации о ESPHome, примерах конфигурации и ссылках на сообщества посетите:", "pt": "Para obter mais informações sobre ESPHome, exemplos de configuração e links para comunidades, visite:", "nl": "Ga voor meer informatie over ESPHome, voorbeeldconfiguratie en links naar communities naar:", "fr": "Pour plus d'informations sur ESPHome, des exemples de configuration et des liens vers les communautés, veuillez visiter :", "it": "Per ulteriori informazioni su ESPHome, esempi di configurazione e collegamenti alle comunità, visitare:", "es": "Para obtener más información sobre ESPHome, configuración de ejemplo y enlaces a comunidades, visite:", "pl": "Więcej informacji o ESPHome, przykładową konfigurację i linki do społeczności można znaleźć na stronie:", "zh-cn": "有关 ESPHome、示例配置和社区链接的更多信息，请访问："},
    "chkEnableESPHome": {                            "en": "Enable ESPHome Dashboard",                        "de": "Aktivieren Sie das ESPHome-Dashboard",            "ru": "Включить панель управления ESPHome",              "pt": "Habilitar painel ESPHome",                        "nl": "Schakel ESPHome-dashboard in",                    "fr": "Activer le tableau de bord ESPHome",              "it": "Abilita la dashboard ESPHome",                    "es": "Habilitar el panel ESPHome",                      "pl": "Włącz panel ESPHome",                             "zh-cn": "启用 ESPHome 仪表板"},
    "existDevicesHeader": {                          "en": "All devices managed by this adapter and their connection state", "de": "Alle von diesem Adapter verwalteten Geräte und deren Verbindungsstatus", "ru": "Все устройства, управляемые этим адаптером, и состояние их подключения", "pt": "Todos os dispositivos gerenciados por este adaptador e seu estado de conexão", "nl": "Alle apparaten die door deze adapter worden beheerd en hun verbindingsstatus", "fr": "Tous les appareils gérés par cet adaptateur et leur état de connexion", "it": "Tutti i dispositivi gestiti da questo adattatore e il relativo stato di connessione", "es": "Todos los dispositivos gestionados por este adaptador y su estado de conexión.", "pl": "Wszystkie urządzenia zarządzane przez tę kartę i ich stan połączenia", "zh-cn": "该适配器管理的所有设备及其连接状态"},
    "newDevicesHeader": {                            "en": " Newly discovered devices, please provide credentials!", "de": "Neu entdeckte Geräte, bitte Anmeldedaten angeben!", "ru": "Недавно обнаруженные устройства, предоставьте учетные данные!", "pt": "Dispositivos recém-descobertos, forneça credenciais!", "nl": "Nieuw ontdekte apparaten, geef uw inloggegevens op!", "fr": "Appareils récemment découverts, veuillez fournir vos informations d'identification !", "it": "Dispositivi appena scoperti, fornisci le credenziali!", "es": "Dispositivos recién descubiertos, proporcione credenciales.", "pl": "Nowo odkryte urządzenia. Podaj dane uwierzytelniające!", "zh-cn": "新发现的设备，请提供凭据！"},
    "hlpDiscoveryListeningAddress": {                "en": "Only discover devices on this interface",         "de": "Erkennen Sie nur Geräte auf dieser Schnittstelle", "ru": "Обнаруживать устройства только на этом интерфейсе", "pt": "Descubra apenas dispositivos nesta interface",    "nl": "Ontdek alleen apparaten op deze interface",       "fr": "Découvrez uniquement les appareils sur cette interface", "it": "Rileva solo i dispositivi su questa interfaccia", "es": "Descubrir solo dispositivos en esta interfaz",    "pl": "Odkrywaj tylko urządzenia na tym interfejsie",    "zh-cn": "只发现该接口上的设备"},
    "hlpInputApiPassword": {                         "en": "API password (legacy, please use encryption key!)", "de": "API-Passwort (alt, bitte Verschlüsselungsschlüssel verwenden!)", "ru": "Пароль API (устаревший, используйте ключ шифрования!)", "pt": "Senha da API (herdada, use a chave de criptografia!)", "nl": "API-wachtwoord (verouderd, gebruik een coderingssleutel!)", "fr": "Mot de passe API (ancien, veuillez utiliser la clé de cryptage !)", "it": "Password API (legacy, utilizza la chiave di crittografia!)", "es": "Contraseña de API (heredada, ¡use una clave de cifrado!)", "pl": "Hasło API (starsze, użyj klucza szyfrującego!)",  "zh-cn": "API密码（旧的，请使用加密密钥！）"},
    "hlpInputDeviceIP": {                            "en": "Select existing device or Enter IP of new device", "de": "Wählen Sie ein vorhandenes Gerät aus oder geben Sie die IP des neuen Geräts ein", "ru": "Выберите существующее устройство или введите IP нового устройства.", "pt": "Selecione o dispositivo existente ou insira o IP do novo dispositivo", "nl": "Selecteer bestaand apparaat of voer IP van nieuw apparaat in", "fr": "Sélectionnez l'appareil existant ou entrez l'adresse IP du nouvel appareil", "it": "Seleziona il dispositivo esistente o inserisci l'IP del nuovo dispositivo", "es": "Seleccione el dispositivo existente o ingrese la IP del nuevo dispositivo", "pl": "Wybierz istniejące urządzenie lub wprowadź adres IP nowego urządzenia", "zh-cn": "选择现有设备或输入新设备的IP"},
    "hlpInputEncryptionKey": {                       "en": "Provide device specific Encryption Key (preferred)", "de": "Geben Sie einen gerätespezifischen Verschlüsselungsschlüssel an (bevorzugt)", "ru": "Предоставьте ключ шифрования для конкретного устройства (предпочтительно)", "pt": "Forneça a chave de criptografia específica do dispositivo (preferencial)", "nl": "Geef apparaatspecifieke coderingssleutel op (bij voorkeur)", "fr": "Fournir une clé de cryptage spécifique à l'appareil (de préférence)", "it": "Fornire una chiave di crittografia specifica per il dispositivo (preferibile)", "es": "Proporcionar clave de cifrado específica del dispositivo (preferido)", "pl": "Podaj klucz szyfrowania specyficzny dla urządzenia (preferowany)", "zh-cn": "提供设备特定的加密密钥（首选）"},
    "introLine-1": {                                 "en": "ioBroker ESPHome allows to manage and control ESPHome capable devices, you must create and upload these binaries by yourself!", "de": "Mit ioBroker ESPHome können Sie ESPHome-fähige Geräte verwalten und steuern. Sie müssen diese Binärdateien selbst erstellen und hochladen!", "ru": "ioBroker ESPHome позволяет управлять устройствами, поддерживающими ESPHome, вы должны создавать и загружать эти двоичные файлы самостоятельно!", "pt": "ioBroker ESPHome permite gerenciar e controlar dispositivos compatíveis com ESPHome. Você mesmo deve criar e fazer upload desses binários!", "nl": "Met ioBroker ESPHome kunt u ESPHome-compatibele apparaten beheren en controleren. U moet deze binaire bestanden zelf maken en uploaden!", "fr": "ioBroker ESPHome permet de gérer et de contrôler les appareils compatibles ESPHome, vous devez créer et télécharger ces binaires par vous-même !", "it": "ioBroker ESPHome consente di gestire e controllare i dispositivi compatibili con ESPHome, devi creare e caricare questi binari da solo!", "es": "ioBroker ESPHome permite administrar y controlar dispositivos compatibles con ESPHome. ¡Debe crear y cargar estos archivos binarios usted mismo!", "pl": "ioBroker ESPHome pozwala zarządzać i kontrolować urządzenia obsługujące ESPHome, musisz samodzielnie utworzyć i przesłać te pliki binarne!", "zh-cn": "ioBroker ESPHome 允许管理和控制支持 ESPHome 的设备，您必须自己创建并上传这些二进制文件！"},
    "introLine-2": {                                 "en": "ESPHome Dashboard is required to build these binaries. As soon a device firmware is flashed and operational, ESPHome Dashboard is not required anymore to allow communications with ioBroker", "de": "Zum Erstellen dieser Binärdateien ist ESPHome Dashboard erforderlich. ", "ru": "Для сборки этих двоичных файлов требуется ESPHome Dashboard. ", "pt": "O ESPHome Dashboard é necessário para construir esses binários. ", "nl": "ESPHome Dashboard is vereist om deze binaire bestanden te bouwen. ", "fr": "ESPHome Dashboard est requis pour créer ces binaires. ", "it": "Per creare questi file binari è necessario ESPHome Dashboard. ", "es": "Se requiere ESPHome Dashboard para crear estos archivos binarios. ", "pl": "Do zbudowania tych plików binarnych wymagany jest panel ESPHome Dashboard. ", "zh-cn": "构建这些二进制文件需要 ESPHome Dashboard。"},
    "lblApiPass": {                                  "en": "API password (legacy)",                           "de": "API-Passwort (Legacy)",                           "ru": "Собственный пароль API по умолчанию (устаревший)", "pt": "Senha padrão da API nativa (herdada)",            "nl": "API-wachtwoord (verouderd)",                      "fr": "Mot de passe de l'API native par défaut (ancien)", "it": "Password API nativa predefinita (legacy)",        "es": "Contraseña API nativa predeterminada (heredada)", "pl": "Domyślne hasło do natywnego API (starsze)",       "zh-cn": "默认本机 API 密码（旧版）"},
    "lblAutoDiscovery": {                            "en": "Device Discovery enabled",                        "de": "Geräteerkennung aktiviert",                       "ru": "Обнаружение устройств включено",                  "pt": "Descoberta de dispositivos ativada",              "nl": "Apparaatdetectie ingeschakeld",                   "fr": "Découverte de périphérique activée",              "it": "Rilevamento dispositivo abilitato",               "es": "Descubrimiento de dispositivos habilitado",       "pl": "Włączono wykrywanie urządzeń",                    "zh-cn": "设备发现已启用"},
    "lblConnectDetails-Line-1": {                    "en": "The ESPHome native API is used to communicate with clients directly, with a highly-optimized network protocol. Native API has many advantages over using MQTT for communication with Home Automation software ", "de": "Die native ESPHome-API wird für die direkte Kommunikation mit Clients über ein hochoptimiertes Netzwerkprotokoll verwendet. ", "ru": "Собственный API ESPHome используется для прямой связи с клиентами с помощью высокооптимизированного сетевого протокола. ", "pt": "A API nativa ESPHome é usada para comunicação direta com os clientes, com um protocolo de rede altamente otimizado. ", "nl": "De native API van ESPHome wordt gebruikt om rechtstreeks met klanten te communiceren, met een sterk geoptimaliseerd netwerkprotocol. ", "fr": "L'API native ESPHome est utilisée pour communiquer directement avec les clients, avec un protocole réseau hautement optimisé. ", "it": "L'API nativa ESPHome viene utilizzata per comunicare direttamente con i clienti, con un protocollo di rete altamente ottimizzato. ", "es": "La API nativa de ESPHome se utiliza para comunicarse directamente con los clientes, con un protocolo de red altamente optimizado. ", "pl": "Natywny interfejs API ESPHome służy do bezpośredniej komunikacji z klientami za pomocą wysoce zoptymalizowanego protokołu sieciowego. ", "zh-cn": "ESPHome 原生 API 用于通过高度优化的网络协议直接与客户端通信。"},
    "lblConnectDetails-Line-2": {                    "en": "After adding an api: line to your ESPHome configuration you can go to this page and and wait for the ESPHome device to show up under the discovered devices section (can take up to 5 minutes) or add the device manually by choosing “add Device” from the devices overview and entering “<NODE_NAME>.local” or the IP address of the unit in the “Host” field.", "de": "Nachdem Sie Ihrer ESPHome-Konfiguration eine api:-Zeile hinzugefügt haben, können Sie zu dieser Seite gehen und warten, bis das ESPHome-Gerät im Abschnitt „Erkannte Geräte“ angezeigt wird (kann bis zu 5 Minuten dauern) oder das Gerät manuell hinzufügen, indem Sie „Gerät hinzufügen“ wählen. ", "ru": "После добавления строки api: в вашу конфигурацию ESPHome вы можете перейти на эту страницу и подождать, пока устройство ESPHome появится в разделе обнаруженных устройств (это может занять до 5 минут) или добавить устройство вручную, выбрав «Добавить устройство». ", "pt": "Depois de adicionar uma linha api: à configuração do ESPHome, você pode ir para esta página e esperar que o dispositivo ESPHome apareça na seção de dispositivos descobertos (pode levar até 5 minutos) ou adicionar o dispositivo manualmente escolhendo “adicionar dispositivo” ", "nl": "Na het toevoegen van een api: lijn aan uw ESPHome-configuratie kunt u naar deze pagina gaan en wachten tot het ESPHome-apparaat verschijnt onder het gedeelte met ontdekte apparaten (kan tot 5 minuten duren) of het apparaat handmatig toevoegen door \"Apparaat toevoegen\" te kiezen ", "fr": "Après avoir ajouté une ligne api: à votre configuration ESPHome, vous pouvez accéder à cette page et attendre que l'appareil ESPHome apparaisse dans la section des appareils découverts (cela peut prendre jusqu'à 5 minutes) ou ajouter l'appareil manuellement en choisissant « ajouter un appareil ». ", "it": "Dopo aver aggiunto una linea api: alla configurazione di ESPHome puoi andare a questa pagina e attendere che il dispositivo ESPHome venga visualizzato nella sezione dei dispositivi rilevati (può richiedere fino a 5 minuti) o aggiungere il dispositivo manualmente scegliendo \"aggiungi dispositivo\" ", "es": "Después de agregar una línea api: a su configuración de ESPHome, puede ir a esta página y esperar a que aparezca el dispositivo ESPHome en la sección de dispositivos descubiertos (puede tardar hasta 5 minutos) o agregar el dispositivo manualmente eligiendo \"agregar dispositivo\". ", "pl": "Po dodaniu linii api: do konfiguracji ESPHome możesz przejść na tę stronę i poczekać, aż urządzenie ESPHome pojawi się w sekcji wykrytych urządzeń (może to zająć do 5 minut) lub dodać urządzenie ręcznie, wybierając „dodaj urządzenie” ", "zh-cn": "将 api: 行添加到 ESPHome 配置后，您可以转到此页面并等待 ESPHome 设备显示在已发现的设备部分下（最多可能需要 5 分钟），或者通过选择“添加设备”手动添加设备"},
    "lblConnectDetails-Line-3": {                    "en": "The ESPHome native API is based on a custom TCP protocol using protocol buffers. You can find the protocol data structure definitions here:", "de": "Die native API von ESPHome basiert auf einem benutzerdefinierten TCP-Protokoll unter Verwendung von Protokollpuffern. ", "ru": "Собственный API ESPHome основан на специальном протоколе TCP с использованием буферов протокола. ", "pt": "A API nativa ESPHome é baseada em um protocolo TCP personalizado usando buffers de protocolo. ", "nl": "De native API van ESPHome is gebaseerd op een aangepast TCP-protocol dat gebruik maakt van protocolbuffers. ", "fr": "L'API native ESPHome est basée sur un protocole TCP personnalisé utilisant des tampons de protocole. ", "it": "L'API nativa ESPHome si basa su un protocollo TCP personalizzato che utilizza buffer di protocollo. ", "es": "La API nativa de ESPHome se basa en un protocolo TCP personalizado que utiliza buffers de protocolo. ", "pl": "Natywny interfejs API ESPHome opiera się na niestandardowym protokole TCP wykorzystującym bufory protokołów. ", "zh-cn": "ESPHome 本机 API 基于使用协议缓冲区的自定义 TCP 协议。"},
    "lblConnectIobroker": {                          "en": "ioBroker communicates directly by Native API instead of MQTT to provide you the best possible experience and support of encryption keys (recommend) instead of API/MQTT passwords", "de": "ioBroker kommuniziert direkt über die native API statt über MQTT, um Ihnen das bestmögliche Erlebnis und die Unterstützung von Verschlüsselungsschlüsseln (empfohlen) anstelle von API/MQTT-Passwörtern zu bieten", "ru": "ioBroker взаимодействует напрямую через Native API вместо MQTT, чтобы предоставить вам наилучшие возможности и поддержку ключей шифрования (рекомендуется) вместо паролей API/MQTT.", "pt": "O ioBroker se comunica diretamente pela API nativa em vez do MQTT para fornecer a melhor experiência possível e suporte de chaves de criptografia (recomendado) em vez de senhas API/MQTT", "nl": "ioBroker communiceert rechtstreeks via Native API in plaats van MQTT om u de best mogelijke ervaring en ondersteuning te bieden met coderingssleutels (aanbevolen) in plaats van API/MQTT-wachtwoorden", "fr": "ioBroker communique directement par API native au lieu de MQTT pour vous offrir la meilleure expérience possible et la prise en charge des clés de chiffrement (recommandé) au lieu des mots de passe API/MQTT", "it": "ioBroker comunica direttamente tramite API nativa anziché MQTT per offrirti la migliore esperienza possibile e il supporto delle chiavi di crittografia (consigliato) anziché delle password API/MQTT", "es": "ioBroker se comunica directamente mediante API nativa en lugar de MQTT para brindarle la mejor experiencia posible y soporte de claves de cifrado (recomendado) en lugar de contraseñas API/MQTT", "pl": "ioBroker komunikuje się bezpośrednio przez Native API zamiast MQTT, aby zapewnić najlepszą możliwą obsługę i obsługę kluczy szyfrujących (zalecane) zamiast haseł API/MQTT", "zh-cn": "ioBroker 直接通过 Native API 而不是 MQTT 进行通信，为您提供最佳体验并支持加密密钥（推荐）而不是 API/MQTT 密码"},
    "lblDashboardLink": {                            "en": "To show ESPHome dashboard in ioBroker admin tab, its required to provide the IP-Ares on which installation its running. Https is currently not supported", "de": "Um das ESPHome-Dashboard auf der Admin-Registerkarte von ioBroker anzuzeigen, müssen Sie die IP-Adresse angeben, auf der die Installation ausgeführt wird", "ru": "Чтобы отобразить панель управления ESPHome на вкладке администрирования ioBroker, необходимо указать IP-Ares, на котором выполняется установка.", "pt": "Para mostrar o painel do ESPHome na aba de administração do ioBroker, é necessário fornecer os IP-Ares em que a instalação está sendo executada", "nl": "Om het ESPHome-dashboard op het ioBroker-beheertabblad weer te geven, is het vereist om de IP-Ares op te geven waarop de installatie wordt uitgevoerd", "fr": "Pour afficher le tableau de bord ESPHome dans l'onglet d'administration d'ioBroker, il est nécessaire de fournir l'IP-Ares sur lequel l'installation est en cours d'exécution.", "it": "Per mostrare la dashboard ESPHome nella scheda di amministrazione di ioBroker, è necessario fornire gli indirizzi IP su cui è in esecuzione l'installazione", "es": "Para mostrar el panel de ESPHome en la pestaña de administración de ioBroker, es necesario proporcionar la IP-Ares en la que se está ejecutando la instalación.", "pl": "Aby wyświetlić panel ESPHome w zakładce administracyjnej ioBroker, wymagane jest podanie adresu IP, na którym działa instalacja", "zh-cn": "要在 ioBroker 管理选项卡中显示 ESPHome 仪表板，需要提供运行安装的 IP-Ares"},
    "lblDefaultCredentials": {                       "en": "Default API / Encryption keys settings devices (not recommended)", "de": "Standard-API-/Verschlüsselungsschlüssel-Einstellungsgeräte (nicht empfohlen)", "ru": "Устройства настройки API/ключей шифрования по умолчанию (не рекомендуется)", "pt": "Dispositivos de configurações de chaves de API/criptografia padrão (não recomendado)", "nl": "Standaard API-/encryptiesleutelinstellingen apparaten (niet aanbevolen)", "fr": "Appareils de paramètres API/clés de cryptage par défaut (non recommandé)", "it": "Dispositivi di impostazione API/chiavi di crittografia predefinite (non consigliato)", "es": "Dispositivos de configuración de claves de cifrado/API predeterminados (no recomendado)", "pl": "Domyślne ustawienia API/kluczy szyfrujących urządzenia (niezalecane)", "zh-cn": "默认 API / 加密密钥设置设备（不推荐）"},
    "lblDefaultCredentials-Line-1": {                "en": "Each devices should have its own unique encryption Key (recommended) or API password, device discovery (when enabled) detects all devices and tries to connect with credentials below", "de": "Jedes Gerät sollte über einen eigenen eindeutigen Verschlüsselungsschlüssel (empfohlen) oder ein API-Passwort verfügen. Die Geräteerkennung (sofern aktiviert) erkennt alle Geräte und versucht, eine Verbindung mit den unten aufgeführten Anmeldeinformationen herzustellen", "ru": "Каждое устройство должно иметь свой собственный уникальный ключ шифрования (рекомендуется) или пароль API. Обнаружение устройств (если включено) обнаруживает все устройства и пытается подключиться с учетными данными, указанными ниже.", "pt": "Cada dispositivo deve ter sua própria chave de criptografia exclusiva (recomendado) ou senha de API. A descoberta de dispositivos (quando ativada) detecta todos os dispositivos e tenta se conectar com as credenciais abaixo", "nl": "Elk apparaat moet zijn eigen unieke coderingssleutel (aanbevolen) of API-wachtwoord hebben. Apparaatdetectie (indien ingeschakeld) detecteert alle apparaten en probeert verbinding te maken met onderstaande inloggegevens", "fr": "Chaque appareil doit avoir sa propre clé de cryptage unique (recommandée) ou son propre mot de passe API, la découverte des appareils (lorsqu'elle est activée) détecte tous les appareils et tente de se connecter avec les informations d'identification ci-dessous.", "it": "Ogni dispositivo deve avere la propria chiave di crittografia univoca (consigliata) o password API, il rilevamento dei dispositivi (se abilitato) rileva tutti i dispositivi e tenta di connettersi con le credenziali riportate di seguito", "es": "Cada dispositivo debe tener su propia clave de cifrado única (recomendada) o contraseña API; la detección de dispositivos (cuando está habilitada) detecta todos los dispositivos e intenta conectarse con las siguientes credenciales", "pl": "Każde urządzenie powinno mieć swój własny, unikalny klucz szyfrowania (zalecane) lub hasło API. Funkcja wykrywania urządzeń (jeśli jest włączona) wykrywa wszystkie urządzenia i próbuje połączyć się przy użyciu poniższych danych uwierzytelniających", "zh-cn": "每个设备都应该有自己唯一的加密密钥（推荐）或 API 密码，设备发现（启用后）会检测所有设备并尝试使用下面的凭据进行连接"},
    "lblDefaultCredentials-Line-2": {                "en": "If you assign an unique encryption key (recommended) or API password, new devices will show up on Discovered Devices tab (or must be added) and you must provide the unique credentials manually", "de": "Wenn Sie einen eindeutigen Verschlüsselungsschlüssel (empfohlen) oder ein API-Passwort zuweisen, werden neue Geräte auf der Registerkarte „Erkannte Geräte“ angezeigt (oder müssen hinzugefügt werden) und Sie müssen die eindeutigen Anmeldeinformationen manuell eingeben", "ru": "Если вы назначите уникальный ключ шифрования (рекомендуется) или пароль API, новые устройства будут отображаться на вкладке «Обнаруженные устройства» (или их необходимо будет добавить), и вам придется предоставить уникальные учетные данные вручную.", "pt": "Se você atribuir uma chave de criptografia exclusiva (recomendado) ou uma senha de API, novos dispositivos aparecerão na guia Dispositivos descobertos (ou deverão ser adicionados) e você deverá fornecer as credenciais exclusivas manualmente", "nl": "Als u een unieke coderingssleutel (aanbevolen) of API-wachtwoord toewijst, verschijnen nieuwe apparaten op het tabblad Ontdekte apparaten (of moeten ze worden toegevoegd) en moet u de unieke inloggegevens handmatig opgeven", "fr": "Si vous attribuez une clé de cryptage unique (recommandé) ou un mot de passe API, les nouveaux appareils apparaîtront dans l'onglet Appareils découverts (ou doivent être ajoutés) et vous devez fournir les informations d'identification uniques manuellement.", "it": "Se assegni una chiave di crittografia univoca (consigliata) o una password API, i nuovi dispositivi verranno visualizzati nella scheda Dispositivi rilevati (o dovranno essere aggiunti) e dovrai fornire manualmente le credenziali univoche", "es": "Si asigna una clave de cifrado única (recomendada) o una contraseña API, los nuevos dispositivos aparecerán en la pestaña Dispositivos descubiertos (o deberán agregarse) y deberá proporcionar las credenciales únicas manualmente.", "pl": "Jeśli przypiszesz unikalny klucz szyfrowania (zalecane) lub hasło API, nowe urządzenia pojawią się na karcie Wykryte urządzenia (lub muszą zostać dodane) i musisz ręcznie podać unikalne dane uwierzytelniające", "zh-cn": "如果您分配唯一的加密密钥（推荐）或 API 密码，新设备将显示在“发现的设备”选项卡上（或必须添加），并且您必须手动提供唯一的凭据"},
    "lblDelDevice": {                                "en": "Delete Device",                                   "de": "Gerät löschen",                                   "ru": "Удалить устройство",                              "pt": "Excluir dispositivo",                             "nl": "Apparaat verwijderen",                            "fr": "Supprimer l'appareil",                            "it": "Elimina dispositivo",                             "es": "Eliminar dispositivo",                            "pl": "Usuń urządzenie",                                 "zh-cn": "删除设备"},
    "lblDevicesTable": {                             "en": "All current (known) devices and their connection state", "de": "Alle aktuellen (bekannten) Geräte und deren Verbindungsstatus", "ru": "Все текущие (известные) устройства и состояние их подключения", "pt": "Todos os dispositivos atuais (conhecidos) e seu estado de conexão", "nl": "Alle huidige (bekende) apparaten en hun verbindingsstatus", "fr": "Tous les appareils actuels (connus) et leur état de connexion", "it": "Tutti i dispositivi attuali (conosciuti) e il relativo stato di connessione", "es": "Todos los dispositivos actuales (conocidos) y su estado de conexión", "pl": "Wszystkie aktualne (znane) urządzenia i stan ich połączenia", "zh-cn": "所有当前（已知）设备及其连接状态"},
    "lblDiscoveryListeningAddress": {                "en": "Listening address",                               "de": "Anhörungsadresse",                                "ru": "Адрес прослушивания",                             "pt": "Endereço de escuta",                              "nl": "Luisteradres",                                    "fr": "Adresse d'écoute",                                "it": "Indirizzo d'ascolto",                             "es": "dirección de escucha",                            "pl": "Adres słuchania",                                 "zh-cn": "收听地址"},
    "lblESPHomeIP": {                                "en": "IP-Address where ESPHome Dashboard is running to integrate in ioBroker Admin", "de": "IP-Adresse, unter der ESPHome Dashboard zur Integration in ioBroker Admin ausgeführt wird", "ru": "IP-адрес, на котором работает панель управления ESPHome, для интеграции в администрацию ioBroker.", "pt": "Endereço IP onde o ESPHome Dashboard está sendo executado para integração no ioBroker Admin", "nl": "IP-adres waar ESPHome Dashboard wordt uitgevoerd om te integreren in ioBroker Admin", "fr": "Adresse IP sur laquelle ESPHome Dashboard est exécuté pour s'intégrer dans ioBroker Admin", "it": "Indirizzo IP su cui è in esecuzione ESPHome Dashboard per l'integrazione in ioBroker Admin", "es": "Dirección IP donde se ejecuta ESPHome Dashboard para integrarse en ioBroker Admin", "pl": "Adres IP, na którym działa panel ESPHome Dashboard w celu integracji z administratorem ioBroker", "zh-cn": "运行 ESPHome 仪表板以集成到 ioBroker Admin 中的 IP 地址"},
    "lblESPHomePort": {                              "en": "Port of ESPHome Dashboard",                       "de": "Port des ESPHome-Dashboards",                     "ru": "Панель управления портом ESPHome",                "pt": "Painel do Porto do ESPHome",                      "nl": "Haven van ESPHome-dashboard",                     "fr": "Port du tableau de bord ESPHome",                 "it": "Porta della dashboard ESPHome",                   "es": "Puerto de ESPHome Dashboard",                     "pl": "Port panelu ESPHome",                             "zh-cn": "ESPHome 仪表板端口"},
    "lblEnableESPHome": {                            "en": "You can either run ESPHome Dashboard separately, or activate the option below to run it native in ioBroker", "de": "Sie können ESPHome Dashboard entweder separat ausführen oder die Option unten aktivieren, um es nativ in ioBroker auszuführen", "ru": "Вы можете запустить панель ESPHome Dashboard отдельно или активировать опцию ниже, чтобы запустить ее в ioBroker.", "pt": "Você pode executar o ESPHome Dashboard separadamente ou ativar a opção abaixo para executá-lo nativamente no ioBroker", "nl": "U kunt ESPHome Dashboard afzonderlijk uitvoeren of de onderstaande optie activeren om het native in ioBroker uit te voeren", "fr": "Vous pouvez soit exécuter ESPHome Dashboard séparément, soit activer l'option ci-dessous pour l'exécuter nativement dans ioBroker", "it": "Puoi eseguire ESPHome Dashboard separatamente o attivare l'opzione seguente per eseguirlo nativo in ioBroker", "es": "Puede ejecutar ESPHome Dashboard por separado o activar la siguiente opción para ejecutarlo de forma nativa en ioBroker.", "pl": "Możesz uruchomić panel ESPHome osobno lub aktywować poniższą opcję, aby uruchomić go natywnie w ioBroker", "zh-cn": "您可以单独运行 ESPHome Dashboard，也可以激活以下选项以在 ioBroker 中本机运行它"},
    "lblEncryptionKey": {                            "en": "Default encryption Key",                          "de": "Standardverschlüsselungsschlüssel",               "ru": "Ключ шифрования по умолчанию",                    "pt": "Chave de criptografia padrão",                    "nl": "Standaard coderingssleutel",                      "fr": "Clé de cryptage par défaut",                      "it": "Chiave di crittografia predefinita",              "es": "Clave de cifrado predeterminada",                 "pl": "Domyślny klucz szyfrowania",                      "zh-cn": "默认加密密钥"},
    "lblHeaderConnect": {                            "en": "How to connect an ESPHome capable device to ioBroker", "de": "So verbinden Sie ein ESPHome-fähiges Gerät mit ioBroker", "ru": "Как подключить устройство с поддержкой ESPHome к ioBroker", "pt": "Como conectar um dispositivo compatível com ESPHome ao ioBroker", "nl": "Een ESPHome-compatibel apparaat verbinden met ioBroker", "fr": "Comment connecter un appareil compatible ESPHome à ioBroker", "it": "Come connettere un dispositivo compatibile con ESPHome a ioBroker", "es": "Cómo conectar un dispositivo compatible con ESPHome a ioBroker", "pl": "Jak podłączyć urządzenie obsługujące ESPHome do ioBroker", "zh-cn": "如何将支持 ESPHome 的设备连接到 ioBroker"},
    "lblHeaderMainPage": {                           "en": "ESPHome Dashboard integration",                   "de": "ESPHome Dashboard-Integration",                   "ru": "Интеграция панели управления ESPHome",            "pt": "Integração do painel ESPHome",                    "nl": "ESPHome Dashboard-integratie",                    "fr": "Intégration du tableau de bord ESPHome",          "it": "Integrazione della dashboard ESPHome",            "es": "Integración del panel ESPHome",                   "pl": "Integracja z panelem ESPHome",                    "zh-cn": "ESPHome 仪表板集成"},
    "lblIgnoreList": {                               "en": "IP-Addresses to be excluded by device discovery", "de": "IP-Adressen, die von der Geräteerkennung ausgeschlossen werden sollen", "ru": "IP-адреса, которые будут исключены при обнаружении устройства", "pt": "Endereços IP a serem excluídos pela descoberta de dispositivos", "nl": "IP-adressen moeten worden uitgesloten bij apparaatdetectie", "fr": "Adresses IP à exclure par la découverte de périphériques", "it": "Indirizzi IP da escludere dal rilevamento del dispositivo", "es": "Direcciones IP que se excluirán mediante el descubrimiento de dispositivos", "pl": "Adresy IP, które mają być wykluczone przy wykrywaniu urządzenia", "zh-cn": "设备发现要排除的 IP 地址"},
    "lblInputApiPassword": {                         "en": "API password",                                    "de": "API-Passwort",                                    "ru": "Пароль API",                                      "pt": "Senha da API",                                    "nl": "API-wachtwoord",                                  "fr": "Mot de passe API",                                "it": "Password dell'API",                               "es": "Contraseña API",                                  "pl": "Hasło API",                                       "zh-cn": "接口密码"},
    "lblInputDeviceIP-content": {                    "en": "Device IP-Address",                               "de": "Geräte-IP-Adresse",                               "ru": "IP-адрес устройства",                             "pt": "Endereço IP do dispositivo",                      "nl": "Apparaat IP-adres",                               "fr": "Adresse IP de l'appareil",                        "it": "Indirizzo IP del dispositivo",                    "es": "Dirección IP del dispositivo",                    "pl": "Adres IP urządzenia",                             "zh-cn": "设备 IP 地址"},
    "lblInputEncryptionKey": {                       "en": "Encryption Key",                                  "de": "Verschlüsselungsschlüssel",                       "ru": "Ключ шифрования",                                 "pt": "Chave de encriptação",                            "nl": "Encryptiesleutel",                                "fr": "Clé de cryptage",                                 "it": "Chiave crittografica",                            "es": "Clave de encriptación",                           "pl": "Klucz szyfrowania",                               "zh-cn": "加密密钥"},
    "lblLoadDevices": {                              "en": "Refresh device overview",                         "de": "Geräteübersicht aktualisieren",                   "ru": "Обновить обзор устройства",                       "pt": "Atualizar visão geral do dispositivo",            "nl": "Apparaatoverzicht vernieuwen",                    "fr": "Actualiser la présentation des appareils",        "it": "Aggiorna la panoramica del dispositivo",          "es": "Actualizar descripción general del dispositivo",  "pl": "Odśwież przegląd urządzeń",                       "zh-cn": "刷新设备概览"},
    "lblTxtNoButtonsIfNotActive": {                  "en": "Device table & ADD / Delete button only available if adapter is running", "de": "Gerätetabelle und Schaltfläche HINZUFÜGEN/Löschen nur verfügbar, wenn der Adapter ausgeführt wird", "ru": "Таблица устройств и кнопка «Добавить/Удалить» доступны только при работающем адаптере.", "pt": "Tabela de dispositivos e botão ADICIONAR/Excluir disponíveis apenas se o adaptador estiver em execução", "nl": "Apparaattabel en knop TOEVOEGEN/verwijderen alleen beschikbaar als de adapter actief is", "fr": "Tableau des appareils et bouton AJOUTER/Supprimer disponibles uniquement si l'adaptateur est en cours d'exécution", "it": "La tabella dei dispositivi e il pulsante AGGIUNGI/Elimina sono disponibili solo se l'adattatore è in esecuzione", "es": "La tabla de dispositivos y el botón AGREGAR/Eliminar solo están disponibles si el adaptador está en ejecución", "pl": "Tabela urządzeń i przycisk DODAJ/Usuń dostępne tylko wtedy, gdy adapter jest uruchomiony", "zh-cn": "设备表和添加/删除按钮仅在适配器运行时可用"},
    "lbl_addUpdateDevice": {                         "en": "ADD / Modify Devices",                            "de": "Geräte hinzufügen/ändern",                        "ru": "ДОБАВИТЬ/ИЗМЕНИТЬ УСТРОЙСТВА",                    "pt": "ADICIONAR/Modificar Dispositivos",                "nl": "Apparaten toevoegen/wijzigen",                    "fr": "AJOUTER/Modifier des appareils",                  "it": "AGGIUNGI/MODIFICA DISPOSITIVI",                   "es": "AGREGAR / Modificar dispositivos",                "pl": "DODAJ/Modyfikuj urządzenia",                      "zh-cn": "添加/修改设备"},
    "maxRetry": {                                    "en": "Maximum connection retry before considering device as offline", "de": "Maximale Verbindungswiederholung, bevor das Gerät als offline betrachtet wird", "ru": "Максимальное количество повторных попыток подключения, прежде чем устройство будет считаться отключенным", "pt": "Tentativa máxima de conexão antes de considerar o dispositivo como off-line", "nl": "Maximale verbindingspoging voordat het apparaat als offline wordt beschouwd", "fr": "Nombre maximal de tentatives de connexion avant de considérer l'appareil comme hors ligne", "it": "Numero massimo di tentativi di connessione prima di considerare il dispositivo offline", "es": "Reintento máximo de conexión antes de considerar el dispositivo como fuera de línea", "pl": "Maksymalna liczba ponownych prób połączenia przed uznaniem urządzenia za offline", "zh-cn": "将设备视为离线之前的最大连接重试次数"},
    "reConInterval": {                               "en": "Setting between ioBroker try's to reconnect this device", "de": "Einstellung zwischen ioBroker versucht, dieses Gerät erneut zu verbinden", "ru": "Настройка между попытками ioBroker повторно подключить это устройство", "pt": "Configuração entre tentativas do ioBroker para reconectar este dispositivo", "nl": "Instelling tussen ioBroker-pogingen om dit apparaat opnieuw te verbinden", "fr": "Paramètres entre ioBroker essayant de reconnecter cet appareil", "it": "Impostazione tra i tentativi di ioBroker di riconnettere questo dispositivo", "es": "Configuración entre intentos de ioBroker para volver a conectar este dispositivo", "pl": "Ustawienie między próbą ponownego podłączenia tego urządzenia przez ioBroker", "zh-cn": "ioBroker 尝试重新连接此设备之间的设置"},
};