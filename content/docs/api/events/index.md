---
title: Events
---

# Namespace SwiftlyS2.Shared.Events

- [EventDelegates](/docs/api/events/eventdelegates) - Event delegates.
- [EventListener<T>](/docs/api/events/eventlistenert)

- [IEventSubscriber](/docs/api/events/ieventsubscriber) - Custom event subscriber interface.
- [IOnClientConnectedEvent](/docs/api/events/ionclientconnectedevent) - Called when a client connects to the server.
- [IOnClientDisconnectedEvent](/docs/api/events/ionclientdisconnectedevent) - Called when a client disconnects from the server.
- [IOnClientKeyStateChangedEvent](/docs/api/events/ionclientkeystatechangedevent) - Called when a client's key state changes.
- [IOnClientProcessUsercmdsEvent](/docs/api/events/ionclientprocessusercmdsevent) - Called when a client processes user commands.
This callback is a hot path, be careful with it and don't do anything expensive.
- [IOnClientPutInServerEvent](/docs/api/events/ionclientputinserverevent) - Called when a client is put in the server.
- [IOnClientSteamAuthorizeEvent](/docs/api/events/ionclientsteamauthorizeevent) - Called when a client is authorized via Steam.
- [IOnClientSteamAuthorizeFailEvent](/docs/api/events/ionclientsteamauthorizefailevent) - Called when a client's Steam authorization fails.
- [IOnCommandExecuteHookEvent](/docs/api/events/ioncommandexecutehookevent) - Called when a command is executed.
- [IOnConCommandCreated](/docs/api/events/ionconcommandcreated) - Called when a ConVar is created.
- [IOnConVarCreated](/docs/api/events/ionconvarcreated) - Called when a ConVar is created.
- [IOnConVarValueChanged](/docs/api/events/ionconvarvaluechanged) - Called when a ConVar value is changed.
- [IOnConsoleOutputEvent](/docs/api/events/ionconsoleoutputevent) - Called when a console output is received.
- [IOnEntityCreatedEvent](/docs/api/events/ionentitycreatedevent) - Called when an entity is created.
- [IOnEntityDeletedEvent](/docs/api/events/ionentitydeletedevent) - Called when an entity is deleted.
- [IOnEntityEndTouchEvent](/docs/api/events/ionentityendtouchevent) - Called when an entity ends touching another entity.
- [IOnEntityIdentityAcceptInputHookEvent](/docs/api/events/ionentityidentityacceptinputhookevent) - Called when the entity identity accept input hook is triggered.
- [IOnEntityParentChangedEvent](/docs/api/events/ionentityparentchangedevent) - Called when an entity's parent changes.
- [IOnEntitySpawnedEvent](/docs/api/events/ionentityspawnedevent) - Called when an entity is spawned.
- [IOnEntityStartTouchEvent](/docs/api/events/ionentitystarttouchevent) - Called when an entity starts touching another entity.
- [IOnEntityTakeDamageEvent](/docs/api/events/ionentitytakedamageevent) - Called when an entity takes damage.
- [IOnEntityTouchEvent](/docs/api/events/ionentitytouchevent) - Called when an entity is touching another entity.
- [IOnEntityTouchHookEvent](/docs/api/events/ionentitytouchhookevent)
- [IOnItemServicesCanAcquireHookEvent](/docs/api/events/ionitemservicescanacquirehookevent)
- [IOnMapLoadEvent](/docs/api/events/ionmaploadevent) - Called when the map is loaded.
- [IOnMapUnloadEvent](/docs/api/events/ionmapunloadevent) - Called when the map is unloaded.
- [IOnMovementServicesRunCommandHookEvent](/docs/api/events/ionmovementservicesruncommandhookevent) - Called when the movement services run command hook is triggered.
- [IOnPlayerPawnPostThinkHookEvent](/docs/api/events/ionplayerpawnpostthinkhookevent) - Called when the player pawn post think hook is triggered.
- [IOnPrecacheResourceEvent](/docs/api/events/ionprecacheresourceevent)
- [IOnWeaponServicesCanUseHookEvent](/docs/api/events/ionweaponservicescanusehookevent)

- [ClientKind](/docs/api/events/clientkind)
- [GameButtonFlags](/docs/api/events/gamebuttonflags)
- [GameButtons](/docs/api/events/gamebuttons)
- [KeyKind](/docs/api/events/keykind)

- [EventDelegates.OnClientConnected](/docs/api/events/eventdelegates/onclientconnected) - Called when a client connects to the server.
- [EventDelegates.OnClientDisconnected](/docs/api/events/eventdelegates/onclientdisconnected) - Called when a client disconnects from the server.
- [EventDelegates.OnClientKeyStateChanged](/docs/api/events/eventdelegates/onclientkeystatechanged) - Called when a client's key state changes.
- [EventDelegates.OnClientProcessUsercmds](/docs/api/events/eventdelegates/onclientprocessusercmds) - Called when a client processes user commands.
This callback is a hot path, be careful with it and don't do anything expensive.
- [EventDelegates.OnClientPutInServer](/docs/api/events/eventdelegates/onclientputinserver) - Called when a client is fully put in server.
- [EventDelegates.OnClientSteamAuthorize](/docs/api/events/eventdelegates/onclientsteamauthorize) - Called when a client is authorized by Steam.
- [EventDelegates.OnClientSteamAuthorizeFail](/docs/api/events/eventdelegates/onclientsteamauthorizefail) - Called when a client's Steam authorization fails.
- [EventDelegates.OnCommandExecuteHook](/docs/api/events/eventdelegates/oncommandexecutehook) - Called when a command is executed.
- [EventDelegates.OnConCommandCreated](/docs/api/events/eventdelegates/onconcommandcreated) - Called when a ConCommand is created.
- [EventDelegates.OnConVarCreated](/docs/api/events/eventdelegates/onconvarcreated) - Called when a ConVar is created.
- [EventDelegates.OnConVarValueChanged](/docs/api/events/eventdelegates/onconvarvaluechanged) - Called when a ConVar value is changed.
- [EventDelegates.OnConsoleOutput](/docs/api/events/eventdelegates/onconsoleoutput) - Called when a console output is received.
- [EventDelegates.OnEntityCreated](/docs/api/events/eventdelegates/onentitycreated) - Called when an entity is created.
- [EventDelegates.OnEntityDeleted](/docs/api/events/eventdelegates/onentitydeleted) - Called when an entity is deleted.
- [EventDelegates.OnEntityEndTouch](/docs/api/events/eventdelegates/onentityendtouch) - Called when an entity ends touching another entity.
- [EventDelegates.OnEntityIdentityAcceptInputHook](/docs/api/events/eventdelegates/onentityidentityacceptinputhook) - Called when an entity identity accept input hook is triggered.
- [EventDelegates.OnEntityParentChanged](/docs/api/events/eventdelegates/onentityparentchanged) - Called when an entity's parent changes.
- [EventDelegates.OnEntitySpawned](/docs/api/events/eventdelegates/onentityspawned) - Called when an entity is spawned.
- [EventDelegates.OnEntityStartTouch](/docs/api/events/eventdelegates/onentitystarttouch) - Called when an entity starts touching another entity.
- [EventDelegates.OnEntityTakeDamage](/docs/api/events/eventdelegates/onentitytakedamage) - Called when an entity takes damage.
- [EventDelegates.OnEntityTouch](/docs/api/events/eventdelegates/onentitytouch) - Called when an entity is touching another entity.
- [EventDelegates.OnEntityTouchHook](/docs/api/events/eventdelegates/onentitytouchhook)
- [EventDelegates.OnItemServicesCanAcquireHook](/docs/api/events/eventdelegates/onitemservicescanacquirehook) - Called when an item services can acquire hook is triggered.
- [EventDelegates.OnMapLoad](/docs/api/events/eventdelegates/onmapload) - Called when a map is loaded.
- [EventDelegates.OnMapUnload](/docs/api/events/eventdelegates/onmapunload) - Called when a map is unloaded.
- [EventDelegates.OnMovementServicesRunCommandHook](/docs/api/events/eventdelegates/onmovementservicesruncommandhook) - Called when the movement services run command hook is triggered.
- [EventDelegates.OnPlayerPawnPostThink](/docs/api/events/eventdelegates/onplayerpawnpostthink) - Called when the player pawn post think hook is triggered.
- [EventDelegates.OnPrecacheResource](/docs/api/events/eventdelegates/onprecacheresource) - Called when the game is precaching resources.
- [EventDelegates.OnStartupServer](/docs/api/events/eventdelegates/onstartupserver) - Called when the server is started.
- [EventDelegates.OnSteamAPIActivated](/docs/api/events/eventdelegates/onsteamapiactivated) - Called when Steam API is activated.
- [EventDelegates.OnTick](/docs/api/events/eventdelegates/ontick) - Called when game has processed a tick. Won't be called if the server is in hibernation.
This callback is a hot path, be careful with it and don't do anything expensive.
- [EventDelegates.OnWeaponServicesCanUseHook](/docs/api/events/eventdelegates/onweaponservicescanusehook) - Called when a weapon services can use hook is triggered.
- [EventDelegates.OnWorldUpdate](/docs/api/events/eventdelegates/onworldupdate) - Called when the world is updated. This happens even in hibernation.
This callback is a hot path, be careful with it and don't do anything expensive.

