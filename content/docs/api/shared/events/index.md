---
title: Events
---

- [EventDelegates](/docs/api/shared/events/eventdelegates) - Event delegates.
- [EventListener<T>](/docs/api/shared/events/eventlistener-1)

- [IEventSubscriber](/docs/api/shared/events/ieventsubscriber) - Custom event subscriber interface.
- [IOnClientConnectedEvent](/docs/api/shared/events/ionclientconnectedevent) - Called when a client connects to the server.
- [IOnClientDisconnectedEvent](/docs/api/shared/events/ionclientdisconnectedevent) - Called when a client disconnects from the server.
- [IOnClientKeyStateChangedEvent](/docs/api/shared/events/ionclientkeystatechangedevent) - Called when a client's key state changes.
- [IOnClientProcessUsercmdsEvent](/docs/api/shared/events/ionclientprocessusercmdsevent) - Called when a client processes user commands.
This callback is a hot path, be careful with it and don't do anything expensive.
- [IOnClientPutInServerEvent](/docs/api/shared/events/ionclientputinserverevent) - Called when a client is put in the server.
- [IOnClientSteamAuthorizeEvent](/docs/api/shared/events/ionclientsteamauthorizeevent) - Called when a client is authorized via Steam.
- [IOnClientSteamAuthorizeFailEvent](/docs/api/shared/events/ionclientsteamauthorizefailevent) - Called when a client's Steam authorization fails.
- [IOnCommandExecuteHookEvent](/docs/api/shared/events/ioncommandexecutehookevent) - Called when a command is executed.
- [IOnConCommandCreated](/docs/api/shared/events/ionconcommandcreated) - Called when a ConVar is created.
- [IOnConVarCreated](/docs/api/shared/events/ionconvarcreated) - Called when a ConVar is created.
- [IOnConVarValueChanged](/docs/api/shared/events/ionconvarvaluechanged) - Called when a ConVar value is changed.
- [IOnConsoleOutputEvent](/docs/api/shared/events/ionconsoleoutputevent) - Called when a console output is received.
- [IOnEntityCreatedEvent](/docs/api/shared/events/ionentitycreatedevent) - Called when an entity is created.
- [IOnEntityDeletedEvent](/docs/api/shared/events/ionentitydeletedevent) - Called when an entity is deleted.
- [IOnEntityEndTouchEvent](/docs/api/shared/events/ionentityendtouchevent) - Called when an entity ends touching another entity.
- [IOnEntityParentChangedEvent](/docs/api/shared/events/ionentityparentchangedevent) - Called when an entity's parent changes.
- [IOnEntitySpawnedEvent](/docs/api/shared/events/ionentityspawnedevent) - Called when an entity is spawned.
- [IOnEntityStartTouchEvent](/docs/api/shared/events/ionentitystarttouchevent) - Called when an entity starts touching another entity.
- [IOnEntityTakeDamageEvent](/docs/api/shared/events/ionentitytakedamageevent) - Called when an entity takes damage.
- [IOnEntityTouchEvent](/docs/api/shared/events/ionentitytouchevent) - Called when an entity is touching another entity.
- [IOnEntityTouchHookEvent](/docs/api/shared/events/ionentitytouchhookevent)
- [IOnItemServicesCanAcquireHookEvent](/docs/api/shared/events/ionitemservicescanacquirehookevent)
- [IOnMapLoadEvent](/docs/api/shared/events/ionmaploadevent) - Called when the map is loaded.
- [IOnMapUnloadEvent](/docs/api/shared/events/ionmapunloadevent) - Called when the map is unloaded.
- [IOnPrecacheResourceEvent](/docs/api/shared/events/ionprecacheresourceevent)
- [IOnWeaponServicesCanUseHookEvent](/docs/api/shared/events/ionweaponservicescanusehookevent)

- [ClientKind](/docs/api/shared/events/clientkind)
- [GameButtonFlags](/docs/api/shared/events/gamebuttonflags)
- [GameButtons](/docs/api/shared/events/gamebuttons)
- [KeyKind](/docs/api/shared/events/keykind)

- [EventDelegates.OnClientConnected](/docs/api/shared/events/eventdelegates/onclientconnected) - Called when a client connects to the server.
- [EventDelegates.OnClientDisconnected](/docs/api/shared/events/eventdelegates/onclientdisconnected) - Called when a client disconnects from the server.
- [EventDelegates.OnClientKeyStateChanged](/docs/api/shared/events/eventdelegates/onclientkeystatechanged) - Called when a client's key state changes.
- [EventDelegates.OnClientProcessUsercmds](/docs/api/shared/events/eventdelegates/onclientprocessusercmds) - Called when a client processes user commands.
This callback is a hot path, be careful with it and don't do anything expensive.
- [EventDelegates.OnClientPutInServer](/docs/api/shared/events/eventdelegates/onclientputinserver) - Called when a client is fully put in server.
- [EventDelegates.OnClientSteamAuthorize](/docs/api/shared/events/eventdelegates/onclientsteamauthorize) - Called when a client is authorized by Steam.
- [EventDelegates.OnClientSteamAuthorizeFail](/docs/api/shared/events/eventdelegates/onclientsteamauthorizefail) - Called when a client's Steam authorization fails.
- [EventDelegates.OnCommandExecuteHook](/docs/api/shared/events/eventdelegates/oncommandexecutehook) - Called when a command is executed.
- [EventDelegates.OnConCommandCreated](/docs/api/shared/events/eventdelegates/onconcommandcreated) - Called when a ConCommand is created.
- [EventDelegates.OnConVarCreated](/docs/api/shared/events/eventdelegates/onconvarcreated) - Called when a ConVar is created.
- [EventDelegates.OnConVarValueChanged](/docs/api/shared/events/eventdelegates/onconvarvaluechanged) - Called when a ConVar value is changed.
- [EventDelegates.OnConsoleOutput](/docs/api/shared/events/eventdelegates/onconsoleoutput) - Called when a console output is received.
- [EventDelegates.OnEntityCreated](/docs/api/shared/events/eventdelegates/onentitycreated) - Called when an entity is created.
- [EventDelegates.OnEntityDeleted](/docs/api/shared/events/eventdelegates/onentitydeleted) - Called when an entity is deleted.
- [EventDelegates.OnEntityEndTouch](/docs/api/shared/events/eventdelegates/onentityendtouch) - Called when an entity ends touching another entity.
- [EventDelegates.OnEntityParentChanged](/docs/api/shared/events/eventdelegates/onentityparentchanged) - Called when an entity's parent changes.
- [EventDelegates.OnEntitySpawned](/docs/api/shared/events/eventdelegates/onentityspawned) - Called when an entity is spawned.
- [EventDelegates.OnEntityStartTouch](/docs/api/shared/events/eventdelegates/onentitystarttouch) - Called when an entity starts touching another entity.
- [EventDelegates.OnEntityTakeDamage](/docs/api/shared/events/eventdelegates/onentitytakedamage) - Called when an entity takes damage.
- [EventDelegates.OnEntityTouch](/docs/api/shared/events/eventdelegates/onentitytouch) - Called when an entity is touching another entity.
- [EventDelegates.OnEntityTouchHook](/docs/api/shared/events/eventdelegates/onentitytouchhook)
- [EventDelegates.OnItemServicesCanAcquireHook](/docs/api/shared/events/eventdelegates/onitemservicescanacquirehook) - Called when an item services can acquire hook is triggered.
- [EventDelegates.OnMapLoad](/docs/api/shared/events/eventdelegates/onmapload) - Called when a map is loaded.
- [EventDelegates.OnMapUnload](/docs/api/shared/events/eventdelegates/onmapunload) - Called when a map is unloaded.
- [EventDelegates.OnPrecacheResource](/docs/api/shared/events/eventdelegates/onprecacheresource) - Called when the game is precaching resources.
- [EventDelegates.OnSteamAPIActivated](/docs/api/shared/events/eventdelegates/onsteamapiactivated) - Called when Steam API is activated.
- [EventDelegates.OnTick](/docs/api/shared/events/eventdelegates/ontick) - Called when game has processed a tick. Won't be called if the server is in hibernation.
This callback is a hot path, be careful with it and don't do anything expensive.
- [EventDelegates.OnWeaponServicesCanUseHook](/docs/api/shared/events/eventdelegates/onweaponservicescanusehook) - Called when a weapon services can use hook is triggered.

