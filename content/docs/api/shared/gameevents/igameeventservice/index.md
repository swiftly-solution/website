---
title: Interface IGameEventService
---

```csharp
public interface IGameEventService
```

## Methods

### **Fire<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L57)

```csharp
void Fire<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**:  - The event type.

### **Fire<T>(Action<T>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L64)

```csharp
void Fire<T>(Action<T> configureEvent) where T : IGameEvent<T>
```

#### Parameters

- **configureEvent**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T>

#### Type Parameters

- **T**:  - The event type.

### **FireToPlayer<T>(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L71)

```csharp
void FireToPlayer<T>(int slot) where T : IGameEvent<T>
```

#### Parameters

- **slot**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player slot.

#### Type Parameters

- **T**:  - The event type.

### **FireToPlayer<T>(int, Action<T>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L79)

```csharp
void FireToPlayer<T>(int slot, Action<T> configureEvent) where T : IGameEvent<T>
```

#### Parameters

- **slot**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player slot.
- **configureEvent**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T> - The action to configure the event.

#### Type Parameters

- **T**:  - The event type.

### **FireToServer<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L85)

```csharp
void FireToServer<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**: 

### **FireToServer<T>(Action<T>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L92)

```csharp
void FireToServer<T>(Action<T> configureEvent) where T : IGameEvent<T>
```

#### Parameters

- **configureEvent**: [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<T> - The action to configure the event.

#### Type Parameters

- **T**:  - The event type.

### **HookPost<T>(GameEventHandler<T>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L32)

```csharp
Guid HookPost<T>(IGameEventService.GameEventHandler<T> callback) where T : IGameEvent<T>
```

#### Parameters

- **callback**: [IGameEventService](/docs/api/shared/gameevents/igameeventservice).[GameEventHandler](/docs/api/shared/gameevents/igameeventservice/gameeventhandler-1)<T> - The callback to hook.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - A GUID representing the hook. You can use this to unhook the callback later.

#### Type Parameters

- **T**:  - The event type.

### **HookPre<T>(GameEventHandler<T>)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L24)

```csharp
Guid HookPre<T>(IGameEventService.GameEventHandler<T> callback) where T : IGameEvent<T>
```

#### Parameters

- **callback**: [IGameEventService](/docs/api/shared/gameevents/igameeventservice).[GameEventHandler](/docs/api/shared/gameevents/igameeventservice/gameeventhandler-1)<T> - The callback to hook.

#### Returns

- [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - A GUID representing the hook. You can use this to unhook the callback later.

#### Type Parameters

- **T**:  - The event type.

### **Unhook(Guid)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L38)

```csharp
void Unhook(Guid guid)
```

#### Parameters

- **guid**: [Guid](https://learn.microsoft.com/dotnet/api/system.guid) - The GUID of the hook to unhook.

### **UnhookPost<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L50)

```csharp
void UnhookPost<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**:  - The event type.

### **UnhookPre<T>()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/GameEvents/IGameEventService.cs#L44)

```csharp
void UnhookPre<T>() where T : IGameEvent<T>
```

#### Type Parameters

- **T**:  - The event type.

