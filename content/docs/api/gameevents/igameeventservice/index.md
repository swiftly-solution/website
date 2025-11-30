---
title: Interface IGameEventService
---

# Interface IGameEventService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L8)

**Namespace**: [SwiftlyS2.Shared.GameEvents](/docs/api/gameevents)

**Assembly**: SwiftlyS2.CS2.dll

Plugin-scoped service for managing game events.

```csharp
public interface IGameEventService
```

## Methods

### Fire()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L57)

Fires an event to all players.

```csharp
void Fire<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**:  - The event type.

### Fire(Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L64)

Fires an event to all players with a configured event.
<param name="configureEvent">The action to configure the event.</param>

```csharp
void Fire<T>(Action<T> configureEvent) where T : IGameEvent<T>
```

#### Parameters

- **configureEvent**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T>

#### Type Parameters

- **T**:  - The event type.

### FireToPlayer(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L71)

Fires an event to a player.

```csharp
void FireToPlayer<T>(int slot) where T : IGameEvent<T>
```

#### Parameters

- **slot**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player slot.

#### Type Parameters

- **T**:  - The event type.

### FireToPlayer(int, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L79)

Fires an event to a player with a configured event.

```csharp
void FireToPlayer<T>(int slot, Action<T> configureEvent) where T : IGameEvent<T>
```

#### Parameters

- **slot**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player slot.
- **configureEvent**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T> - The action to configure the event.

#### Type Parameters

- **T**:  - The event type.

### FireToServer()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L85)

Fires an event to the server.

```csharp
void FireToServer<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**: 

### FireToServer(Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L92)

Fires an event to the server with a configured event.

```csharp
void FireToServer<T>(Action<T> configureEvent) where T : IGameEvent<T>
```

#### Parameters

- **configureEvent**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T> - The action to configure the event.

#### Type Parameters

- **T**:  - The event type.

### HookPost(GameEventHandler)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L32)

Hooks a post-event callback.

```csharp
Guid HookPost<T>(IGameEventService.GameEventHandler<T> callback) where T : IGameEvent<T>
```

#### Parameters

- **callback**: [IGameEventService](/docs/api/gameevents/igameeventservice).[GameEventHandler](/docs/api/gameevents/igameeventservice/gameeventhandlert)<T> - The callback to hook.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - A GUID representing the hook. You can use this to unhook the callback later.

#### Type Parameters

- **T**:  - The event type.

### HookPre(GameEventHandler)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L24)

Hooks a pre-event callback.

```csharp
Guid HookPre<T>(IGameEventService.GameEventHandler<T> callback) where T : IGameEvent<T>
```

#### Parameters

- **callback**: [IGameEventService](/docs/api/gameevents/igameeventservice).[GameEventHandler](/docs/api/gameevents/igameeventservice/gameeventhandlert)<T> - The callback to hook.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - A GUID representing the hook. You can use this to unhook the callback later.

#### Type Parameters

- **T**:  - The event type.

### Unhook(Guid)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L38)

Unhooks a callback.

```csharp
void Unhook(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The GUID of the hook to unhook.

### UnhookPost()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L50)

Unhooks all post-event callbacks.

```csharp
void UnhookPost<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**:  - The event type.

### UnhookPre()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L44)

Unhooks all pre-event callbacks.

```csharp
void UnhookPre<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**:  - The event type.

