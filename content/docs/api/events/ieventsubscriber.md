---
title: IEventSubscriber
---

# Interface IEventSubscriber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Events](/docs/api/events)

**Assembly**: SwiftlyS2.CS2.dll

Custom event subscriber interface.

```csharp
public interface IEventSubscriber
```

### OnClientConnected

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L29)

Called when a client connects to the server.

```csharp
event EventDelegates.OnClientConnected? OnClientConnected
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnClientConnected](/docs/api/events/eventdelegates/onclientconnected)?

### OnClientDisconnected

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L34)

Called when a client disconnects from the server.

```csharp
event EventDelegates.OnClientDisconnected? OnClientDisconnected
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnClientDisconnected](/docs/api/events/eventdelegates/onclientdisconnected)?

### OnClientKeyStateChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L39)

Called when a client's key state changes.

```csharp
event EventDelegates.OnClientKeyStateChanged? OnClientKeyStateChanged
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnClientKeyStateChanged](/docs/api/events/eventdelegates/onclientkeystatechanged)?

### OnClientProcessUsercmds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L90)

Called when the game process user's input.
This callback is a hot path, be careful with it and don't do anything expensive.

```csharp
event EventDelegates.OnClientProcessUsercmds? OnClientProcessUsercmds
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnClientProcessUsercmds](/docs/api/events/eventdelegates/onclientprocessusercmds)?

### OnClientPutInServer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L44)

Called when a client is fully put in server.

```csharp
event EventDelegates.OnClientPutInServer? OnClientPutInServer
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnClientPutInServer](/docs/api/events/eventdelegates/onclientputinserver)?

### OnClientSteamAuthorize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L49)

Called when a client is authorized by Steam.

```csharp
event EventDelegates.OnClientSteamAuthorize? OnClientSteamAuthorize
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnClientSteamAuthorize](/docs/api/events/eventdelegates/onclientsteamauthorize)?

### OnClientSteamAuthorizeFail

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L54)

Called when a client's Steam authorization fails.

```csharp
event EventDelegates.OnClientSteamAuthorizeFail? OnClientSteamAuthorizeFail
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnClientSteamAuthorizeFail](/docs/api/events/eventdelegates/onclientsteamauthorizefail)?

### OnCommandExecuteHook

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L135)

Called when a command is executed.

```csharp
event EventDelegates.OnCommandExecuteHook? OnCommandExecuteHook
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnCommandExecuteHook](/docs/api/events/eventdelegates/oncommandexecutehook)?

### OnConCommandCreated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L100)

Called when a ConCommand is created.

```csharp
event EventDelegates.OnConCommandCreated? OnConCommandCreated
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnConCommandCreated](/docs/api/events/eventdelegates/onconcommandcreated)?

### OnConVarCreated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L105)

Called when a ConVar is created.

```csharp
event EventDelegates.OnConVarCreated? OnConVarCreated
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnConVarCreated](/docs/api/events/eventdelegates/onconvarcreated)?

### OnConVarValueChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L95)

Called when a ConVar value is changed.

```csharp
event EventDelegates.OnConVarValueChanged? OnConVarValueChanged
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnConVarValueChanged](/docs/api/events/eventdelegates/onconvarvaluechanged)?

### OnConsoleOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L130)

Called when the game outputs a console message.

```csharp
event EventDelegates.OnConsoleOutput? OnConsoleOutput
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnConsoleOutput](/docs/api/events/eventdelegates/onconsoleoutput)?

### OnEntityCreated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L59)

Called when an entity is created.

```csharp
event EventDelegates.OnEntityCreated? OnEntityCreated
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityCreated](/docs/api/events/eventdelegates/onentitycreated)?

### OnEntityDeleted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L64)

Called when an entity is deleted.

```csharp
event EventDelegates.OnEntityDeleted? OnEntityDeleted
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityDeleted](/docs/api/events/eventdelegates/onentitydeleted)?

### OnEntityEndTouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L153)

Called when an entity ends touching another entity.

```csharp
event EventDelegates.OnEntityEndTouch? OnEntityEndTouch
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityEndTouch](/docs/api/events/eventdelegates/onentityendtouch)?

### OnEntityIdentityAcceptInputHook

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L168)

Called when an entity identity accept input hook is triggered.

```csharp
event EventDelegates.OnEntityIdentityAcceptInputHook? OnEntityIdentityAcceptInputHook
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityIdentityAcceptInputHook](/docs/api/events/eventdelegates/onentityidentityacceptinputhook)?

### OnEntityParentChanged

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L69)

Called when an entity's parent changes.

```csharp
event EventDelegates.OnEntityParentChanged? OnEntityParentChanged
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityParentChanged](/docs/api/events/eventdelegates/onentityparentchanged)?

### OnEntitySpawned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L74)

Called when an entity is spawned.

```csharp
event EventDelegates.OnEntitySpawned? OnEntitySpawned
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntitySpawned](/docs/api/events/eventdelegates/onentityspawned)?

### OnEntityStartTouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L143)

Called when an entity starts touching another entity.

```csharp
event EventDelegates.OnEntityStartTouch? OnEntityStartTouch
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityStartTouch](/docs/api/events/eventdelegates/onentitystarttouch)?

### OnEntityTakeDamage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L110)

Called when an entity takes damage.

```csharp
event EventDelegates.OnEntityTakeDamage? OnEntityTakeDamage
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityTakeDamage](/docs/api/events/eventdelegates/onentitytakedamage)?

### OnEntityTouch

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L148)

Called when an entity is touching another entity.

```csharp
event EventDelegates.OnEntityTouch? OnEntityTouch
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityTouch](/docs/api/events/eventdelegates/onentitytouch)?

### OnEntityTouchHook

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L138)

```csharp
[Obsolete("OnEntityTouchHook is deprecated. Use OnEntityStartTouch, OnEntityTouch, or OnEntityEndTouch instead.")]
event EventDelegates.OnEntityTouchHook? OnEntityTouchHook
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnEntityTouchHook](/docs/api/events/eventdelegates/onentitytouchhook)?

### OnItemServicesCanAcquireHook

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L120)

Called when an item services can acquire hook is triggered.

```csharp
event EventDelegates.OnItemServicesCanAcquireHook? OnItemServicesCanAcquireHook
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnItemServicesCanAcquireHook](/docs/api/events/eventdelegates/onitemservicescanacquirehook)?

### OnMapLoad

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L79)

Called when a map is loaded.

```csharp
event EventDelegates.OnMapLoad? OnMapLoad
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnMapLoad](/docs/api/events/eventdelegates/onmapload)?

### OnMapUnload

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L84)

Called when a map is unloaded.

```csharp
event EventDelegates.OnMapUnload? OnMapUnload
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnMapUnload](/docs/api/events/eventdelegates/onmapunload)?

### OnMovementServicesRunCommandHook

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L158)

Called when the movement services run command hook is triggered.

```csharp
event EventDelegates.OnMovementServicesRunCommandHook? OnMovementServicesRunCommandHook
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnMovementServicesRunCommandHook](/docs/api/events/eventdelegates/onmovementservicesruncommandhook)?

### OnPlayerPawnPostThink

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L163)

Called when the player pawn post think hook is triggered.

```csharp
event EventDelegates.OnPlayerPawnPostThink? OnPlayerPawnPostThink
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnPlayerPawnPostThink](/docs/api/events/eventdelegates/onplayerpawnpostthink)?

### OnPrecacheResource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L115)

Called when the game is precaching resources.

```csharp
event EventDelegates.OnPrecacheResource? OnPrecacheResource
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnPrecacheResource](/docs/api/events/eventdelegates/onprecacheresource)?

### OnStartupServer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L173)

Called when the server is started.

```csharp
event EventDelegates.OnStartupServer? OnStartupServer
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnStartupServer](/docs/api/events/eventdelegates/onstartupserver)?

### OnSteamAPIActivated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L24)

Called when Steam API is activated.

```csharp
event EventDelegates.OnSteamAPIActivated? OnSteamAPIActivated
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnSteamAPIActivated](/docs/api/events/eventdelegates/onsteamapiactivated)?

### OnTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L13)

Called when game has processed a tick. Won't be called if the server is in hibernation.
This callback is a hot path, be careful with it and don't do anything expensive.

```csharp
event EventDelegates.OnTick? OnTick
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnTick](/docs/api/events/eventdelegates/ontick)?

### OnWeaponServicesCanUseHook

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L125)

Called when a weapon services can use hook is triggered.

```csharp
event EventDelegates.OnWeaponServicesCanUseHook? OnWeaponServicesCanUseHook
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnWeaponServicesCanUseHook](/docs/api/events/eventdelegates/onweaponservicescanusehook)?

### OnWorldUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Events/IEventSubscriber.cs#L19)

Called when the world is updated. This happens even in hibernation.
This callback is a hot path, be careful with it and don't do anything expensive.

```csharp
event EventDelegates.OnWorldUpdate? OnWorldUpdate
```

#### Event Type

- [EventDelegates](/docs/api/events/eventdelegates).[OnWorldUpdate](/docs/api/events/eventdelegates/onworldupdate)?

