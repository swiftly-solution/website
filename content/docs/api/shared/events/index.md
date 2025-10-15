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
- [IOnConsoleOutputEvent](/docs/api/shared/events/ionconsoleoutputevent) - Called when a console output is received.
- [IOnEntityCreatedEvent](/docs/api/shared/events/ionentitycreatedevent) - Called when an entity is created.
- [IOnEntityDeletedEvent](/docs/api/shared/events/ionentitydeletedevent) - Called when an entity is deleted.
- [IOnEntityParentChangedEvent](/docs/api/shared/events/ionentityparentchangedevent) - Called when an entity's parent changes.
- [IOnEntitySpawnedEvent](/docs/api/shared/events/ionentityspawnedevent) - Called when an entity is spawned.
- [IOnEntityTakeDamageEvent](/docs/api/shared/events/ionentitytakedamageevent) - Called when an entity takes damage.
- [IOnItemServicesCanAcquireHookEvent](/docs/api/shared/events/ionitemservicescanacquirehookevent)
- [IOnMapLoadEvent](/docs/api/shared/events/ionmaploadevent) - Called when the map is loaded.
- [IOnMapUnloadEvent](/docs/api/shared/events/ionmapunloadevent) - Called when the map is unloaded.
- [IOnPrecacheResourceEvent](/docs/api/shared/events/ionprecacheresourceevent)

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
- [EventDelegates.OnConsoleOutput](/docs/api/shared/events/eventdelegates/onconsoleoutput) - Called when a console output is received.
- [EventDelegates.OnEntityCreated](/docs/api/shared/events/eventdelegates/onentitycreated) - Called when an entity is created.
- [EventDelegates.OnEntityDeleted](/docs/api/shared/events/eventdelegates/onentitydeleted) - Called when an entity is deleted.
- [EventDelegates.OnEntityParentChanged](/docs/api/shared/events/eventdelegates/onentityparentchanged) - Called when an entity's parent changes.
- [EventDelegates.OnEntitySpawned](/docs/api/shared/events/eventdelegates/onentityspawned) - Called when an entity is spawned.
- [EventDelegates.OnEntityTakeDamage](/docs/api/shared/events/eventdelegates/onentitytakedamage) - Called when an entity takes damage.
- [EventDelegates.OnItemServicesCanAcquireHook](/docs/api/shared/events/eventdelegates/onitemservicescanacquirehook) - Called when an item services can acquire hook is triggered.
- [EventDelegates.OnMapLoad](/docs/api/shared/events/eventdelegates/onmapload) - Called when a map is loaded.
- [EventDelegates.OnMapUnload](/docs/api/shared/events/eventdelegates/onmapunload) - Called when a map is unloaded.
- [EventDelegates.OnPrecacheResource](/docs/api/shared/events/eventdelegates/onprecacheresource) - Called when the game is precaching resources.
- [EventDelegates.OnTick](/docs/api/shared/events/eventdelegates/ontick) - Called when game has processed a tick. Won't be called if the server is in hibernation.
This callback is a hot path, be careful with it and don't do anything expensive.

